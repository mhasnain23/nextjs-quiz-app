import React, { JSX } from "react";
interface ProgressBarProps {
  current: number;
  total: number;
}
const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;
  return (
    <div className="w-full mb-6">
      <div className="max-w-7xl mx-auto flex justify-between mb-2">
        <span className="text-sm font-medium">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
export default ProgressBar;
