/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Box, Plane, Star } from "lucide-react";
import { mockReviews, mockUser } from "@/data/mockData";
import { toast } from "sonner";

interface ReviewSectionProps {
  courseId: string;
  averageRating: number;
}

export default function ReviewSection({ averageRating }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<any[]>(mockReviews);
  const [rating, setRating] = useState(5);
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

  const renderStars = (rating: number, interactive = false, onRate?: (r: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            size={interactive ? 24 : 16}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="tab-content">
      <div>
        <h1 className="text-[20px] font-bold">Reviews</h1>
        <p className="text-sm text-slate-400">
          Total reviews: {reviews.length} | Rating: {averageRating.toFixed(1)}
        </p>
      </div>

      <div className="border mt-6 mb-6"></div>

      {/* Review Form */}
      <div id="review-form" className="mx-auto p-6 bg-gray-100 dark:bg-black rounded-md shadow-md">
        <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating</label>
            {renderStars(rating, true, setRating)}
          </div>

          <textarea
            className="w-full border rounded-md p-3 mb-4 resize-none dark:bg-gray-800 dark:text-white"
            placeholder="Write your review... (minimum 10 characters)"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={10}
            maxLength={1000}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition cursor-pointer"
          >
            <Plane />
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="mt-6">
        <h1 className="text-[20px] font-semibold mb-4">All Reviews</h1>

        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center p-4">
            <Box className="w-12 h-12 text-gray-500 mb-4" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">No Reviews Yet</h2>
            <p className="text-sm text-gray-500">Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id || review._id} className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {review.user?.name ? review.user.name.charAt(0).toUpperCase() : "U"}
                      </div>
                      <div>
                        <p className="font-semibold">{review.user?.name || "User"}</p>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <span className="text-xs text-gray-500">
                            {review.createdAt}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13">{review.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}