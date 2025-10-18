import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
}

export const QuizProgress = ({ current, total, score }: QuizProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Question {current} of {total}
        </span>
        <span className="text-muted-foreground">
          Score: {score}/{total}
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
