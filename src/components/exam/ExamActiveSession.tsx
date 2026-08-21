/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, AlertTriangle, ArrowLeft, ArrowRight, CheckCircle, Flag } from "lucide-react";
import { ExamQuestion } from "@/lib/examEngine";
import { toast } from "sonner";

interface ExamActiveSessionProps {
  subject: string;
  questions: ExamQuestion[];
  durationMinutes: number; // 15
  onSubmitExam: (answers: Record<number, string>, timeSpentSeconds: number) => void;
}

export default function ExamActiveSession({
  subject,
  questions,
  durationMinutes = 15,
  onSubmitExam,
}: ExamActiveSessionProps) {
  const totalSeconds = durationMinutes * 60; // 900 seconds
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});

  // Grace Period states
  const [showGraceModal, setShowGraceModal] = useState(false);
  const [graceSecondsLeft, setGraceSecondsLeft] = useState(60);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Main 15-minute timer countdown
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setShowGraceModal(true); // Trigger 60s Grace Period warning
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // 60-Second Grace Period Countdown
  useEffect(() => {
    let graceTimer: NodeJS.Timeout;
    if (showGraceModal) {
      graceTimer = setInterval(() => {
        setGraceSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(graceTimer);
            handleFinalSubmit(); // Auto submit when grace period ends
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(graceTimer);
  }, [showGraceModal]);

  const currentQuestion = questions[currentIndex];

  const handleSelectMCQ = (option: string) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleWrittenChange = (text: string) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: text }));
  };

  const toggleFlag = (id: number) => {
    setFlagged((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFinalSubmit = () => {
    const timeSpent = totalSeconds - timeLeft;
    toast.success("Exam submitted successfully!");
    onSubmitExam(userAnswers, timeSpent);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="w-full py-4">
      {/* Top Header Bar */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
            {subject}
          </span>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
            Active Exam Session
          </h1>
        </div>

        {/* Live Timer Pill */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-bold border transition ${
            timeLeft < 180
              ? "bg-red-50 dark:bg-red-950/60 border-red-300 text-red-600 animate-pulse"
              : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          }`}>
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white rounded-xl text-xs font-bold shadow-sm transition cursor-pointer"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 space-y-1.5">
        <div className="flex justify-between text-xs font-semibold text-gray-500">
          <span>Progress: {answeredCount} / {questions.length} Answered</span>
          <span>{progressPercent}% Completed</span>
        </div>
        <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Grid Layout: Question Cards & Question Navigator Pills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Question Panel */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm min-h-[380px] flex flex-col justify-between">
            
            <div>
              {/* Question Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/60">
                  Question {currentIndex + 1} of {questions.length}
                </span>

                <button
                  type="button"
                  onClick={() => toggleFlag(currentQuestion.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition cursor-pointer ${
                    flagged[currentQuestion.id]
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
                      : "text-gray-400 hover:text-amber-500"
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flagged[currentQuestion.id] ? "Flagged" : "Flag for Review"}</span>
                </button>
              </div>

              {/* Question Text */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-relaxed mb-6">
                {currentQuestion.question}
              </h2>

              {/* Answer Controls: MCQ vs Written */}
              {currentQuestion.type === "MCQ" ? (
                <div className="space-y-3">
                  {currentQuestion.options?.map((opt, idx) => {
                    const isSelected = userAnswers[currentQuestion.id] === opt;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectMCQ(opt)}
                        className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-600 dark:text-cyan-400 font-bold shadow-xs"
                            : "bg-gray-50/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300"
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <textarea
                    rows={6}
                    placeholder="Type your response here..."
                    value={userAnswers[currentQuestion.id] || ""}
                    onChange={(e) => handleWrittenChange(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <p className="text-xs text-gray-400 mt-2">AI will evaluate key concepts & syntax in your written answer.</p>
                </div>
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Right Sidebar: Question Navigator Pills */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">
              Question Navigator
            </h3>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = Boolean(userAnswers[q.id]);
                const isFlagged = Boolean(flagged[q.id]);

                let bgClass = "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
                if (isAnswered) bgClass = "bg-indigo-600 text-white font-bold";
                if (isCurrent) bgClass = "ring-2 ring-cyan-400 font-extrabold bg-indigo-700 text-white";

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs flex items-center justify-center relative transition cursor-pointer ${bgClass}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2 text-xs font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-indigo-600" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-gray-200 dark:bg-gray-800" />
                <span>Unanswered ({questions.length - answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span>Flagged for review</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 60-Second Grace Period Warning Modal */}
      {showGraceModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-red-200 dark:border-red-900/60 animate-in fade-in zoom-in duration-200">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-950/60 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 animate-bounce" />
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Time Expired!</h2>
            <p className="text-sm text-gray-500 mt-2">
              Your 15-minute exam time limit has ended. You have a <strong>60-second grace period</strong> to make final adjustments before automatic submission.
            </p>
            
            <div className="my-5 py-3 bg-red-50 dark:bg-red-950/40 rounded-xl font-mono text-2xl font-bold text-red-600">
              00:{graceSecondsLeft.toString().padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={handleFinalSubmit}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition cursor-pointer text-sm"
            >
              Submit Now
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">Submit Exam?</h2>
            <p className="text-sm text-gray-500 mb-6">
              You have answered <strong>{answeredCount}</strong> out of <strong>{questions.length}</strong> questions. Are you ready to submit for AI grading?
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs hover:bg-gray-100 cursor-pointer"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md cursor-pointer"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
