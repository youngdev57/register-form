import { useRegisterStore } from "@/stores/registerStore";
import { useNavigate } from "react-router-dom";

export default function RegisterSuccessPage() {
  const form = useRegisterStore((state) => state.form);

  const navigate = useNavigate();

  const handleRedirectMain = () => {
    navigate("/");
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
            다양한 콘텐츠를 즐겨보세요! 🎉
          </h2>
        </div>

        {/* 메인 이동 버튼 */}
        <div>
          <button
            onClick={handleRedirectMain}
            className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300 mt-6"
          >
            메인으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}
