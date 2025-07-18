import { useEffect } from "react";

type Props = {
  form: {
    nickname: string;
    birthdate?: string;
    gender?: string;
    agreeTerms: boolean;
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  isNextDisabled: boolean;
};

export default function Step2Form({
  form,
  onChange,
  onNext,
  isNextDisabled,
}: Props) {
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="space-y-4">
      {/* 생년월일 */}
      <div>
        <label className="block text-sm font-medium">생년월일</label>
        <input
          type="text"
          value={form.birthdate || ""}
          onChange={(e) => onChange("birthdate", e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="2000-01-01"
        />
      </div>

      {/* 성별 */}
      <div>
        <label className="block text-sm font-medium">성별</label>
        <div className="flex gap-4">
          {["male", "female", "none"].map((gender) => (
            <label key={gender} className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={form.gender === gender}
                onChange={() => onChange("gender", gender)}
              />
              {gender === "male"
                ? "남성"
                : gender === "female"
                ? "여성"
                : "선택 안함"}
            </label>
          ))}
        </div>
      </div>

      {/* 닉네임 */}
      <div>
        <label className="block text-sm font-medium">닉네임</label>
        <input
          type="text"
          value={form.nickname}
          onChange={(e) => onChange("nickname", e.target.value)}
          className="w-full border p-2 rounded"
        />
        {form.nickname.length > 0 &&
          (form.nickname.length < 2 || form.nickname.length > 10) && (
            <p className="text-sm text-red-500 mt-1">2~10자로 입력</p>
          )}
      </div>

      {/* 약관 동의 */}
      <div>
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          전체 약관에 동의합니다
        </label>
      </div>

      {/* 다음 버튼 */}
      <div>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        >
          다음
        </button>
      </div>
    </div>
  );
}
