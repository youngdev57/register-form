import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterStore } from "@/stores/registerStore";
import { validateField } from "@/utils/validation";

export function useStep1Form() {
  const { form, updateForm } = useRegisterStore();
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

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
    !isIdValid || !isPasswordValid || !isEmailValid || !isMobileValid;

  const handleNext = () => {
    if (isNextDisabled) return;
    navigate("/register/step2");
  };

  return {
    form,
    onChange: handleChange,
    onNext: handleNext,
    isNextDisabled,
    isPasswordMatched,
    passwordConfirm,
    setPasswordConfirm,
  };
}
