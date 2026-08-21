/* eslint-disable @typescript-eslint/no-explicit-any */

export type QuestionType = "MCQ" | "WRITTEN";

export interface ExamQuestion {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[]; // for MCQ
  correctAnswer: string; // Choice index or written key phrase
  aiExplanation: string;
}

export interface ExamConfig {
  mode: "PRESET" | "CUSTOM";
  subject: string;
  topics: string[];
  questionType: QuestionType;
  questionCount: number; // default 20
  durationMinutes: number; // default 15
}

export interface ExamResult {
  scorePercentage: number;
  gradeBadge: string;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  timeSpentSeconds: number;
  accuracyPercentage: number;
  questionEvaluations: {
    question: ExamQuestion;
    userAnswer: string;
    isCorrect: boolean;
    aiFeedback: string;
  }[];
}

// Preset subjects & suggested subtopics
export const PRESET_SUBJECTS: Record<string, string[]> = {
  "JavaScript & Web Tech": [
    "ES6+ Features & Async/Await",
    "DOM Manipulation & Events",
    "Scope, Closures & Event Loop",
    "Prototypes & OOP",
    "Fetch API & Promises",
  ],
  "React & Next.js": [
    "React Hooks & State Management",
    "Next.js App Router & Server Actions",
    "Component Lifecycle & Re-rendering",
    "SSR, SSG, and ISR Rendering",
    "Tailwind CSS & Styling",
  ],
  "UI/UX Design": [
    "Design Principles & Hierarchy",
    "Figma Auto Layout & Components",
    "Color Theory & Accessibility (WCAG)",
    "User Research & Wireframing",
    "Responsive Design Systems",
  ],
  "Data Science & Python": [
    "Python Data Structures & OOP",
    "Pandas & Data Wrangling",
    "NumPy & Vectorization",
    "Machine Learning Supervised Algorithms",
    "Matplotlib & Data Visualization",
  ],
  "Database & Backend": [
    "SQL Queries & Joins",
    "MongoDB Schema Design & Aggregation",
    "Node.js Event Loop & Express",
    "RESTful API & Authentication",
    "Redis Caching & Performance",
  ],
};

// Generate AI Subtopics for a given subject
export function getPresetSubtopics(subject: string): string[] {
  if (PRESET_SUBJECTS[subject]) {
    return PRESET_SUBJECTS[subject];
  }
  return [
    "Fundamentals & Core Concepts",
    "Intermediate Techniques",
    "Advanced Patterns & Optimization",
    "Real-world Applications & Debugging",
  ];
}

// Dynamically generate 20 questions based on config
export function generateAIQuestions(config: ExamConfig): ExamQuestion[] {
  const { subject, topics, questionType, questionCount = 20 } = config;
  const topicLabel = topics.length > 0 ? topics.join(", ") : "Core Topics";

  const questions: ExamQuestion[] = [];

  for (let i = 1; i <= questionCount; i++) {
    if (questionType === "MCQ") {
      questions.push({
        id: i,
        question: `[${subject}] Q${i}: What is the primary function of ${topicLabel} when handling case #${i}?`,
        type: "MCQ",
        options: [
          `Option A: Optimizes execution speed and reduces memory usage for ${topicLabel}.`,
          `Option B: Provides automated data binding and error handling.`,
          `Option C: Manages asynchronous lifecycle events in ${subject}.`,
          `Option D: Establishes static routing and layout boundaries.`,
        ],
        correctAnswer: "Option A: Optimizes execution speed and reduces memory usage for " + topicLabel + ".",
        aiExplanation: `Option A is correct because in ${subject} (${topicLabel}), this mechanism directly targets performance and memory efficiency.`,
      });
    } else {
      questions.push({
        id: i,
        question: `[${subject}] Q${i}: Explain key concepts of ${topicLabel} and detail how you would implement it in a real-world project.`,
        type: "WRITTEN",
        correctAnswer: `Key concepts include modular design, state isolation, and error management within ${subject}.`,
        aiExplanation: `A comprehensive answer should highlight core syntax, modular organization, and best practices for ${topicLabel}.`,
      });
    }
  }

  return questions;
}

// Evaluate Exam Results
export function evaluateAIExam(
  questions: ExamQuestion[],
  userAnswers: Record<number, string>,
  timeSpentSeconds: number
): ExamResult {
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  const questionEvaluations = questions.map((q) => {
    const userAnswer = (userAnswers[q.id] || "").trim();

    if (!userAnswer) {
      unansweredCount++;
      return {
        question: q,
        userAnswer: "(No Answer Provided)",
        isCorrect: false,
        aiFeedback: "You did not answer this question. " + q.aiExplanation,
      };
    }

    let isCorrect = false;
    if (q.type === "MCQ") {
      isCorrect = userAnswer === q.correctAnswer;
    } else {
      // Written mode: simple keyword check for mock AI grading
      isCorrect = userAnswer.length >= 15;
    }

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }

    return {
      question: q,
      userAnswer,
      isCorrect,
      aiFeedback: isCorrect
        ? "Excellent answer! " + q.aiExplanation
        : "Incorrect. " + q.aiExplanation,
    };
  });

  const total = questions.length;
  const scorePercentage = Math.round((correctCount / total) * 100);
  const accuracyPercentage = total > 0 ? Math.round((correctCount / (correctCount + wrongCount || 1)) * 100) : 0;

  let gradeBadge = "Needs Improvement ⚠️";
  if (scorePercentage >= 80) gradeBadge = "Outstanding 🌟";
  else if (scorePercentage >= 60) gradeBadge = "Passed ✅";
  else if (scorePercentage >= 40) gradeBadge = "Average 📈";

  return {
    scorePercentage,
    gradeBadge,
    correctCount,
    wrongCount,
    unansweredCount,
    timeSpentSeconds,
    accuracyPercentage,
    questionEvaluations,
  };
}
