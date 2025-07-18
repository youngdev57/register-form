import { useRegisterStore } from "@/stores/registerStore";
import { useNavigate } from "react-router-dom";

export function useStep2Form() {
  const { form, updateForm } = useRegisterStore();
  const navigate = useNavigate();

  const handleChange = (field: string, value: any) => {
    updateForm({ [field]: value });
  };

  const isNicknameValid =
    form.nickname.length >= 2 && form.nickname.length <= 10;

  const isNextDisabled = !isNicknameValid || !form.agreeTerms;

  const handleNext = () => {
    if (isNextDisabled) return;
    navigate("/register/step3");
  };

  return { form, onChange: handleChange, onNext: handleNext, isNextDisabled };
}
