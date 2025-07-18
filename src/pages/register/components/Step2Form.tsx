import type { RegisterForm } from "@/types/register";
import { INTEREST_OPTIONS } from "@/constants/interests";
import { GENDER_OPTIONS } from "@/constants/genders";
import { validateField } from "@/utils/validation";
import { errorMessage } from "@/utils/validation";

type Props = {
  form: RegisterForm;
  onChange: (field: string, value: any) => void;
  onChangeTerms: (field: string, value: any) => void;
  onToggleTerms: (isChecked: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  isAllChecked: boolean;
  isNextDisabled: boolean;
};

export default function Step2Form({
  form,
  onChange,
  onChangeTerms,
  onToggleTerms,
  onNext,
  onPrevious,
  isAllChecked,
  isNextDisabled,
}: Props) {
  const toggleInterest = (interest: string) => {
    const current = form.interests || [];
    const next = current.includes(interest)
      ? current.filter((item) => item !== interest)
      : [...current, interest];

    onChange("interests", next);
  };

  return (
    <div className="space-y-4">
      {/* 소개말 */}
      <h2 className="text-xl mb-10">
        아래 정보들은
        <span className="font-bold pl-1 text-blue-600">선택 정보</span>이니{" "}
        <br />
        입력하지 않아도 괜찮아요.
      </h2>

      {/* 닉네임 */}
      <div>
        {form.nickname && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">닉네임</label>
            {!validateField.nickname(form.nickname) && (
              <p className="text-sm text-gray-500">{errorMessage.nickname}</p>
            )}
          </div>
        )}
        <input
          type="text"
          value={form.nickname}
          onChange={(e) => onChange("nickname", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="닉네임을 입력해 주세요."
        />
      </div>

      {/* 생년월일 */}
      <div>
        {form.birthdate && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">생년월일</label>
            {!validateField.birthdate(form.birthdate) && (
              <p className="text-sm text-gray-500">{errorMessage.birthdate}</p>
            )}
          </div>
        )}
        <input
          type="text"
          value={form.birthdate || ""}
          onChange={(e) => onChange("birthdate", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="생년월일을 입력해 주세요."
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
            checked={isAllChecked}
            onChange={(e) => onToggleTerms(e.target.checked)}
          />
          모든 약관에 전체 동의합니다.
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={form.terms.overAge}
            onChange={(e) => onChangeTerms("overAge", e.target.checked)}
          />
          <p>
            <span className="text-blue-600 pr-1">(필수)</span>만 14세
            이상입니다.
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={form.terms.service}
            onChange={(e) => onChangeTerms("service", e.target.checked)}
          />
          <p>
            <span className="text-blue-600 pr-1">(필수)</span>
            서비스 이용약관 동의
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={form.terms.privacy}
            onChange={(e) => onChangeTerms("privacy", e.target.checked)}
          />
          <p>
            <span className="text-blue-600 pr-1">(필수)</span>
            개인정보처리방침
          </p>
        </label>
        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={form.terms.marketing}
            onChange={(e) => onChangeTerms("marketing", e.target.checked)}
          />
          <p>
            <span className="text-gray-500 pr-1">(선택)</span>
            이벤트 마케팅 수신동의
          </p>
        </label>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4">
        <button
          onClick={onPrevious}
          className="w-full bg-white border border-blue-500 text-blue-500 p-2 rounded disabled:bg-gray-300 mt-6 hover:bg-gray-50 transition"
        >
          이전
        </button>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300 mt-6 hover:bg-blue-600 transition"
        >
          다음
        </button>
      </div>
    </div>
  );
}
