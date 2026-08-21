/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Award, CheckCircle, XCircle, Clock, RotateCcw, ChevronDown, Sparkles, BookOpen } from "lucide-react";
import { ExamResult } from "@/lib/examEngine";
import Link from "next/link";

interface ExamResultsViewProps {
  subject: string;
  result: ExamResult;
  onRetake: () => void;
  onNewExam: () => void;
}

export default function ExamResultsView({
  subject,
  result,
  onRetake,
  onNewExam,
}: ExamResultsViewProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="w-full py-4 space-y-8">
      
      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 border border-indigo-700/50 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI EVALUATION COMPLETE</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Exam Results: {subject}
            </h1>
            <p className="text-gray-300 text-sm mt-1">
              Here is your detailed AI performance score and breakdown of correct vs wrong answers.
            </p>
          </div>

          {/* Grade Badge */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center min-w-[140px]">
            <Award className="w-8 h-8 text-amber-400 mx-auto mb-1" />
            <div className="text-2xl font-black text-white">{result.scorePercentage}%</div>
            <div className="text-xs font-bold text-cyan-300 mt-0.5">{result.gradeBadge}</div>
          </div>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xs text-center">
          <CheckCircle className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{result.correctCount}</div>
          <div className="text-xs font-medium text-gray-500 mt-1">Correct Answers</div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xs text-center">
          <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{result.wrongCount}</div>
          <div className="text-xs font-medium text-gray-500 mt-1">Wrong Answers</div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xs text-center">
          <Clock className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{formatTime(result.timeSpentSeconds)}</div>
          <div className="text-xs font-medium text-gray-500 mt-1">Time Elapsed</div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-xs text-center">
          <Sparkles className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
          <div className="text-2xl font-extrabold text-gray-900 dark:text-white">{result.accuracyPercentage}%</div>
          <div className="text-xs font-medium text-gray-500 mt-1">Accuracy</div>
        </div>
      </div>

      {/* Interactive Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Same Exam</span>
        </button>

        <button
          type="button"
          onClick={onNewExam}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-800 dark:text-gray-200 text-xs font-bold border border-gray-200 dark:border-gray-700 transition cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-cyan-500" />
          <span>Try New Subject / Topic</span>
        </button>

        <Link href="/">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-bold border border-gray-200 dark:border-gray-800 hover:border-gray-300 transition cursor-pointer">
            Return to Home
          </span>
        </Link>
      </div>

      {/* Detailed Q&A Review Accordion */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center justify-between">
          <span>AI Questions Review ({result.questionEvaluations.length})</span>
          <span className="text-xs font-semibold text-gray-400">Click question to inspect AI explanation</span>
        </h2>

        <div className="space-y-3">
          {result.questionEvaluations.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isCorrect = item.isCorrect;

            return (
              <div
                key={item.question.id}
                className={`border rounded-xl transition overflow-hidden ${
                  isCorrect
                    ? "border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/30 dark:bg-emerald-950/10"
                    : "border-red-200 dark:border-red-950/60 bg-red-50/30 dark:bg-red-950/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      Q{idx + 1}: {item.question.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isCorrect
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                    }`}>
                      {isCorrect ? "Correct" : "Wrong"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-100 dark:border-gray-800/80 space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-gray-400 uppercase tracking-wider block mb-1">Your Answer:</span>
                      <p className={`p-2.5 rounded-lg border font-medium ${
                        isCorrect
                          ? "bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800"
                          : "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/40 dark:text-red-200 dark:border-red-800"
                      }`}>
                        {item.userAnswer}
                      </p>
                    </div>

                    {!isCorrect && (
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider block mb-1">Correct Answer:</span>
                        <p className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800 font-medium">
                          {item.question.correctAnswer}
                        </p>
                      </div>
                    )}

                    <div className="bg-indigo-50/60 dark:bg-indigo-950/40 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      <strong className="text-indigo-600 dark:text-cyan-400 flex items-center gap-1 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        AI Feedback & Explanation:
                      </strong>
                      <p>{item.aiFeedback}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
