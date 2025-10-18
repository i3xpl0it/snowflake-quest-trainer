import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

interface QuizResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, total, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  return (
    <Card className="p-8 border-border text-center max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          {passed ? (
            <CheckCircle2 className="w-16 h-16 text-success mx-auto" />
          ) : (
            <XCircle className="w-16 h-16 text-destructive mx-auto" />
          )}
          <h2 className="text-2xl font-semibold text-foreground">
            {passed ? "Great Job!" : "Keep Practicing!"}
          </h2>
        </div>

        <div className="space-y-1">
          <div className="text-5xl font-bold text-foreground">{percentage}%</div>
          <p className="text-muted-foreground">
            You answered {score} out of {total} questions correctly
          </p>
        </div>

        <div className="pt-4">
          <Button onClick={onRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Restart Quiz
          </Button>
        </div>
      </div>
    </Card>
  );
};
