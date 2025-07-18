import { useRegisterStore } from "@/stores/registerStore";
import { useNavigate } from "react-router-dom";

export function useStep3Form() {
  const navigate = useNavigate();
  const form = useRegisterStore((state) => state.form);

  const handlePrivious = () => {
    navigate("/register/step2");
  };

  const handleSuccess = () => {
    // 서버 전송 로직
    console.log("handleSuccess", form);

    // 서버 요청 성공 시
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
    onPrevious: handlePrivious,
    onSuccess: handleSuccess,
    onLoginGoogle: handleLoginWithGoogle,
    onLoginNaver: handleLoginWithNaver,
    onLoginApple: handleLoginWithApple,
  };
}
