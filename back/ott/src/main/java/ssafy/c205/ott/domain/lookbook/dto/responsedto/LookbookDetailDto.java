package ssafy.c205.ott.domain.lookbook.dto.responsedto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class LookbookDetailDto {
    private long viewCount;
    private String content;
    private String nickname;
    private List<ClothesImageDto> images;
    private List<String> tags;
    private List<ClothesImageDto> salesClothes;
    private LocalDateTime createdAt;
    private String thumnail;
    private int cntLike;
    private int cntComment;
    private boolean isLike;

    @Builder
    public LookbookDetailDto(long viewCount, String content, String nickname, List<ClothesImageDto> images, List<String> tags, List<ClothesImageDto> salesClothes, LocalDateTime createdAt, String thumnail, int cntLike,int cntComment, boolean isLike) {
        this.viewCount = viewCount;
        this.content = content;
        this.nickname = nickname;
        this.images = images;
        this.tags = tags;
        this.salesClothes = salesClothes;
        this.createdAt = createdAt;
        this.thumnail = thumnail;
        this.cntLike = cntLike;
        this.isLike = isLike;
        this.cntComment = cntComment;
    }

    public LookbookDetailDto() {

    }
}
