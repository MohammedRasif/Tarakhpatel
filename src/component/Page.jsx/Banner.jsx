"use client"

import { useEffect, useState } from "react"
import DotGrid from "../Home/DotGrid"
import video from "../../image/cadensa video.mp4";


function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showImage, setShowImage] = useState(false)
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

  // Function to open the modal and reset to video
  const openModal = () => {
    setIsModalOpen(true);
    setShowImage(false); // Ensure video is shown when modal opens
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setShowImage(false); // Reset to video when modal closes
  };

  // Function to handle video end
  const handleVideoEnd = () => {
    setShowImage(true); // Show image when video ends
  };

  return (
    <>
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

        <div className="flex flex-col items-center justify-center container mx-auto h-full relative Archivo px-4 py-6">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-white text-[50px] font-medium leading-tight sm:text-[50px] md:text-[70px] lg:text-[75px]">
              Cadensa: The Intelligent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
                Health System
              </span>
            </h1>
            <p className="text-gray-400 text-[18px] pt-6 sm:text-[20px] md:text-[24px] lg:text-[28px]">
              Where science, guidance, and support move as one.
            </p>
            <p className="text-gray-300 text-[16px] pt-4 sm:text-[18px] md:text-[20px] lg:text-[22px]">
              Launching January 2026.
            </p>
            <div className="text-gray-300 lg:text-[18px] text-[16px] flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="rounded-full px-10 py-4 text-white font-semibold bg-gradient-to-r from-[#00953B] to-[#0068F0] cursor-pointer group sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-[16px] lg:text-[18px]">
                <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                  Join the January Founding Cohort →
                </span>
              </button>
              <button
                onClick={openModal}
                className="border border-gray-500 rounded-full px-10 py-4 font-semibold cursor-pointer group bg-black sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-[16px] lg:text-[18px]"
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                  Learn how Cadensa works →
                </span>
              </button>
            </div>
            <p className="text-gray-400 text-[14px] pt-4 sm:text-[15px] md:text-[16px] lg:text-[18px]">
              Early-access spots are limited.
            </p>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-[3px] flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex justify-center items-center">
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

export default Banner
