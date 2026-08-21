/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ExamSetup from "@/components/exam/ExamSetup";
import ExamActiveSession from "@/components/exam/ExamActiveSession";
import ExamResultsView from "@/components/exam/ExamResultsView";
import {
  ExamConfig,
  ExamQuestion,
  ExamResult,
  generateAIQuestions,
  evaluateAIExam,
} from "@/lib/examEngine";

export default function ExamPage() {
  const [step, setStep] = useState<"SETUP" | "ACTIVE" | "RESULTS">("SETUP");
  const [config, setConfig] = useState<ExamConfig | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [result, setResult] = useState<ExamResult | null>(null);

  const handleStartExam = (newConfig: ExamConfig) => {
    setConfig(newConfig);
    const generated = generateAIQuestions(newConfig);
    setQuestions(generated);
    setStep("ACTIVE");
  };

  const handleSubmitExam = (
    userAnswers: Record<number, string>,
    timeSpentSeconds: number
  ) => {
    if (!questions.length) return;
    const evaluated = evaluateAIExam(questions, userAnswers, timeSpentSeconds);
    setResult(evaluated);
    setStep("RESULTS");
  };

  const handleRetakeExam = () => {
    if (!config) return;
    const regenerated = generateAIQuestions(config);
    setQuestions(regenerated);
    setResult(null);
    setStep("ACTIVE");
  };

  const handleNewExam = () => {
    setConfig(null);
    setQuestions([]);
    setResult(null);
    setStep("SETUP");
  };

  return (
    <div className="w-full">
      {step === "SETUP" && <ExamSetup onStartExam={handleStartExam} />}

      {step === "ACTIVE" && config && (
        <ExamActiveSession
          subject={config.subject}
          questions={questions}
          durationMinutes={config.durationMinutes}
          onSubmitExam={handleSubmitExam}
        />
      )}

      {step === "RESULTS" && config && result && (
        <ExamResultsView
          subject={config.subject}
          result={result}
          onRetake={handleRetakeExam}
          onNewExam={handleNewExam}
        />
      )}
    </div>
  );
}
