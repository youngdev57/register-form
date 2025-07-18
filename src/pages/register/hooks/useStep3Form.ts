import { useNavigate } from "react-router-dom";

export function useStep3Form() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/register/success");
  };

  const handleLoginWithGoogle = () => {
    alert("구글 계정 연동");
  };

  const handleLoginWithNaver = () => {
    alert("네이버 계정 연동");
  };

  const handleLoginWithApple = () => {
    alert("애플 계정 연동");
  };
  return {
    onSuccess: handleSuccess,
    onLoginGoogle: handleLoginWithGoogle,
    onLoginNaver: handleLoginWithNaver,
    onLoginApple: handleLoginWithApple,
  };
}
