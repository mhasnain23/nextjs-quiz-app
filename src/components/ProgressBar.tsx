interface ProgressBarProps {
  current: number;
  total: number;
}
const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;
  return (
    <div className="w-full mb-6">
      <div className="max-w-6xl mx-auto flex justify-between mb-2">
        <span className="text-xl text-foreground font-bold">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="h-4 max-w-6xl mx-auto overflow-hidden rounded-full bg-gray-300">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
