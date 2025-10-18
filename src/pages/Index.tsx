import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizResults } from "@/components/QuizResults";
import { questions } from "@/data/questions";
import { QuizState } from "@/types/quiz";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const STORAGE_KEY = "snowflake-quiz-progress";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      currentQuestion: 0,
      answers: Array(questions.length).fill(null),
      showResults: false,
    };
  });

  const [showFeedback, setShowFeedback] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const state = JSON.parse(saved);
      return state.answers[state.currentQuestion] !== null;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
  }, [quizState]);

  const currentQuestion = questions[quizState.currentQuestion];
  const currentAnswer = quizState.answers[quizState.currentQuestion];
  const isLastQuestion = quizState.currentQuestion === questions.length - 1;
  const score = quizState.answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState({ ...quizState, answers: newAnswers });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizState({ ...quizState, showResults: true });
    } else {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
      });
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1,
      });
      setShowFeedback(quizState.answers[quizState.currentQuestion - 1] !== null);
    }
  };

  const handleRestart = () => {
    const newState = {
      currentQuestion: 0,
      answers: Array(questions.length).fill(null),
      showResults: false,
    };
    setQuizState(newState);
    setShowFeedback(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (quizState.showResults) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <QuizResults score={score} total={questions.length} onRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">
            Snowflake Platform Associate Practice Exam
          </h1>
          <p className="text-sm text-muted-foreground">
            Test your knowledge and get instant feedback with detailed explanations
          </p>
        </div>

        <QuizProgress
          current={quizState.currentQuestion + 1}
          total={questions.length}
          score={score}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={currentAnswer}
          onSelectAnswer={handleSelectAnswer}
          showFeedback={showFeedback}
        />

        <div className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={quizState.currentQuestion === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentAnswer === null}
            className="gap-2"
          >
            {isLastQuestion ? (
              <>
                <Check className="w-4 h-4" />
                Finish
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
