import { useNavigate } from 'react-router-dom';
import Kakao from '@/common/assets/images/login/kakao.svg';
import LoginWrapper from '@/common/assets/images/login/loginWrapper.svg';
import BackIcon from '@/common/components/icons/BackIcon';

export default function LoginPage() {
  const navigate = useNavigate();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY || '');
  }
  
  // 추가기능 A
  // 추가기능 A 관련함수
  // 추가기능 A 관련함수
  // 추가기능 A 관련함수
  // 추가기능 A 관련함수

  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_API;

  const handleKakaoLogin = async () => {
    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
    });
  };

  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{
        backgroundImage: `url(${LoginWrapper})`,
        backgroundSize: 'cover',
      }}
    >
      <BackIcon
        onClick={() => navigate('/')}
        className="ml-[0.9rem] cursor-pointer self-start"
        color="black"
      />
      {/*추가기능 A 관련 코드*/}
      {/*추가기능 A 관련 코드*/}
      <div className="ml-[2.5rem] mt-[3.3rem] h-4/6">
        <div
          className="font-custom-body1"
          style={{
            fontSize: '2.8rem',
            lineHeight: '4.2rem',
            letterSpacing: '-0.3px',
          }}
        >
          일상의 고민부터
        </div>
        <div
          className="font-custom-body1"
          style={{
            fontSize: '2.8rem',
            lineHeight: '4.2rem',
            letterSpacing: '-0.3px',
          }}
        >
          재미있는 논쟁까지,
        </div>
        <div
          className="font-custom-subheading"
          style={{
            fontSize: '3.2rem',
            lineHeight: '4.2rem',
            letterSpacing: '-0.3px',
          }}
        >
          고민의참견
        </div>
      </div>
      <button
        onClick={handleKakaoLogin}
        className="mx-auto mt-[4vh] flex h-[5.3rem] w-[34rem] items-center justify-center rounded-[3rem] bg-[#FDDC3F]"
      >
        <img src={Kakao} alt={'카카오 아이콘'} />
        <span className="ml-[0.2rem] font-system-body5">
          카카오 계정으로 시작하기
        </span>
      </button>
    </div>
  );
}
