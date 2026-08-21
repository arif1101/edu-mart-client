"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center justify-between py-8 md:py-12">
      {/* description section */}
      <div className="w-full lg:max-w-xl pr-0 lg:pr-6 flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          <span className="text-indigo-600 dark:text-cyan-400">Learn</span> the Skills of Tomorrow
        </h1>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Master real-world skills with expert-led courses, interactive AI practice exams, and industry-recognized certificates designed to boost your career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-11 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-md shadow-xs transition cursor-pointer">
            <span>Join For Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-3 px-4 h-11 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition cursor-pointer">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 rounded-md flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <span>Learn About EduMart</span>
          </button>
        </div>
      </div>

      {/* video section */}
      <div className="relative flex flex-col sm:flex-row max-w-full gap-6 items-center justify-center">
        {/* First Video */}
        <video
          className="rounded-b-full w-60 md:w-68 object-cover max-h-96 z-10 border border-gray-200 dark:border-gray-800 shadow-md"
          src="/hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* Second Video */}
        <video
          className="rounded-t-full w-60 md:w-68 object-cover max-h-96 z-10 border border-gray-200 dark:border-gray-800 shadow-md"
          src="/hero2.mp4"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* First SVG */}
        <Image
          src="/hero-spinner1.svg"
          alt="Top Right SVG"
          width={300}
          height={300}
          className="absolute -top-20 md:-right-20 w-48 md:w-64 h-48 md:h-64 object-cover animate-spin duration-100 opacity-40 pointer-events-none"
        />

        {/* Second SVG */}
        <Image
          src="/hero-spinner2.svg"
          alt="Top Right SVG"
          width={300}
          height={300}
          className="absolute -top-20 md:-right-20 w-48 md:w-64 h-48 md:h-64 object-cover animate-spin duration-100 opacity-40 pointer-events-none"
        />
      </div>
    </section>
  );
}
