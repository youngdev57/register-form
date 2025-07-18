import { errorMessage, validateField } from "@/utils/validation";
import type { RegisterForm } from "@/types/register";

type Props = {
  form: RegisterForm;
  onReset: () => void;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  isNextDisabled: boolean;
  passwordConfirm: string;
  setPasswordConfirm: (value: string) => void;
};

export default function Step1Form({
  form,
  onReset,
  onChange,
  onNext,
  isNextDisabled,
  passwordConfirm,
  setPasswordConfirm,
}: Props) {
  return (
    <div className="space-y-4">
      {/* 소개말 */}
      <h2 className="text-xl mb-10">
        회원가입에 필요한 <br />
        <span className="font-bold text-blue-600">필수 정보</span>를 모두 입력해
        주세요.
      </h2>

      {/* 아이디 */}
      <div>
        {form.id && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">아이디</label>
            {!validateField.id(form.id) && (
              <p className="text-sm text-gray-500">{errorMessage.id}</p>
            )}
          </div>
        )}
        <input
          value={form.id}
          onChange={(e) => onChange("id", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="아이디를 입력해 주세요."
        />
      </div>

      {/* 비밀번호 */}
      <div>
        {form.password && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">비밀번호</label>
            {!validateField.password(form.password) && (
              <p className="text-sm text-gray-500">{errorMessage.password}</p>
            )}
          </div>
        )}
        <input
          onChange={(e) => onChange("password", e.target.value)}
          type="password"
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="비밀번호를 입력해 주세요."
        />
      </div>

      {/* 비밀번호 확인 */}
      <div>
        {passwordConfirm && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">비밀번호 확인</label>
            {!(
              form.password &&
              passwordConfirm &&
              form.password === passwordConfirm
            ) && (
              <p className="text-sm text-gray-500">
                {errorMessage.passwordConfirm}
              </p>
            )}
          </div>
        )}
        <input
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="비밀번호를 다시 입력해 주세요."
        />
      </div>

      {/* 이메일 */}
      <div>
        {form.email && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">이메일</label>
            {!validateField.email(form.email) && (
              <p className="text-sm text-gray-500">{errorMessage.email}</p>
            )}
          </div>
        )}
        <input
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="이메일을 입력해 주세요."
        />
      </div>

      {/* 전화번호 */}
      <div>
        {form.mobile && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">
              전화번호 ('-' 제외)
            </label>
            {!validateField.mobile(form.mobile) && (
              <p className="text-sm text-gray-500">{errorMessage.mobile}</p>
            )}
          </div>
        )}
        <input
          value={form.mobile}
          onChange={(e) => onChange("mobile", e.target.value)}
          className="w-full p-3 rounded pl-4 bg-gray-50"
          placeholder="전화번호를 입력해 주세요."
        />
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-4">
        <button
          onClick={onReset}
          className="w-full bg-white border border-blue-500 text-blue-500 p-2 rounded disabled:bg-gray-300 mt-6 hover:bg-gray-50 transition"
        >
          취소
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
