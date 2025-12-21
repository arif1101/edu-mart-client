"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 px-4 my-25">
      {/* description section */}
      <div className="w-full lg:max-w-154.5 pr-0 lg:pr-6 flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-[36px] md:text-[48px] lg:text-[72px] font-bold leading-tight">
          <span className="text-sky-500">Learn</span> the Skills of Tomorrow
        </h1>

        <p className="text-sm md:text-base text-[#434343]">
          Creation timelines for the standard lorem ipsum passage vary, with
          some citing the 15th century and others the 20th. Creation timelines
          for the standard lorem ipsum passage vary, with some citing the 15th
          century and others the 20th.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
          <div className="flex items-center justify-center gap-1 w-full sm:w-[160.56px] bg-sky-500 text-white text-[16px] font-medium h-11 rounded-3xl hover:bg-sky-600">
            <button>Join For Free</button>
            <ArrowRight className="text-[26px] mt-1" />
          </div>

          <div className="flex text-base font-bold w-full sm:w-[247.4px] h-11 items-center justify-between">
            <Play className="w-11 h-11 bg-sky-500 text-white p-2 rounded-full" />
            <p>Learn About CustomLMS</p>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="relative flex flex-col sm:flex-row max-w-full lg:max-w-154.5 gap-6 items-center justify-center">
        {/* First Video */}
        <video
          className="rounded-b-full w-62.5 md:w-72.25 object-cover max-h-106.5 z-10"
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
          className="rounded-t-full w-62.5 md:w-72.25 object-cover max-h-106.5 z-10"
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
          className="absolute -top-20 md:-right-20 w-50 md:w-75 h-50 md:h-75 object-cover animate-spin duration-100"
        />

        {/* Second SVG */}
        <Image
          src="/hero-spinner2.svg"
          alt="Top Right SVG"
          width={300}
          height={300}
          className="absolute -top-20 md:-right-20 w-50 md:w-75 h-50 md:h-75 object-cover animate-spin duration-100"
        />
      </div>
    </div>
  );
}
