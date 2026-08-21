"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, Lock, Eye, X, ShieldCheck, Play } from "lucide-react";
import { toast } from "sonner";

type CurriculumProps = {
  curriculum: {
    _id: string;
    title: string;
    contents: string[];
  }[];
};

export default function Curriculum({ curriculum }: CurriculumProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    sectionTitle: string;
    videoUrl: string;
  } | null>(null);

  // Define 5 unlocked video lessons across modules
  const isUnlockedVideo = (sIdx: number, idx: number) => {
    if (sIdx === 0 && (idx === 0 || idx === 1)) return true; // Module 1: 2 videos
    if (sIdx === 1 && (idx === 0 || idx === 1)) return true; // Module 2: 2 videos
    if (sIdx === 2 && idx === 0) return true; // Module 3: 1 video
    return false;
  };

  const handleLessonClick = (title: string, sectionTitle: string, unlocked: boolean) => {
    if (unlocked) {
      setSelectedVideo({
        title,
        sectionTitle,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      });
      toast.success(`Opening preview: "${title}"`);
    } else {
      toast.error("This lecture is locked. Enroll in the course to unlock full access!");
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between p-3 bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-md text-xs">
        <span className="font-bold text-gray-900 dark:text-white">
          Course Curriculum & Free Video Samples
        </span>
        <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
          5 Videos Unlocked
        </span>
      </div>

      <Accordion type="multiple" defaultValue={["item-0", "item-1"]} className="space-y-3">
        {curriculum.map((section, sIdx) => (
          <AccordionItem
            key={section._id || sIdx}
            value={section._id || `item-${sIdx}`}
            className="border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900 overflow-hidden px-4 shadow-xs"
          >
            <AccordionTrigger className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white py-3.5 hover:no-underline hover:text-indigo-600 transition">
              <div className="flex items-center gap-2 text-left">
                <span>{section.title}</span>
                <span className="text-[11px] font-normal text-gray-400">
                  ({section.contents.length} Lectures)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-4">
              <ul className="space-y-2 border-t border-gray-100 dark:border-gray-800 pt-3">
                {section.contents.map((content, idx) => {
                  const unlocked = isUnlockedVideo(sIdx, idx);
                  return (
                    <li
                      key={idx}
                      onClick={() => handleLessonClick(content, section.title, unlocked)}
                      className={`flex items-center justify-between text-xs p-2.5 rounded-md transition cursor-pointer ${
                        unlocked
                          ? "bg-indigo-50/40 dark:bg-indigo-950/30 hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 text-gray-900 dark:text-white"
                          : "hover:bg-gray-50 dark:hover:bg-gray-800/40 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {unlocked ? (
                          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Play className="h-3 w-3 fill-white ml-0.5" />
                          </div>
                        ) : (
                          <Lock className="h-4 w-4 text-gray-400 shrink-0 ml-1" />
                        )}
                        <span className="font-semibold">{content}</span>
                      </div>

                      {unlocked ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                          <Eye className="w-3 h-3" />
                          <span>Unlocked Preview</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-gray-400">10:45 min</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Video Player Modal for Unlocked Videos */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg max-w-3xl w-full p-4 relative shadow-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider block">
                  {selectedVideo.sectionTitle}
                </span>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {selectedVideo.title} (Free Video Preview)
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
              <iframe
                className="w-full h-full"
                src={selectedVideo.videoUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-xs border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Enjoying this preview video lesson?</span>
              </div>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  toast.success("Enrolling in course...");
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition shadow-xs cursor-pointer"
              >
                Enroll to Unlock Full Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
