export const regex = {
  id: /^[a-z0-9]{5,20}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~])[A-Za-z\d!@#$%^&*()_+~]{8,16}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  mobile: /^01[016789]\d{7,8}$/,
  nickname: /^[가-힣a-zA-Z0-9]{2,8}$/,
  birthdate: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
};

export const validateField = {
  id: (value: string) => regex.id.test(value),
  password: (value: string) => regex.password.test(value),
  email: (value: string) => regex.email.test(value),
  mobile: (value: string) => regex.mobile.test(value),
  nickname: (value: string) => regex.nickname.test(value),
  birthdate: (value: string) => regex.birthdate.test(value),
};

export const errorMessage = {
  id: "5~20자, 영문 소문자, 숫자만 사용할 수 있어요.",
  password: "8~16자, 영문 대·소문자, 숫자, 특수문자를 포함해 주세요.",
  passwordConfirm: "비밀번호가 일치하지 않아요.",
  email: "정확한 이메일 형식을 사용해 주세요.",
  mobile: "정확한 전화번호 형식을 사용해 주세요.",
  nickname: "2~8자, 한글, 영문, 숫자만 사용할 수 있어요.",
  birthdate: "년-월-일 순으로 입력해 주세요.(YYYY-MM-DD)",
};
