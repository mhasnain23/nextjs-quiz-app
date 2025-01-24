import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <div className="w-full bg-primary text-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Choose Our Quizzes?
        </h2>
        <p className="text-center text-lg">
          Our quizzes are designed to help you learn efficiently while keeping
          it fun and interactive. Get started now and see for yourself!
        </p>
      </div>
    </main>
  );
};

export default page;
