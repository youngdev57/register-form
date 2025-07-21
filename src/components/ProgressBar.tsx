import { memo } from "react";

type Props = {
  currentStep: number;
  totalStep: number;
};

const ProgressBar = memo(function ProgressBar({
  currentStep,
  totalStep,
}: Props) {
  const percentBar = (currentStep / totalStep) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-2 rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${percentBar}%` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <span className="font-bold pr-1 text-blue-500">{currentStep}</span> /{" "}
        {totalStep}
      </div>
    </div>
  );
});

export default ProgressBar;
