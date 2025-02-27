import { appDescription, appTitle, kakaoButton, loginContainer, logo, termsText } from './page.css';

export default function LoginPage() {
  return (
    <div className={loginContainer}>
      <div className={logo}>🍽️</div>
      <h1 className={appTitle}>BarBar</h1>
      <p className={appDescription}>친구들과 맛집 정보를 공유하고 발견하세요!</p>

      <button className={kakaoButton}>카카오톡으로 시작하기</button>

      <p className={termsText}>로그인하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</p>
    </div>
  );
}
