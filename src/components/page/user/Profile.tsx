/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import ViewProfile from "./ViewProfile"
import EditProfile from "./EditProfile"

interface UserProfileProps {
  user: any | null
}

export default function Profile({ user }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)

  // local editable copy of user
  const [localUser, setLocalUser] = useState(user)

  // handle unauthenticated case
  if (!user) {
    return (
      <div className="py-12 text-center">
        <p>User not found or not logged in.</p>
      </div>
    )
  }

  return (
    <div className="py-12">
      {!isEditing ? (
        <ViewProfile
          user={localUser}
          onEdit={() => setIsEditing(true)}
        />
      ) : (
        <EditProfile
          user={localUser}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedUser) => {
            setLocalUser(updatedUser)
            setIsEditing(false)
          }}
        />
      )}
    </div>
  )
}
