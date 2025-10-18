export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  showResults: boolean;
}
