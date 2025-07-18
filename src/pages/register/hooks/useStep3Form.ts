import { useNavigate } from "react-router-dom";

export function useStep3Form() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/register/success");
  };

  return { onSuccess: handleSuccess };
}
