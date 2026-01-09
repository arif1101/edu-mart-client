/* eslint-disable @typescript-eslint/no-explicit-any */
// components/page/course/ReviewSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Box, Plane, Edit, Trash2, Star } from "lucide-react";
import {
  createReview,
  getCourseReviews,
  updateReview,
  deleteReview,
  getMyReviewForCourse,
} from "@/lib/review";
import { getAuthUser } from "@/app/_action/auth";
import { toast } from "sonner";

interface Review {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  rating: number;
  message: string;
  createdAt: string;
}

interface ReviewSectionProps {
  courseId: string;
  averageRating: number;
}

export default function ReviewSection({ courseId, averageRating }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [myReview, setMyReview] = useState<Review | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form state
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [courseId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [reviewsData, user, userReview] = await Promise.all([
        getCourseReviews(courseId),
        getAuthUser(),
        getMyReviewForCourse(courseId),
      ]);

      setReviews(reviewsData);
      setCurrentUser(user);
      setMyReview(userReview);

      if (userReview) {
        setRating(userReview.rating);
        setMessage(userReview.message);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error("You must be logged in to submit a review");
      return;
    }

    if (message.length < 10) {
      toast.error("Review must be at least 10 characters");
      return;
    }

    try {
      setSubmitting(true);

      if (isEditing && myReview) {
        // Update existing review
        await updateReview(myReview._id, rating, message);
        toast.success("Review updated successfully!");
      } else {
        // Create new review
        await createReview(courseId, rating, message);
        toast.success("Review submitted successfully!");
      }

      // Reset form
      setMessage("");
      setRating(5);
      setIsEditing(false);

      // Refresh reviews
      await fetchData();
    } catch (error: any) {
      // error.message ||
      toast.error("have to enroll in course to review");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = () => {
    if (myReview) {
      setRating(myReview.rating);
      setMessage(myReview.message);
      setIsEditing(true);
      // Scroll to form
      document.getElementById("review-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDelete = async () => {
    if (!myReview) return;

    if (!confirm("Are you sure you want to delete your review?")) return;

    try {
      await deleteReview(myReview._id);
      toast.success("Review deleted successfully!");
      setMessage("");
      setRating(5);
      setIsEditing(false);
      await fetchData();
    } catch (error: any) {
      toast.error(error.message || "Failed to delete review");
    }
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

  if (loading) {
    return <div className="text-center py-8">Loading reviews...</div>;
  }

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
      {currentUser && (
        <div id="review-form" className="mx-auto p-6 bg-gray-100 dark:bg-black rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            {isEditing ? "Edit Your Review" : myReview ? "You've already reviewed" : "Add Your Review"}
          </h3>

          {myReview && !isEditing ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {renderStars(myReview.rating)}
                <span className="text-sm text-gray-600">{myReview.rating}/5</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{myReview.message}</p>
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ) : (
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

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition disabled:opacity-50"
                >
                  <Plane />
                  {submitting ? "Submitting..." : isEditing ? "Update Review" : "Submit Review"}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setMessage("");
                      setRating(5);
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      )}

      {!currentUser && (
        <div className="mx-auto p-6 bg-gray-100 dark:bg-black rounded-md shadow-md text-center">
          <p className="text-gray-600 dark:text-gray-400">Please login to leave a review</p>
        </div>
      )}

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
              <div key={review._id} className="border rounded-lg p-4 bg-white dark:bg-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {review.user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold">{review.user.name}</p>
                        <div className="flex items-center gap-2">
                          {renderStars(review.rating)}
                          <span className="text-xs text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString()}
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