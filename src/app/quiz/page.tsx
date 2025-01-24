"use client";

import { useState, useCallback } from "react";
import { quizQuestions } from "@/data/index";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import Results from "@/components/result";
import { toast } from "sonner";
import Confetti from "react-confetti";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // New state for confetti

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer!");
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const handleTimeUp = useCallback(() => {
    setShowResults(true);
  }, []);

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setIsAnswered(false);
    setShowConfetti(false); // Reset confetti state
  };

  const handleShowConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false); // Stop confetti after 5 seconds
    }, 8000);
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <Results
          score={score}
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
          handleShowConfetti={handleShowConfetti}
        />

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={300}
            gravity={0.3}
          />
        )}
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="text-center">
        <Timer duration={900} onTimeUp={handleTimeUp} />
        <h1 className="text-4xl font-bold text-blue-700 mt-4 mb-6">
          Fun Quiz Challenge
        </h1>
        <ProgressBar
          current={currentQuestion + 1}
          total={quizQuestions.length}
        />
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {question.question}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`py-3 px-4 text-lg font-medium rounded-md border transition ${
                  selectedAnswer === option
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white"
                } ${
                  isAnswered && option === question.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : isAnswered && selectedAnswer === option
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
                disabled={isAnswered}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
