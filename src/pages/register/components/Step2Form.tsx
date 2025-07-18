import { useEffect } from "react";
import { INTEREST_OPTIONS } from "@/constants/interests";
import { GENDER_OPTIONS } from "@/constants/genders";

type Props = {
  form: {
    nickname: string;
    birthdate?: string;
    gender?: string;
    interests: string[];
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
  const toggleInterest = (interest: string) => {
    const current = form.interests || [];
    const next = current.includes(interest)
      ? current.filter((item) => item !== interest)
      : [...current, interest];

    onChange("interests", next);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="space-y-4">
      {/* 소개말 */}
      <h2 className="text-xl mb-10">
        아래 정보들은
        <span className="font-bold pl-1">선택 정보</span>이니 <br />
        입력하지 않아도 괜찮아요.
      </h2>

      {/* 닉네임 */}
      <div>
        <label className="block text-sm font-medium mb-2">닉네임</label>
        <input
          type="text"
          value={form.nickname}
          onChange={(e) => onChange("nickname", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder=""
        />
        {form.nickname.length > 0 &&
          (form.nickname.length < 2 || form.nickname.length > 10) && (
            <p className="text-sm text-red-500 mt-1">2~10자로 입력</p>
          )}
      </div>

      {/* 생년월일 */}
      <div>
        {form.birthdate && (
          <div className="flex justify-between items-center">
            {/* {!validateField.id(form.id) && (
                <p className="text-sm text-gray-500">{errorMessage.id}</p>
              )} */}
          </div>
        )}
        <label className="block text-sm font-medium mb-2">생년월일</label>
        <input
          type="text"
          value={form.birthdate || ""}
          onChange={(e) => onChange("birthdate", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="2001-01-01"
        />
      </div>

      {/* 성별 */}
      <div>
        <label className="block text-sm font-medium mb-2">성별</label>
        <div className="flex gap-10">
          {GENDER_OPTIONS.map((gender) => (
            <label key={gender.key} className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value={gender.key}
                checked={form.gender === gender.key}
                onChange={() => onChange("gender", gender.key)}
              />
              {gender.value}
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* 관심분야 */}
      <div>
        <label className="block text-sm font-medium mb-2">관심분야</label>
        <div className="flex flex-wrap gap-x-10 gap-y-2">
          {INTEREST_OPTIONS.map((interest) => (
            <label key={interest.key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.interests?.includes(interest.key)}
                onChange={() => toggleInterest(interest.key)}
              />
              {interest.value}
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* 약관 동의 */}
      <div>
        <label className="flex gap-2 mt-6">
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          모든 약관에 전체 동의합니다.
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            // checked={form.agreeTerms}
            // onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          <p>
            만 14세 이상입니다.
            <span className="text-blue-600 text-sm pl-1">(필수)</span>
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            // checked={form.agreeTerms}
            // onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          <p>
            서비스 이용약관
            <span className="text-blue-600 text-sm pl-1">(필수)</span>
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            // checked={form.agreeTerms}
            // onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          <p>
            개인정보처리방침
            <span className="text-blue-600 text-sm pl-1">(필수)</span>
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            // checked={form.agreeTerms}
            // onChange={(e) => onChange("agreeTerms", e.target.checked)}
          />
          <p>
            이벤트 마케팅 수신동의
            <span className="text-gray-400 text-sm pl-1">(선택)</span>
          </p>
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
