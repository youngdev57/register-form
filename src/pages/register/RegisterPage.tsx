import { useParams } from "react-router-dom";
import Step1Form from "./components/Step1Form";
import Step2Form from "./components/Step2Form";
import Step3Form from "./components/Step3Form";
import { useStep1Form } from "./hooks/useStep1Form";
import { useStep2Form } from "./hooks/useStep2Form";
import { useStep3Form } from "./hooks/useStep3Form";

export default function RegisterPage() {
  const { step = "step1" } = useParams();

  const step1 = useStep1Form();
  const step2 = useStep2Form();
  const step3 = useStep3Form();

  const currentStep = step ?? "step1";

  const renderStep = () => {
    switch (step) {
      case "step1":
        return <Step1Form {...step1} />;
      case "step2":
        return <Step2Form {...step2} />;
      case "step3":
        return <Step3Form {...step3} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg p-10 bg-white rounded">
        {/* 프로그레스 영역 */}
        <div className="flex justify-center">
          <h2 className="text-xl font-bold mb-10">
            회원가입 ({currentStep.toUpperCase()})
          </h2>
        </div>

        {/* 스텝 렌더링 */}
        {renderStep()}
      </div>
    </div>
  );
}
