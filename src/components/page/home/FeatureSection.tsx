import { CalendarCheck, HeadphoneOff, Headset } from "lucide-react";
import React from "react";

export default function FeatureSection() {
  return (
    <div className="flex mt-25 justify-between">
      <div className="w-1/2 px-10">
        <div className="relative bg-[url('https://lms.factoryze.tech/passion/home-1-left-img-resize.jpg')] w-full h-[500px] rounded-lg bg-cover bg-center">
          {/* 1st Container - Positioned Slightly Outside Right */}
          <div
            className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center bg-sky-500 shadow-lg"
            // Move more to the right
          >
            <h1 className="text-4xl font-bold text-white">900K</h1>
            <p className="text-lg text-white">Total Student</p>
          </div>

          {/* 2nd Container - Positioned Slightly Outside Right */}
          <div
            className="absolute max-w-[456px] flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-lg right-[-60px] bottom-[-40px]"
            //   style={{ right: '-40px' }} // Move more to the right
          >
            <div className="flex justify-between">
              {/* First Image */}
              <div className="relative h-[200px] border rounded-xl overflow-hidden">
                <img
                  src="/men-1.jpg"
                  alt="Smiling Man"
                  className="w-[200px] h-full object-cover rounded-xl"
                />
              </div>

              {/* Second Image with Video Icons */}
              <div className="relative w-[200px] h-[200px]">
                <video
                  src='/meeting.mp4'
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                ></video>
              </div>
            </div>

            {/* Discussion Info */}
            <div className="flex justify-between px-1">
              <div>
                <h3 className="font-bold text-lg">Online Discussion</h3>
                <p className="text-gray-500 text-sm">
                  Amet purus gravida quis blandit
                </p>
              </div>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                End Discussion →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 max-w-[568.21px]">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
          Igniting A <span className="text-sky-500">Passion That</span> Will
          Propel You Forward
        </h2>
        <p className="text-gray-600 mb-6">
          Integer venenatis consequat elit. Curabitur eget laoreet nibh. Cras
          euismod, tellus vitae luctus ultrices, lacus erat sagittis nulla, id
          ornare velit ligula congue ex. Etiam rhoncus urna ut pulvinar euismod.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col gap-4">
            <Headset size={30} className="text-sky-500 mb-3" />
            <h3 className="text-base font-bold text-sky-500">
              24/7 Live Support
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Amet porttitor eget dolor morbi
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <HeadphoneOff size={30} className="text-sky-500 mb-3" />
            <h3 className="text-base font-bold text-sky-500">
              Email Assistance
            </h3>
            <p className="text-gray-600 mt-1">
              Facilisis leo vel fringilla est eleifend.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <CalendarCheck size={30} className="text-sky-500 mb-3" />
            <h3 className="text-base font-bold text-sky-500">
              Book Your Schedule
            </h3>
            <p className="text-gray-600 mt-1">
              Egestas fringilla phasellus faucibus.
            </p>
          </div>
        </div>
        <button className="h-[48px] bg-sky-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-sky-600 transition duration-300">
          Start 30-Day Free Trial →
        </button>
        <p className="mt-4 text-black font-semibold">
          Or <span className="text-lg">$24,525/year</span> with 7-day money-back
          guarantee
        </p>
      </div>
    </div>
  );
}
