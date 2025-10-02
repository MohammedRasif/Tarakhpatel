import React, { useEffect, useState } from "react";
import DotGrid from "../Home/DotGrid";
import images from "../../image/Image.png";
import { LuHeartHandshake } from "react-icons/lu";

function Banner() {
  const [progress, setProgress] = useState(0);
  const currentIntake = 1500;
  const totalGoal = 2000;
  const progressPercentage = (currentIntake / totalGoal) * 100;

  useEffect(() => {
    // Animate progress on mount
    const timer = setTimeout(() => {
      setProgress(progressPercentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <div className="bg-black h-screen relative">
      <div className="absolute inset-0">
        <DotGrid
          dotSize={4}
          gap={15}
          baseColor="#1F2937"
          activeColor="#0000FF"
          proximity={150}
          shockRadius={200}
          shockStrength={8}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main content overlay */}
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto h-full relative Archivo px-4 py-6 lg:pt-10 pt-28">
        {/* Left side section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-gray-300 bg-black lg:text-[14px] text-[11px] flex items-center border border-gray-700 rounded-full px-4 py-1 w-fit mb-4 sm:text-[12px] md:text-[14px]">
            <LuHeartHandshake className="text-blue-600 mr-2" size={18} />
            Care You Can Trust
          </p>

          <h1 className="text-white text-[30px] font-medium leading-tight sm:text-[40px] md:text-[60px] lg:text-[75px]">
            The World's First{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Longevity
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Operating System
            </span>
          </h1>
          <p className="text-gray-400 text-[14px] pt-5 sm:text-[14px] md:text-[16px] lg:text-[20px]">
            Unify your health data wearables, labs, lifestyle, and medical
            records into adaptive, personalized health span plans.
          </p>
          <p className="text-gray-400 text-[14px] pt-5 sm:text-[12px] md:text-[14px] lg:text-[16px]">
            Add years to your life by adding life to your years.
          </p>
          <div className="text-gray-300 lg:text-[16px] text-[13px] space-x-6 mt-6 flex flex-wrap sm:space-x-2 md:space-x-4 lg:space-x-6">
            <button className="rounded-full px-8 py-3 text-white lg:mb-0 mb-5 font-semibold bg-gradient-to-r from-[#00953B] to-[#0068F0] cursor-pointer group sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-3">
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                👉 Join the Waitlist
              </span>
            </button>
            <button className="border border-gray-500 rounded-full px-8 py-3 font-semibold cursor-pointer group bg-black sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-3">
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                Learn how Cadensa works →
              </span>
            </button>
          </div>
          <div className="text-white flex items-center py-2 px-4 pt-10 sm:flex-col sm:items-start sm:space-y-2 lg:flex-row lg:space-x-4">
            <div className="flex -space-x-2 sm:-space-x-1 md:-space-x-2">
              <img
                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529178/samples/man-portrait.jpg"
                className="w-10 h-10 rounded-full border-2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                alt="Customer 1"
              />
              <img
                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529177/samples/smile.jpg"
                className="w-10 h-10 rounded-full border-2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                alt="Customer 2"
              />
              <img
                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529169/samples/people/smiling-man.jpg"
                className="w-10 h-10 rounded-full border-2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                alt="Customer 3"
              />
            </div>
            <div className="ml-4 text-sm font-medium sm:ml-0 sm:mt-2 lg:ml-4 lg:text-sm md:text-xs sm:text-[10px]">
              Already helped <br /> over 10K+ customer
            </div>
          </div>
        </div>

        {/* Right side section */}
        <div className="hidden sm:block md:block lg:flex w-full lg:w-1/2 justify-end relative lg:mt-0 mt-8">
          <div>
            <img src={images} className="h-[64vh] w-auto sm:h-[40vh] md:h-[50vh] lg:h-[64vh]" alt="" />
          </div>

          {/* Progress section */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg h-[22vh] w-80 absolute bottom-5 right-48 border border-white/20 sm:w-48 sm:h-[15vh] md:w-64 md:h-[18vh] lg:w-80 lg:h-[22vh]">
            {/* Header with icon and title */}
            <div className="flex items-center gap-4 mb-6 sm:gap-2 md:gap-3 lg:gap-4">
              <div className="relative w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                {/* Circular background with gradient */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                  <svg
                    className="w-6 h-6 text-white sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 2h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm2.5 20c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zM7 18c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H7z" />
                  </svg>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 sm:text-sm md:text-base lg:text-lg">
                  Daily Water Intake
                </h2>
                <p className="text-sm text-gray-700 sm:text-[10px] md:text-xs lg:text-sm">
                  Next drink: 5 PM
                </p>
              </div>
            </div>

            {/* Progress section */}
            <div className="space-y-4">
              {/* Progress text */}
              <div className="flex items-center justify-between text-lg sm:text-sm md:text-base lg:text-lg">
                <span className="font-semibold text-gray-900">
                  {currentIntake.toLocaleString()} ml
                </span>
                <span className="text-gray-800">
                  of {totalGoal.toLocaleString()} ml
                </span>
              </div>

              {/* Progress bar alternative (linear) */}
              <div className="w-full bg-white/10 backdrop-blur-md rounded-full h-11 sm:h-7 md:h-9 lg:h-11">
                <div
                  className="bg-gradient-to-r from-blue-400 to-teal-500 h-11 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="text-white absolute top-5 right-48 flex space-x-3 sm:flex-col sm:space-y-2 sm:right-4 md:flex-row md:space-x-2 md:right-24 lg:flex-row lg:space-x-3 lg:right-48">
            <p className="px-5 py-1 rounded-full bg-gray-500/50 sm:px-2 sm:py-0.5 md:px-4 md:py-1 lg:px-5 lg:py-1">Empowere</p>
            <p className="px-5 py-1 rounded-full bg-gray-500/50 sm:px-2 sm:py-0.5 md:px-4 md:py-1 lg:px-5 lg:py-1">Restore</p>
            <p className="px-5 py-1 rounded-full bg-gray-500/50 sm:px-2 sm:py-0.5 md:px-4 md:py-1 lg:px-5 lg:py-1">Better</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;