// import { quizzes } from "@/data/index";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary text-secondary py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-secondary">
          QuizMaster
        </Link>

        {/* Dropdown for Quizzes */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-lg font-medium hover:underline focus:outline-none">
            Available Quizzes
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black shadow-lg">
            <DropdownMenuItem>
              <Link href={`/quiz`} className="hover:text-blue-500">
                Next.js Intermediate quiz
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
