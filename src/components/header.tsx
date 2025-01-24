const Index = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const { toast } = useToast();
    const { toast } = useToast();
    const handleAnswer = (selectedOption: number) => {
    const handleAnswer = (selectedOption: number) => {
      if (selectedOption === SAMPLE_QUESTIONS[currentQuestion].correctAnswer) {
      if (selectedOption === SAMPLE_QUESTIONS[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setScore(score + 1);
        toast({
        toast({
          title: "Correct!",
          title: "Correct!",
          description: "Good job! Keep going!",
          description: "Good job! Keep going!",
          variant: "default",
          variant: "default",
        });
        });
      } else {
      } else {
        toast({
        toast({
          title: "Incorrect",
          title: "Incorrect",
          description: "Try again next time!",
          description: "Try again next time!",
          variant: "destructive",
          variant: "destructive",
        });
        });
      }
      }
      if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
      } else {
        setShowResults(true);
        setShowResults(true);
      }
      }
    };
    };
    const restartQuiz = () => {
    const restartQuiz = () => {
      setCurrentQuestion(0);
      setCurrentQuestion(0);
      setScore(0);
      setScore(0);
      setShowResults(false);
      setShowResults(false);
    };
    };
    return (
    return (
      <div className="min-h-screen bg-background p-8">
      <div className="min-h-screen bg-background p-8">
        <NavigationMenu className="mb-8">
        <NavigationMenu className="mb-8">
          <NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[200px]">
                <div className="grid gap-3 p-4 w-[200px]">
                  <Button variant="ghost" className="w-full justify-start" onClick={restartQuiz}>
                  <Button variant="ghost" className="w-full justify-start" onClick={restartQuiz}>
                    Restart Quiz
                    Restart Quiz
                  </Button>
                  </Button>
                  <Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                      <Button variant="ghost" className="w-full justify-start">
                        Help
                        Help
                      </Button>
                      </Button>
                    </DialogTrigger>
                    </DialogTrigger>
                    <DialogContent>
                    <DialogContent>
                      <DialogHeader>
                      <DialogHeader>
                        <DialogTitle>Quiz Instructions</DialogTitle>
                        <DialogTitle>Quiz Instructions</DialogTitle>
                      </DialogHeader>
                      </DialogHeader>
                      <div className="space-y-4">
                      <div className="space-y-4">
                        <p>Select the correct answer for each question.</p>
                        <p>Select the correct answer for each question.</p>
                        <p>You have 
  30
   seconds per question.</p>
                        <p>You have 
  60
   seconds per question.</p>
                        <p>Your score will be shown at the end.</p>
                        <p>Your score will be shown at the end.</p>
                        <p>Total time: 20 minutes</p>
                      </div>
                      </div>
                    </DialogContent>
                    </DialogContent>
                  </Dialog>
                  </Dialog>
  Expand 13 lines ...			
                </p>
                </p>
              </div>
              </div>
              <QuizTimer key={currentQuestion} onTimeout={() => handleAnswer(-1)} 
  />
              <QuizTimer key={currentQuestion} onTimeout={() => handleAnswer(-1)} 
  duration={60} 
  />
              <h2 className="text-2xl font-bold mb-6">
              <h2 className="text-2xl font-bold mb-6">
                {SAMPLE_QUESTIONS[currentQuestion].question}
                {SAMPLE_QUESTIONS[currentQuestion].question}