package ssafy.c205.ott.domain.account.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.c205.ott.common.entity.PublicStatus;
import ssafy.c205.ott.domain.account.dto.request.*;
import ssafy.c205.ott.domain.account.dto.response.DeleteMemberSuccessDto;
import ssafy.c205.ott.domain.account.dto.response.FollowResponseDto;
import ssafy.c205.ott.domain.account.dto.response.RegisterMemberSuccessDto;
import ssafy.c205.ott.domain.account.dto.response.UpdateMemberSuccessDto;
import ssafy.c205.ott.domain.account.entity.Follow;
import ssafy.c205.ott.domain.account.entity.FollowStatus;
import ssafy.c205.ott.domain.account.entity.Member;
import ssafy.c205.ott.domain.account.exception.AlreadyFollowException;
import ssafy.c205.ott.domain.account.exception.MemberNotFoundException;
import ssafy.c205.ott.domain.account.repository.FollowRepository;
import ssafy.c205.ott.domain.account.repository.MemberRepository;
import ssafy.c205.ott.domain.account.util.FollowMessage;
import ssafy.c205.ott.domain.closet.service.ClosetService;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberWriteService {
    //Todo: 이미지 업로드 및 url 가져오기 구현
    private final MemberRepository memberRepository;
    private final FollowRepository followRepository;
    private final MemberValidator memberValidator;
    private final ClosetService closetService;

    public RegisterMemberSuccessDto registerMember(MemberRegisterRequestDto memberRegisterRequestDto) {
        Member member = Member.builder()
                .name(memberRegisterRequestDto.getName())
                .email(memberRegisterRequestDto.getEmail())
                .sso(memberRegisterRequestDto.getSso())
                .role(memberRegisterRequestDto.getRole())
                .build();

        memberRepository.save(member);
        closetService.createClosetForMember(member);
        return new RegisterMemberSuccessDto(member.getId());
    }

    private Member findMemberById(Long id) {
        return memberRepository.findById(id).orElseThrow(MemberNotFoundException::new);
    }

    public UpdateMemberSuccessDto updateMember(MemberUpdateRequestDto memberUpdateRequestDto) {
        Member member = findMemberById(memberUpdateRequestDto.getMemberId());
        member.updateMember(memberUpdateRequestDto.getNickname(), memberUpdateRequestDto.getPhoneNumber(), memberUpdateRequestDto.getIntroduction(), memberUpdateRequestDto.getProfileImageUrl(), memberUpdateRequestDto.getHeight()
                , memberUpdateRequestDto.getWeight(), memberUpdateRequestDto.getGender(), memberUpdateRequestDto.getBodyType(), memberUpdateRequestDto.getPublicStatus());
        return new UpdateMemberSuccessDto(member.getId());
    }

    public UpdateMemberSuccessDto updateNameAndEmail(MemberLoginUpdateRequestDto memberLoginUpdateRequestDto) {
        Member member = findMemberById(memberLoginUpdateRequestDto.getMemberId());
        member.updateNameAndEmail(memberLoginUpdateRequestDto.getEmail(), memberLoginUpdateRequestDto.getName());
        return new UpdateMemberSuccessDto(member.getId());
    }

    public DeleteMemberSuccessDto deleteMember(MemberRequestDto memberRequestDto) {
        Member member = findMemberById(memberRequestDto.getId());
        member.deleteMember();
        return new DeleteMemberSuccessDto();
    }

    public FollowResponseDto followMember(FollowRequestDto followRequestDto) {
        memberValidator.validateFollow(followRequestDto);
        Member targetMember = findMemberById(followRequestDto.getTargetMemberId());
        Member requestMember = findMemberById(followRequestDto.getRequestMemberId());

        if (isAlreadyFollowing(targetMember, requestMember)) {
            throw new AlreadyFollowException();
        }

        if (targetMember.getPublicStatus() == PublicStatus.PRIVATE) {
            return handlePrivateFollow(targetMember, requestMember);
        }
        return handlePublicFollow(targetMember, requestMember);
    }

    private boolean isAlreadyFollowing(Member targetMember, Member requestMember) {
        return followRepository.findByToMemberAndFromMember(targetMember, requestMember).isPresent();
    }

    private FollowResponseDto handlePublicFollow(Member targetMember, Member requestMember) {
        Follow follow = createFollow(targetMember, requestMember, FollowStatus.ACCEPT);
        followRepository.save(follow);

        return createFollowResponseDto(follow.getFollowStatus(), targetMember.getFollowers().size(), FollowMessage.FOLLOW_SUCCESS_MESSAGE.getMessage());
    }

    private FollowResponseDto handlePrivateFollow(Member targetMember, Member requestMember) {
        Follow follow = createFollow(targetMember, requestMember, FollowStatus.WAIT);
        followRepository.save(follow);

        return createFollowResponseDto(follow.getFollowStatus(), 0, FollowMessage.FOLLOW_REQUEST_MESSAGE.getMessage());
    }

    private FollowResponseDto createFollowResponseDto(FollowStatus followStatus, int followerCount, String message) {
        return FollowResponseDto.builder()
                .followStatus(followStatus)
                .followerCount(followerCount)
                .message(message)
                .build();
    }

    private Follow createFollow(Member toMember, Member fromMember, FollowStatus followStatus) {
        return Follow.builder()
                .toMember(toMember)
                .fromMember(fromMember)
                .followStatus(followStatus)
                .build();
    }

}
