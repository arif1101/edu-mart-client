/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { updateUserProfile } from "@/lib/user";
import { toast } from "sonner";
import { useTransition } from "react";

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
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        // Convert FormData to plain object
        const payload: any = {};
        formData.forEach((value, key) => {
          if (value && value !== "") {
            payload[key] = value;
          }
        });

        console.log("Submitting payload:", payload);

        // Call server action with plain object
        const updatedUser = await updateUserProfile(payload);

        if (updatedUser) {
          onSave(updatedUser);
          toast.success("Profile updated successfully");
        } else {
          toast.error("Profile update failed");
        }
      } catch (error: any) {
        console.error("Form submission error:", error);
        toast.error(error.message || "Profile update failed");
      }
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Edit Profile</h2>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isPending}
        >
          Cancel
        </Button>
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user?.name || ""}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            defaultValue={user?.phone || ""}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
            placeholder="Enter phone number"
          />
        </div>

        {/* Picture URL Field */}
        <div>
          <label htmlFor="picture" className="block text-sm font-medium mb-1">
            Profile Picture URL
          </label>
          <input
            type="url"
            id="picture"
            name="picture"
            defaultValue={user?.picture || ""}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            defaultValue={user?.address || ""}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
            placeholder="Enter your address"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            New Password (leave blank to keep current)
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new password"
            disabled={isPending}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}