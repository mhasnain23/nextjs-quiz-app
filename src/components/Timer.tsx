import React, { useEffect, useState } from "react";
import { toast } from "sonner";
interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}
const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      toast.error("Time's up!");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="mb-5 max-w-6xl mx-auto py-10 flex items-center justify-center">
      <div className="text-xl font-semibold bg-white shadow-sm w-20 rounded-lg py-4 px-3">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
};
export default Timer;
