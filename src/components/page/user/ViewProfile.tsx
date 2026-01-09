/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ViewProfileProps {
  user: any;
  onEdit: () => void;
}

export default function ViewProfile({ user, onEdit }: ViewProfileProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Profile</h2>
          <Button onClick={onEdit}>Edit Profile</Button>
        </div>

        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            {user?.picture ? (
              <Image
                src={user.picture}
                alt={user.name || "User"}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-30 h-30 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl text-gray-400">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <p className="text-lg">{user?.name || "N/A"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <p className="text-lg">{user?.email || "N/A"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <p className="text-lg">{user?.phone || "Not provided"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Role
              </label>
              <p className="text-lg capitalize">{user?.role || "User"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <p className="text-lg capitalize">{user?.address || "User"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
