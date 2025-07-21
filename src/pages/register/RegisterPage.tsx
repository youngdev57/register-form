import { useParams } from "react-router-dom";
import Step1Form from "./components/Step1Form";
import Step2Form from "./components/Step2Form";
import Step3Form from "./components/Step3Form";
import { useStep1Form } from "./hooks/useStep1Form";
import { useStep2Form } from "./hooks/useStep2Form";
import { useStep3Form } from "./hooks/useStep3Form";
import ProgressBar from "@/components/ProgressBar";

export default function RegisterPage() {
  const { pageKey = "step1" } = useParams();

  const step1 = useStep1Form();
  const step2 = useStep2Form();
  const step3 = useStep3Form();

  const currentStep = +pageKey.replaceAll("step", "");
  const totalStep = 3;

  const renderStep = () => {
    switch (pageKey) {
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
        <ProgressBar currentStep={currentStep} totalStep={totalStep} />

        {/* 스텝 렌더링 */}
        {renderStep()}
      </div>
    </div>
  );
}
