import React from "react";
import DotGrid from "../Home/DotGrid";
import images from "../../image/Image.png";
import { LuHeartHandshake } from "react-icons/lu";

function Banner() {
  return (
    <div className="bg-black h-screen relative">
      {/* animation section */}
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

      {/* main point */}
      <div className="flex items-center justify-between container mx-auto h-full relative Archivo">
        {/* left side section */}
        <div className="w-1/2">
          <p className="text-gray-300 bg-black text-[14px] flex items-center border border-gray-700 rounded-full px-4 py-1 w-fit mb-4">
            {" "}
            <LuHeartHandshake className="text-blue-600 mr-2" size={18} />
            Care You Can Trust
          </p>

          <h1 className="text-white text-[75px] font-medium  leading-tight">
            The World's First{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Longevity
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
              Operating System
            </span>
          </h1>
          <p className="text-gray-400 text-[20px] pt-10">
            Unify your health data wearables, labs, lifestyle, and medical
            records into adaptive, personalized health span plans.
          </p>
          <p className="text-gray-400 text-[16px] pt-12">
            Add years to your life by adding
          </p>
          <div className="text-gray-300 text-[16px] space-x-6 mt-6 flex">
            <button className="rounded-full px-8 py-3 text-white font-semibold bg-gradient-to-r from-[#00953B] to-[#0068F0] cursor-pointer group">
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                👉 Join the Waitlist
              </span>
            </button>

            <button className="border border-gray-500 rounded-full px-8 py-3 font-semibold cursor-pointer group bg-black">
              <span className="inline-block transition-transform duration-200 group-hover:scale-105">
                Learn how Cadensa works →
              </span>
            </button>
          </div>
        </div>

        {/* right side section */}
        <div className="w-1/2 flex justify-end">
          <img src={images} className="h-[64vh]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
