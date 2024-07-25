package ssafy.c205.ott.domain.account.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssafy.c205.ott.domain.account.dto.request.MemberLoginUpdateRequestDto;
import ssafy.c205.ott.domain.account.dto.request.MemberRegisterRequestDto;
import ssafy.c205.ott.domain.account.dto.request.MemberRequestDto;
import ssafy.c205.ott.domain.account.dto.request.MemberUpdateRequestDto;
import ssafy.c205.ott.domain.account.dto.response.DeleteMemberSuccessDto;
import ssafy.c205.ott.domain.account.dto.response.RegisterMemberSuccessDto;
import ssafy.c205.ott.domain.account.dto.response.UpdateMemberSuccessDto;
import ssafy.c205.ott.domain.account.entity.Member;
import ssafy.c205.ott.domain.account.exception.MemberNotFoundException;
import ssafy.c205.ott.domain.account.repository.MemberRepository;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberWriteService {
    //Todo: 이미지 업로드 및 url 가져오기 구현
    private final MemberRepository memberRepository;
    private final MemberValidator memberValidator;

    public RegisterMemberSuccessDto registerMember(MemberRegisterRequestDto memberRegisterRequestDto) {
        Member member = Member.builder()
                .name(memberRegisterRequestDto.getName())
                .email(memberRegisterRequestDto.getEmail())
                .sso(memberRegisterRequestDto.getSso())
                .role(memberRegisterRequestDto.getRole())
                .build();

        memberRepository.save(member);
        return new RegisterMemberSuccessDto(member.getId());
    }


    public UpdateMemberSuccessDto updateMember(MemberUpdateRequestDto memberUpdateRequestDto) {

        Member member = memberRepository.findById(memberUpdateRequestDto.getMemberId()).orElseThrow(MemberNotFoundException::new);

        member.updateMember(memberUpdateRequestDto.getNickname(), memberUpdateRequestDto.getPhoneNumber(), memberUpdateRequestDto.getIntroduction(), memberUpdateRequestDto.getProfileImageUrl(), memberUpdateRequestDto.getHeight()
                , memberUpdateRequestDto.getWeight(), memberUpdateRequestDto.getGender(), memberUpdateRequestDto.getBodyType(), memberUpdateRequestDto.getPublicStatus());
        return new UpdateMemberSuccessDto(member.getId());
    }

    public UpdateMemberSuccessDto updateNameAndEmail(MemberLoginUpdateRequestDto memberLoginUpdateRequestDto) {

        Member member = memberRepository.findById(memberLoginUpdateRequestDto.getMemberId()).orElseThrow(MemberNotFoundException::new);
        member.updateNameAndEmail(memberLoginUpdateRequestDto.getEmail(), memberLoginUpdateRequestDto.getName());
        return new UpdateMemberSuccessDto(member.getId());
    }

    public DeleteMemberSuccessDto deleteMember(MemberRequestDto memberRequestDto) {
        Member member = memberRepository.findById(memberRequestDto.getId()).orElseThrow(MemberNotFoundException::new);
        member.deleteMember();
        return new DeleteMemberSuccessDto();
    }
}
