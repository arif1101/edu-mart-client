import { CalendarCheck, HeadphoneOff, Headset } from "lucide-react";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="py-8 md:py-12 flex flex-col lg:flex-row gap-10 items-center justify-between">
      {/* Left Feature Visual */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative bg-gray-900 w-full h-[360px] md:h-[420px] rounded-lg overflow-hidden border border-gray-800 shadow-sm">
          <img
            src="https://lms.factoryze.tech/passion/home-1-left-img-resize.jpg"
            alt="Feature background"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Stat Badge */}
          <div className="absolute top-4 right-4 bg-indigo-600 text-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold">900K+</h3>
            <p className="text-xs font-medium text-indigo-100">Total Students</p>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-lg shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/men-1.jpg"
                alt="Student"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Live Discussion</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Interactive live sessions</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded-md transition cursor-pointer">
              Join Discussion →
            </button>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Igniting A <span className="text-indigo-600 dark:text-cyan-400">Passion That</span> Will Propel You Forward
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            EduMart provides interactive courses, hands-on assignments, and real-time guidance to turn your learning goals into achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 space-y-2">
            <Headset className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <h3 className="text-xs font-bold text-gray-900 dark:text-white">24/7 Live Support</h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Always here to help you learn</p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 space-y-2">
            <HeadphoneOff className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <h3 className="text-xs font-bold text-gray-900 dark:text-white">Direct Guidance</h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Get quick answers from mentors</p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 space-y-2">
            <CalendarCheck className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
            <h3 className="text-xs font-bold text-gray-900 dark:text-white">Flexible Schedule</h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Learn at your own speed</p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md transition shadow-xs cursor-pointer">
            Start Free Trial →
          </button>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Includes 7-day money-back guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
