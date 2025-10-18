import { Question } from "@/types/quiz";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showFeedback: boolean;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showFeedback,
}: QuestionCardProps) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="p-6 border-border">
      <div className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {question.category}
          </Badge>
          <h2 className="text-lg font-medium text-foreground leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === question.correctAnswer;
            const showCorrect = showFeedback && isCorrectOption;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => !showFeedback && onSelectAnswer(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showCorrect
                    ? "border-success bg-success/5"
                    : showIncorrect
                    ? "border-destructive bg-destructive/5"
                    : isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-muted-foreground"
                } ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      showCorrect
                        ? "border-success bg-success"
                        : showIncorrect
                        ? "border-destructive bg-destructive"
                        : isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {showCorrect && <CheckCircle2 className="w-4 h-4 text-success-foreground" />}
                    {showIncorrect && <XCircle className="w-4 h-4 text-destructive-foreground" />}
                    {isSelected && !showFeedback && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div
            className={`p-4 rounded-lg ${
              isCorrect ? "bg-success/5 border border-success/20" : "bg-destructive/5 border border-destructive/20"
            }`}
          >
            <div className="flex items-start gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              )}
              <span className={`font-medium ${isCorrect ? "text-success" : "text-destructive"}`}>
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed pl-7">{question.explanation}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
