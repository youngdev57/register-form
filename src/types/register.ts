type Terms = {
  overAge: boolean;
  service: boolean;
  privacy: boolean;
  marketing: boolean;
};

export type RegisterForm = {
  id: string;
  password: string;
  email: string;
  mobile: string;
  nickname: string;
  birthdate: string;
  gender: string;
  interests: string[];
  terms: Terms;
};

export type RegisterState = {
  form: RegisterForm;
  updateForm: (data: Partial<RegisterForm>) => void;
  updateTerms: (data: Partial<Terms>) => void;
  resetForm: () => void;
};
