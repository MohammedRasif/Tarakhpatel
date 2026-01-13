"use client"

import { useEffect, useState } from "react"
import DotGrid from "../Home/DotGrid"
import video from "../../image/Cadensa Intro Video.mp4";


function FristBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const currentIntake = 1500;
  const totalGoal = 2000;
  const progressPercentage = (currentIntake / totalGoal) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressPercentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [progressPercentage]);

  const openModal = () => {
    setIsModalOpen(true);
    setShowImage(false); 
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setShowImage(false); 
  };

  const handleVideoEnd = () => {
    setShowImage(true); 
  };

  return (
    <>
       <div className="bg-black min-h-screen relative">
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
        <div className="flex flex-col items-center justify-center container mx-auto min-h-screen relative Archivo px-4 py-12 lg:py-6 lg:pt-0 pt-28 ">
          <div className="w-full max-w-7xl text-center">
            <h1 className="  text-white text-[30px] leading-tight sm:text-[40px] md:text-[60px] lg:text-[65px]">
              Cadensa: <span className="bg-clip-text lg:text-[60px] text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">An Intelligent Health System for{" "}</span>
              <span className="bg-clip-text lg:text-[60px] text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
                Personalized Wellness
              </span>
            </h1>
            <p className="lg:text-[42px] text-white">Launching January 2026</p>
            <p className="text-gray-400 text-[14px] pt-4 sm:text-[18px] md:text-[22px] lg:text-[28px]">
              We turn personalized health data into clarity, direction
            </p>
            <p className="text-gray-400 text-[14px] lg:pt-3 sm:text-[16px] md:text-[18px] lg:text-[28px]">
              and support-all in one place.
            </p>
            <div className="text-gray-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
              {/* <button className="rounded-full w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 text-white font-semibold bg-gradient-to-r from-[#00953B] to-[#0068F0] cursor-pointer group text-[14px] sm:text-[16px] lg:text-[18px]">
                <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                  Join the January Founding Cohort →
                </span>
              </button> */}
              <button
                onClick={openModal}
                className="border border-gray-500 rounded-full w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 font-semibold cursor-pointer group bg-black text-[14px] sm:text-[16px] lg:text-[18px]"
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                  Learn how Cadensa works →
                </span>
              </button>
            </div>
            <p className="text-gray-400 text-[12px] pt-3 sm:text-[14px] md:text-[16px] lg:text-[18px]">
              Early-access spots are limited.
            </p>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-[3px] flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-2xl relative">
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex justify-center items-center mt-8">
                {!showImage ? (
                  <video
                    src={video}
                    autoPlay
                    controls
                    onEnded={handleVideoEnd}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1761477944/Cadensa_kxkivc.jpg"
                    alt="Post-video image"
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default FristBanner
