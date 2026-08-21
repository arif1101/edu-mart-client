/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Sparkles, BookOpen, Clock, FileText, CheckCircle2, HelpCircle, Check, Search, ChevronDown } from "lucide-react";
import {
  PRESET_SUBJECTS,
  getPresetSubtopics,
  ExamConfig,
  QuestionType,
} from "@/lib/examEngine";
import { toast } from "sonner";

interface ExamSetupProps {
  onStartExam: (config: ExamConfig) => void;
}

export default function ExamSetup({ onStartExam }: ExamSetupProps) {
  const [mode, setMode] = useState<"PRESET" | "CUSTOM">("PRESET");
  const [selectedSubject, setSelectedSubject] = useState<string>("JavaScript & Web Tech");
  const [customSubject, setCustomSubject] = useState<string>("");
  const [customTopic, setCustomTopic] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [questionType, setQuestionType] = useState<QuestionType>("MCQ");
  const [loading, setLoading] = useState(false);

  // Search & Combobox states for Subjects
  const [subjectQuery, setSubjectQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allSubjects = Object.keys(PRESET_SUBJECTS);
  const popularSubjects = allSubjects.slice(0, 4);

  const filteredSubjects = allSubjects.filter((sub) =>
    sub.toLowerCase().includes(subjectQuery.toLowerCase())
  );

  const availableSubtopics = getPresetSubtopics(selectedSubject);

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedTopics([]);
    setSubjectQuery("");
    setIsDropdownOpen(false);
  };

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSelectAllTopics = () => {
    setSelectedTopics([...availableSubtopics]);
  };

  const handleClearAllTopics = () => {
    setSelectedTopics([]);
  };

  const handleStart = () => {
    const finalSubject = mode === "PRESET" ? selectedSubject : customSubject.trim();
    const finalTopics = mode === "PRESET" ? selectedTopics : customTopic.trim() ? [customTopic.trim()] : [];

    if (!finalSubject) {
      toast.error("Please select or enter a subject!");
      return;
    }

    setLoading(true);
    toast.info("Generating AI Exam questions...");

    setTimeout(() => {
      onStartExam({
        mode,
        subject: finalSubject,
        topics: finalTopics.length ? finalTopics : ["General Topics"],
        questionType,
        questionCount: 20,
        durationMinutes: 15,
      });
    }, 600);
  };

  return (
    <div className="w-full py-4">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 text-xs font-bold border border-indigo-200 dark:border-indigo-800/60 mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>AI-POWERED EXAM ENGINE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Customize & Generate Your Exam
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm">
          Select a subject, customize topics, choose your preferred format, and test your knowledge with real-time AI feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form Settings */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Mode Switcher: Preset vs Custom */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span>1. Choose Subject Mode</span>
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setMode("PRESET")}
                className={`py-2.5 px-4 rounded-md text-xs font-semibold border text-center transition cursor-pointer ${
                  mode === "PRESET"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                }`}
              >
                Preset Subjects
              </button>

              <button
                type="button"
                onClick={() => setMode("CUSTOM")}
                className={`py-2.5 px-4 rounded-md text-xs font-semibold border text-center transition cursor-pointer ${
                  mode === "CUSTOM"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                }`}
              >
                Custom Subject & Topic
              </button>
            </div>

            {/* PRESET MODE CONTENT */}
            {mode === "PRESET" ? (
              <div className="space-y-6">
                
                {/* Subject Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                      Select Subject ({allSubjects.length} Available)
                    </label>
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-cyan-400">
                      Current: <strong>{selectedSubject}</strong>
                    </span>
                  </div>

                  {/* Popular Subject Quick Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-gray-400 mr-1">Popular:</span>
                    {popularSubjects.map((sub) => {
                      const isSelected = selectedSubject === sub;
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => handleSubjectChange(sub)}
                          className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition cursor-pointer ${
                            isSelected
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                              : "bg-gray-50 dark:bg-gray-800/80 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300"
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>

                  {/* Searchable Combobox Input & Dropdown */}
                  <div className="relative">
                    <div className="relative flex items-center">
                      <Search className="w-4 h-4 absolute left-3.5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search or select a subject..."
                        value={subjectQuery || selectedSubject}
                        onFocus={() => setIsDropdownOpen(true)}
                        onChange={(e) => {
                          setSubjectQuery(e.target.value);
                          setIsDropdownOpen(true);
                        }}
                        className="w-full pl-10 pr-10 py-2.5 text-xs font-semibold rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
                      />
                      <ChevronDown
                        className="w-4 h-4 absolute right-3.5 text-gray-400 cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 z-30 max-h-56 overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg p-1 space-y-0.5">
                        {filteredSubjects.length > 0 ? (
                          filteredSubjects.map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              onClick={() => handleSubjectChange(sub)}
                              className={`w-full px-3 py-2 text-xs font-semibold rounded-md text-left flex items-center justify-between transition cursor-pointer ${
                                selectedSubject === sub
                                  ? "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-cyan-400 font-bold"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                            >
                              <span>{sub}</span>
                              {selectedSubject === sub && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />}
                            </button>
                          ))
                        ) : (
                          <div className="p-3 text-center text-xs text-gray-400">
                            No subjects match "{subjectQuery}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* AI Subtopics Suggester */}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
                      <span>AI Suggested Sub-topics</span>
                      <span className="text-[11px] font-semibold text-gray-400 ml-1">
                        ({selectedTopics.length} / {availableSubtopics.length} selected)
                      </span>
                    </label>

                    {/* Quick Select All / Clear All Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSelectAllTopics}
                        className="text-[11px] font-semibold text-indigo-600 dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        Select All
                      </button>
                      <span className="text-gray-300 dark:text-gray-700">•</span>
                      <button
                        type="button"
                        onClick={handleClearAllTopics}
                        className="text-[11px] font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>

                  {/* Multi-Select Pills Container */}
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-md flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                    {availableSubtopics.map((topic) => {
                      const isSelected = selectedTopics.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                              : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                          <span>{topic}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (
              /* CUSTOM MODE CONTENT */
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    Custom Subject Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Structures, Modern Physics, World History"
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    Custom Topic / Focus Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Binary Trees & Graph Traversal, Quantum Mechanics"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Question Format & Type Selector */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>2. Select Question Format</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setQuestionType("MCQ")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-start gap-3 ${
                  questionType === "MCQ"
                    ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                }`}
              >
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">Multiple Choice (MCQ)</h3>
                  <p className="text-xs text-gray-500 mt-1">4 options per question with instant AI grading feedback.</p>
                </div>
              </div>

              <div
                onClick={() => setQuestionType("WRITTEN")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-start gap-3 ${
                  questionType === "WRITTEN"
                    ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                }`}
              >
                <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">Written / Short Answer</h3>
                  <p className="text-xs text-gray-500 mt-1">Type your response; AI evaluates core concepts & rubrics.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Summary Card & Action Button */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-md sticky top-24 space-y-6">
            <h2 className="font-bold text-base text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
              Exam Summary
            </h2>

            <div className="space-y-4 text-xs font-medium text-gray-600 dark:text-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Questions</span>
                <span className="font-bold text-sm text-gray-900 dark:text-white">20 Questions</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-500" />
                  Time Limit
                </span>
                <span className="font-bold text-sm text-indigo-600 dark:text-cyan-400">15 Minutes</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Question Format</span>
                <span className="font-bold text-gray-900 dark:text-white">{questionType}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Selected Subject</span>
                <span className="font-bold text-indigo-600 dark:text-cyan-400 truncate max-w-[120px]">
                  {mode === "PRESET" ? selectedSubject : customSubject || "Not Set"}
                </span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl text-amber-800 dark:text-amber-300 text-xs leading-relaxed flex items-start gap-2">
              <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Includes a 60-second grace period warning popup if the 15-minute timer expires.</span>
            </div>

            <button
              type="button"
              onClick={handleStart}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-xs transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 text-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>{loading ? "Generating Exam..." : "Start AI Exam"}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
