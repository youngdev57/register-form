import { useRegisterStore } from "@/stores/registerStore";
import { useNavigate } from "react-router-dom";
import { validateField } from "@/utils/validation";

export function useStep2Form() {
  const { form, updateForm, updateTerms } = useRegisterStore();
  const navigate = useNavigate();

  const isAllChecked =
    form.terms.overAge &&
    form.terms.service &&
    form.terms.privacy &&
    form.terms.marketing;

  const handleChange = (field: string, value: any) => {
    updateForm({ [field]: value });
  };

  const handleChangeTerms = (field: string, value: any) => {
    updateTerms({ [field]: value });
  };

  const handleToggleAllTerms = (isChecked: boolean) => {
    updateTerms({
      overAge: isChecked,
      service: isChecked,
      privacy: isChecked,
      marketing: isChecked,
    });
  };

  const isNicknameValid =
    form.nickname && validateField.nickname(form.nickname);
  const isBirthdateValid =
    form.birthdate && validateField.birthdate(form.birthdate);

  const isNextDisabled =
    (form.nickname && !isNicknameValid) ||
    (form.birthdate && !isBirthdateValid) ||
    !form.terms.overAge ||
    !form.terms.service ||
    !form.terms.privacy;

  const handleNext = () => {
    if (isNextDisabled) return;
    navigate("/register/step3");
  };

  return {
    form,
    onChange: handleChange,
    onChangeTerms: handleChangeTerms,
    onToggleTerms: handleToggleAllTerms,
    onNext: handleNext,
    isAllChecked,
    isNextDisabled,
  };
}
