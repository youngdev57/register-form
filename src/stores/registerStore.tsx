import { create } from "zustand";
import type { RegisterState } from "@/types/register";

export const useRegisterStore = create<RegisterState>((set) => ({
  form: {
    id: "",
    password: "",
    email: "",
    mobile: "",
    nickname: "",
    birthdate: "",
    gender: "N",
    interests: [],
    terms: {
      overAge: false,
      service: false,
      privacy: false,
      marketing: false,
    },
  },
  updateForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
  updateTerms: (data) =>
    set((state) => ({
      form: { ...state.form, terms: { ...state.form.terms, ...data } },
    })),
  resetForm: () =>
    set({
      form: {
        id: "",
        password: "",
        email: "",
        mobile: "",
        nickname: "",
        birthdate: "",
        gender: "N",
        interests: [],
        terms: {
          overAge: false,
          service: false,
          privacy: false,
          marketing: false,
        },
      },
    }),
}));
