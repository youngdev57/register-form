import kakaoButton from "@/assets/kakao-button.png";

type Props = {
  onSuccess: () => void;
};

export default function Step3Form({ onSuccess }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">소셜 계정 연동해보세요</p>

        {/* 계정연동 */}
        <div className="flex flex-col gap-3">
          <img src={kakaoButton} alt="카카오 계정 연동" className="" />
        </div>
      </div>

      {/* 가입 완료 버튼 */}
      <button
        onClick={onSuccess}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        가입
      </button>
    </div>
  );
}
