import React from 'react'

type Mentor = {
  name: string
  role: string
  image: string
}


const mentors: Mentor[] = [
  {
    name: 'Sophia Williams',
    role: 'Senior UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9',
  },
  {
    name: 'Daniel Carter',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    name: 'Aisha Khan',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Data Science Mentor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
]




export default function MeetMyTeam() {
  return (
    <section className="py-8 md:py-12 flex flex-col gap-8">
      {/* Section Header */}
      <div className="max-w-2xl text-center mx-auto flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Meet Our Expert <span className="text-indigo-600 dark:text-cyan-400">Mentors</span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Learn directly from real-world industry leaders with verified expertise and years of experience.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col gap-3 group">
            <div className="relative h-72 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-xs">
              {/* Mentor Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Overlay & View Button */}
              <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-xs font-semibold shadow-xs transition cursor-pointer">
                  View Profile →
                </button>
              </div>
            </div>

            {/* Mentor Name & Role */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
                {mentor.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {mentor.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
