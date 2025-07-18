import { create } from "zustand";

interface RegisterForm {
  id: string;
  password: string;
  email: string;
  mobile: string;
  nickname: string;
  agreeTerms: boolean;
}

interface RegisterState {
  form: RegisterForm;
  updateForm: (data: Partial<RegisterForm>) => void;
  resetForm: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  form: {
    id: "",
    password: "",
    mobile: "",
    email: "",
    nickname: "",
    agreeTerms: false,
  },
  updateForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
  resetForm: () =>
    set({
      form: {
        id: "",
        password: "",
        mobile: "",
        email: "",
        nickname: "",
        agreeTerms: false,
      },
    }),
}));
