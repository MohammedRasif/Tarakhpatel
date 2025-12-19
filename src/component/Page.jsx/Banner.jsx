"use client"
import React, { useEffect, useState } from "react";
import DotGrid from "../Home/DotGrid";
import images from "../../image/Image.png";
import { LuHeartHandshake } from "react-icons/lu";
import video from "../../image/cadensa video.mp4";

function Banner() {
  const [progress, setProgress] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const currentIntake = 1500
  const totalGoal = 2000
  const progressPercentage = (currentIntake / totalGoal) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressPercentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [progressPercentage])

  const openModal = () => {
    setIsModalOpen(true)
    setShowImage(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setShowImage(false)
  }

  const handleVideoEnd = () => {
    setShowImage(true)
  }

  return (
    <div className="bg-black min-h-screen relative">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto min-h-screen relative Archivo px-4 py-12 lg:py-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-white text-[32px] font-medium leading-tight sm:text-[40px] md:text-[60px] lg:text-[75px]">
            Worlds Most Personalized{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Longevity
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Ecosystem
            </span>
          </h1>
          <p className="text-gray-400 text-[14px] pt-4 sm:text-[16px] md:text-[18px] lg:text-[20px]">
            Unify your health data wearables, labs, lifestyle, and medical records into adaptive, personalized health
            span plans.
          </p>
          {/* <div className="text-gray-300 mt-6 flex flex-wrap gap-3">
            <button className="rounded-full w-full sm:w-auto px-8 py-3 text-white font-semibold bg-gradient-to-r from-[#00953B] to-[#0068F0] cursor-pointer group text-[14px] lg:text-[16px]">
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                👉 Join the Waitlist
              </span>
            </button>
          </div> */}
        </div>

        <div className=" lg:flex w-full lg:w-1/2 justify-end relative">
          <div>
            <img src={images} className="h-[64vh] w-auto" alt="Health Dashboard" />
          </div>

          {/* Progress section */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg h-[22vh] w-80 absolute bottom-1 lg:right-48 right-1 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 2h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm2.5 20c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zM7 18c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Daily Water Intake</h2>
                <p className="text-sm text-gray-700">Next drink: 5 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-gray-900">{currentIntake.toLocaleString()} ml</span>
                <span className="text-gray-800">of {totalGoal.toLocaleString()} ml</span>
              </div>
              <div className="w-full bg-white/10 backdrop-blur-md rounded-full lg:h-11 h-5">
                <div
                  className="bg-gradient-to-r from-blue-400 to-teal-500 lg:h-11 h-5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="text-white absolute top-5 lg:right-40 right-2 flex space-x-3">
            <p className="px-5 py-1 rounded-full bg-gray-500/50">Empower</p>
            <p className="px-5 py-1 rounded-full bg-gray-500/50">Restore</p>
            <p className="px-5 py-1 rounded-full bg-gray-500/50">Better</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[3px] flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900"
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
                  src="/placeholder-video.mp4"
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
  )
}

export default Banner
