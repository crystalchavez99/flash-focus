export interface Flashcard {
  id?: number;
  question: string;
  answer: string;
  userId: string;
  subjectId?: number;
}
