"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"

interface EditProfileProps {
  user: any
  onCancel: () => void
  onSave: (updatedUser: any) => void
}

export default function EditProfile({ user, onCancel, onSave }: EditProfileProps) {
  const [formData, setFormData] = useState(user)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSave(formData)
    toast.success("Profile updated successfully")
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} className="border rounded p-2" />
        <input name="fatherName" value={formData.fatherName} onChange={handleChange} className="border rounded p-2" />
        <input name="motherName" value={formData.motherName} onChange={handleChange} className="border rounded p-2" />
        <input name="institute" value={formData.institute} onChange={handleChange} className="border rounded p-2" />
        <input name="mobile" value={formData.mobile} onChange={handleChange} className="border rounded p-2" />
        <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="border rounded p-2" />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border rounded p-2" />
        <input name="gender" value={formData.gender} onChange={handleChange} className="border rounded p-2" />
        <input name="academicLevel" value={formData.academicLevel} onChange={handleChange} className="border rounded p-2" />
        <input name="medium" value={formData.medium} onChange={handleChange} className="border rounded p-2" />
        <textarea name="description" value={formData.description} onChange={handleChange} className="border rounded p-2 col-span-2" />
      </div>

      <Button onClick={handleSubmit} className="w-full bg-sky-500 hover:bg-sky-600">
        Save Changes
      </Button>
    </div>
  )
}
