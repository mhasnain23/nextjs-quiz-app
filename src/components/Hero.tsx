import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-primary text-white py-0">
      <div className="container mx-auto text-center">
        {/* Hero Heading */}
        <h1 className="text-5xl font-bold mb-4">
          Ace Your Knowledge with <br />
          Interactive Quizzes!
        </h1>

        {/* Subheading */}
        <p className="text-lg mb-6">
          Learn, practice, and test yourself with our handpicked quizzes <br />{" "}
          on web development and more.
        </p>

        {/* Get Started Button */}
        <Link
          href="/quiz"
          className="bg-white text-black py-3 px-6 rounded-lg shadow-md font-semibold hover:bg-white/80 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
