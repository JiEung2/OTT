import { useCallback } from "react";
import mainIcon from "../../assets/icons/main.logo.png";
import kakao from "../../assets/images/login/kakao_login.png";
import naver from "../../assets/images/login/naver_login.png";
import google from "../../assets/images/login/google_login.png";
import backgroundImage from "../../assets/images/background_image_survey.png";

const Login = () => {
  const onKakaoLoginClick = useCallback(() => {
    // Please sync "설문 실시 안내" to the project
  }, []);

  const onNaverLoginClick = useCallback(() => {
    // 네이버 로그인 클릭 시 동작
  }, []);

  const onGoogleLoginClick = useCallback(() => {
    // 구글 로그인 클릭 시 동작
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-[600px] h-[852px] relative flex flex-col items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mt-16 w-[116px] h-[116px]">
          <img
            className="w-full h-full rounded-full"
            alt="메인 아이콘"
            src={mainIcon}
          />
        </div>
        <div className="mt-8 text-center text-[31.3px] text-gray font-zen-kaku-gothic-antique">
          <b className="block tracking-[-0.5px] leading-[37.5px]">
            <p>당신만의 온라인</p>
            <p>옷 관리 서비스</p>
          </b>
          <div className="mt-4 text-[16px] leading-[28.16px] text-black">
            <p>가지고 있는 옷 관리부터 스타일 조합,</p>
            <p>친구들의 추천까지 전부 받아보세요</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <img
            className="rounded-md w-[350px] h-[45px] cursor-pointer"
            alt="카카오 로그인"
            src={kakao}
            onClick={onKakaoLoginClick}
          />
          <img
            className="rounded-md w-[350px] h-[45px] cursor-pointer"
            alt="네이버 로그인"
            src={naver}
            onClick={onNaverLoginClick}
          />
          <img
            className="rounded-md w-[350px] h-[45px] cursor-pointer"
            alt="구글 로그인"
            src={google}
            onClick={onGoogleLoginClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
