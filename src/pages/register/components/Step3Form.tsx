import NaverLogin from "@/assets/naver-button.png";
import AppleLogin from "@/assets/apple-button.png";

type Props = {
  onSuccess: () => void;
  onLoginGoogle: () => void;
  onLoginNaver: () => void;
  onLoginApple: () => void;
};

export default function Step3Form({
  onSuccess,
  onLoginGoogle,
  onLoginNaver,
  onLoginApple,
}: Props) {
  return (
    <div className="space-y-8">
      {/* 소개말 */}
      <h2 className="text-xl mb-10">
        마지막으로,
        <br />
        소셜 로그인 계정을 연동하면
        <br />
        <span className="font-bold text-blue-600">알림</span>을 보내드려요.
      </h2>

      {/* 계정 연동 영역 */}
      <div className="flex flex-col justify-evenly h-80">
        <div className="w-full">
          <button
            onClick={onLoginGoogle}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span>구글로 로그인하기</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 border-t-2"></div>
          <p className="shrink-0 text-gray-400">또는</p>
          <div className="flex-1 border-t-2"></div>
        </div>

        <div className="flex justify-center gap-4 w-full">
          <button onClick={onLoginNaver} className="size-14">
            <img src={NaverLogin} alt="Naver logo" />
          </button>
          <button onClick={onLoginApple} className="size-14">
            <img
              src={AppleLogin}
              alt="Apple logo"
              className="border rounded-full"
            />
          </button>
        </div>
      </div>

      {/* 가입 버튼 */}
      <div>
        <button
          onClick={onSuccess}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300 mt-6"
        >
          가입
        </button>
      </div>
    </div>
  );
}
