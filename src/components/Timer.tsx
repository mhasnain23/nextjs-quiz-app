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
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 border">
      <div className="text-xl font-semibold">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
};
export default Timer;
