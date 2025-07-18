import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterStore } from "@/stores/registerStore";
import { validateField } from "@/utils/validation";

export function useStep1Form() {
  const form = useRegisterStore((state) => state.form);
  const updateForm = useRegisterStore((state) => state.updateForm);
  const resetForm = useRegisterStore((state) => state.resetForm);

  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    if (confirm("회원가입을 취소 하시겠습니까?")) resetForm();
  };

  const handleChange = (field: string, value: any) => {
    updateForm({ [field]: value });
  };

  const isPasswordMatched =
    form.password && passwordConfirm && form.password === passwordConfirm;

  const isIdValid = form.id && validateField.id(form.id);
  const isPasswordValid =
    form.password && validateField.password(form.password);
  const isEmailValid = form.email && validateField.email(form.email);
  const isMobileValid = form.mobile && validateField.mobile(form.mobile);

  const isNextDisabled =
    !isIdValid ||
    !isPasswordValid ||
    !isEmailValid ||
    !isMobileValid ||
    !isPasswordMatched;

  const handleNext = () => {
    if (isNextDisabled) return;
    navigate("/register/step2");
  };

  return {
    form,
    onReset: handleReset,
    onChange: handleChange,
    onNext: handleNext,
    isNextDisabled,
    isPasswordMatched,
    passwordConfirm,
    setPasswordConfirm,
  };
}
