"use client";

import React, { useState } from "react";
import { Sparkles, Clock, FileCheck, Eye, Award, X, CheckCircle, HelpCircle } from "lucide-react";
import { mockExamHistory } from "@/data/mockData";

export default function ExamHistoryClient() {
  const [selectedExam, setSelectedExam] = useState<typeof mockExamHistory[0] | null>(null);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="w-full space-y-6 py-4">
      {/* Header Banner */}
      <div className="bg-indigo-600 dark:bg-indigo-950 rounded-lg p-6 md:p-8 text-white shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 text-cyan-300 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          AI Exam History & Analytics
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Your Participated AI Exams
        </h1>
        <p className="text-xs md:text-sm text-indigo-100 dark:text-gray-300 mt-1">
          Review your past exam evaluations, AI feedback scorecards, and subject strengths.
        </p>
      </div>

      {/* History Table Container */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Recorded Exam Attempts ({mockExamHistory.length})</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 font-bold border-b border-gray-100 dark:border-gray-800">
              <tr>
                <th className="p-3">Subject</th>
                <th className="p-3">Topic / Focus Area</th>
                <th className="p-3">Date</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Score %</th>
                <th className="p-3">Grade Badge</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
              {mockExamHistory.map((exam) => (
                <tr key={exam.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition">
                  <td className="p-3 font-bold text-gray-900 dark:text-white">{exam.subject}</td>
                  <td className="p-3 font-medium text-gray-500 dark:text-gray-400">{exam.topic}</td>
                  <td className="p-3 font-medium">{exam.date}</td>
                  <td className="p-3 font-mono text-gray-500">{formatTime(exam.timeSpentSeconds)}</td>
                  <td className="p-3 font-bold text-indigo-600 dark:text-cyan-400">{exam.scorePercentage}%</td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-md">
                      {exam.gradeBadge}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedExam(exam)}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs font-semibold transition inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Evaluation</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Evaluation Detail Modal */}
      {selectedExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg w-full max-w-lg p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 rounded-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">AI Evaluation Scorecard</h3>
                  <p className="text-[11px] text-gray-500">{selectedExam.subject}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedExam(null)}
                className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] text-gray-400 font-semibold block">Score Percentage</span>
                <span className="text-xl font-bold text-indigo-600 dark:text-cyan-400">{selectedExam.scorePercentage}%</span>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-800">
                <span className="text-[11px] text-gray-400 font-semibold block">Grade Awarded</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{selectedExam.gradeBadge}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-gray-900 dark:text-white block">Topic Evaluated:</span>
              <p className="p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                {selectedExam.topic}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-gray-900 dark:text-white block">Detailed AI Feedback:</span>
              <p className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-md text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedExam.aiFeedback}
              </p>
            </div>

            <div className="pt-2 flex justify-end border-t border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setSelectedExam(null)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition cursor-pointer"
              >
                Close Scorecard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
