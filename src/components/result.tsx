import React from "react";
import { Button } from "@/components/ui/button";
interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}
const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = (score / totalQuestions) * 100;
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      <div className="mb-6">
        <p className="text-xl mb-2">Your Score:</p>
        <p className="text-4xl font-bold text-blue-600">
          {score} / {totalQuestions}
        </p>
        <p className="text-lg text-gray-600 mt-2">{Math.round(percentage)}%</p>
      </div>
      <div className="mb-8">
        {percentage >= 70 ? (
          <p className="text-green-600">Great job! You passed the quiz!</p>
        ) : (
          <p className="text-yellow-600">
            Keep practicing to improve your score!
          </p>
        )}
      </div>
      <Button onClick={onRestart}>Try Again</Button>
    </div>
  );
};
export default Results;
