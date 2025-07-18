import { useRegisterStore } from "@/stores/registerStore";
import { useNavigate } from "react-router-dom";

export default function RegisterSuccessPage() {
  const { form, resetForm } = useRegisterStore((state) => ({
    form: state.form,
    resetForm: state.resetForm,
  }));

  const navigate = useNavigate();

  const handleReset = () => {
    resetForm();
    navigate("/");
  };

  const handleLogin = () => {
    window.location.href = "https://youngdev57.github.io/user-login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg p-10 bg-white rounded">
        <div className="flex justify-center">
          <h2 className="text-xl font-bold mb-10">회원가입 완료</h2>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl mb-10">
            <span className="font-bold text-blue-600">
              {form.nickname || form.id}
            </span>
            님의 회원가입이
            <br /> 완료되었어요.
            <br />
            로그인 후 다양한 콘텐츠를 즐겨보세요! 🎉
          </h2>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="w-full bg-white border border-blue-500 text-blue-500 p-2 rounded disabled:bg-gray-300 mt-6 hover:bg-gray-50 transition"
          >
            처음으로
          </button>
          <button
            onClick={handleLogin}
            className="w-full bg-white border border-blue-500 text-blue-500 p-2 rounded disabled:bg-gray-300 mt-6 hover:bg-blue-500 hover:text-white transition"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
