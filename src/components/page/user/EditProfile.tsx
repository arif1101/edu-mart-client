/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EditProfileProps {
  user: any;
  onCancel: () => void;
  onSave: (updatedUser: any) => void;
}

export default function EditProfile({
  user,
  onCancel,
  onSave,
}: EditProfileProps) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedUser = {
      ...user,
      name: formData.get("name") || user?.name,
      phone: formData.get("phone") || user?.phone,
      picture: formData.get("picture") || user?.picture,
      address: formData.get("address") || user?.address,
    };
    onSave(updatedUser);
    toast.success("Profile updated successfully");
  }

  return (
    <div className="w-full py-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Edit Profile Details</h2>
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.name || ""}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={user?.phone || ""}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+880 1700-000000"
            />
          </div>

          {/* Picture URL Field */}
          <div className="md:col-span-2">
            <label htmlFor="picture" className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              Profile Photo URL
            </label>
            <input
              type="url"
              id="picture"
              name="picture"
              defaultValue={user?.picture || ""}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://images.unsplash.com/photo-..."
            />
          </div>

          {/* Address Field */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              Address / Location
            </label>
            <textarea
              id="address"
              name="address"
              defaultValue={user?.address || ""}
              rows={3}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full address"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end gap-3 border-t border-gray-100 dark:border-gray-800">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-md transition shadow-xs cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}