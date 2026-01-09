/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

interface UserProfileProps {
  user: any | null;
}

export default function Profile({ user }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localUser, setLocalUser] = useState(user);

  if (!user) {
    return <p className="text-center py-12">User not logged in.</p>;
  }

  return (
    <div className="py-12">
      {!isEditing ? (
        <ViewProfile user={localUser} onEdit={() => setIsEditing(true)} />
      ) : (
        <EditProfile
          user={localUser}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedUser) => {
            setLocalUser(updatedUser);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
}
