"use client";

export default function FindCourseForm() {
  return (
    <div className="w-full bg-indigo-600 dark:bg-indigo-950 p-6 md:p-10 my-8 md:my-12 rounded-lg text-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Find Your Course</h2>
          <p className="text-sm md:text-base text-indigo-100 dark:text-gray-300 leading-relaxed">
            Fill out the form below and our learning advisor will recommend the perfect learning path tailored for you.
          </p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-10 px-4 text-sm rounded-md bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800 text-white placeholder:text-indigo-200 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-10 px-4 text-sm rounded-md bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800 text-white placeholder:text-indigo-200 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="text"
            placeholder="Interested Topic / Course"
            className="w-full h-10 px-4 text-sm rounded-md bg-white/10 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800 text-white placeholder:text-indigo-200 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="w-full h-10 bg-gray-950 hover:bg-gray-900 text-white text-sm font-semibold rounded-md transition cursor-pointer"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
