/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { MessageSquare, Send, Star, UserCheck } from "lucide-react";
import { mockReviews, mockUser } from "@/data/mockData";
import { toast } from "sonner";

interface ReviewSectionProps {
  courseId: string;
  averageRating: number;
}

export default function ReviewSection({ averageRating }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<any[]>(mockReviews);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.length < 10) {
      toast.error("Review must be at least 10 characters");
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      user: { name: mockUser.name, avatar: mockUser.avatar },
      rating,
      message,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setReviews([newRev, ...reviews]);
    setMessage("");
    toast.success("Review submitted successfully!");
  };

  const renderStars = (
    currentRating: number,
    interactive = false,
    onRate?: (r: number) => void
  ) => {
    const activeRating = interactive && hoverRating > 0 ? hoverRating : currentRating;

    return (
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${
              star <= activeRating
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300 dark:text-gray-600"
            } ${interactive ? "cursor-pointer transition-transform hover:scale-110" : ""}`}
            size={interactive ? 22 : 15}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Stat Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-lg gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Course Reviews & Student Feedback</span>
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            Read authentic reviews from learners who completed this course
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-md border border-gray-200 dark:border-gray-800 shrink-0">
          <div className="text-xl font-extrabold text-indigo-600 dark:text-cyan-400">
            {averageRating.toFixed(1)}
          </div>
          <div>
            {renderStars(Math.round(averageRating))}
            <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
              {reviews.length} Total Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Write a Review Form */}
      <div
        id="review-form"
        className="p-5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs space-y-4"
      >
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Leave a Review</span>
          </h4>
          <span className="text-xs text-gray-400">Posting as {mockUser.name}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
              Select Rating
            </label>
            {renderStars(rating, true, setRating)}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
              Your Review Message
            </label>
            <textarea
              className="w-full border border-gray-200 dark:border-gray-800 rounded-md p-3 text-xs bg-gray-50 dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 transition"
              placeholder="Share your thoughts about course content, instructor pacing, and assignments... (minimum 10 characters)"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={10}
              maxLength={1000}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition shadow-xs cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Course Review</span>
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Student Feedback ({reviews.length})
        </h4>

        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-dashed border-gray-200 dark:border-gray-800">
            <MessageSquare className="w-8 h-8 text-gray-400 mb-2" />
            <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              No Reviews Yet
            </h5>
            <p className="text-xs text-gray-500 mt-1">Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {reviews.map((review) => (
              <div
                key={review.id || review._id}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {review.user?.avatar ? (
                      <img
                        src={review.user.avatar}
                        alt={review.user?.name || "User"}
                        className="w-9 h-9 rounded-full object-cover border border-indigo-100 dark:border-indigo-900"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                        {review.user?.name ? review.user.name.charAt(0).toUpperCase() : "U"}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        {review.user?.name || "Student"}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        {renderStars(review.rating)}
                        <span className="text-[10px] text-gray-400">
                          {review.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pl-12">
                  {review.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}