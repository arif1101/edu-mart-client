"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { User, Mail, Calendar, Phone, BookOpen, Building, Globe, MessageCircle } from "lucide-react"

interface ViewProfileProps {
  user: any
  onEdit: () => void
}

export default function ViewProfile({ user, onEdit }: ViewProfileProps) {
  return (
    <div>
      <div className="flex justify-between mb-6 px-4">
        <h4 className="text-2xl font-bold text-sky-500">Profile</h4>
        <Button onClick={onEdit} className="bg-sky-500 hover:bg-sky-600">
          Edit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {user.name}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {user.email}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Member Since {user.memberSince}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><Phone className="inline w-4 h-4" /> {user.mobile}</p>
            <p><BookOpen className="inline w-4 h-4" /> {user.academicLevel}</p>
            <p><Building className="inline w-4 h-4" /> {user.institute}</p>
            <p><Globe className="inline w-4 h-4" /> {user.medium}</p>
            <p><MessageCircle className="inline w-4 h-4" /> {user.whatsapp}</p>
            <p><Calendar className="inline w-4 h-4" /> {user.dob}</p>
            <p>Gender: {user.gender}</p>
          </div>

          <hr />
          <p><strong>Father:</strong> {user.fatherName}</p>
          <p><strong>Mother:</strong> {user.motherName}</p>
          <p><strong>Description:</strong> {user.description}</p>
        </div>
      </div>
    </div>
  )
}
