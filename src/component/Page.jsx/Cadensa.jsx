import React from "react";
import Animatedborder from "./Animatedborder";
import image from "../../image/images.png";

function Cadensa() {
  return (
    <div className="  lg:py-10 lg:pt-20 pb-20 ">
      <div className="container mx-auto py-10 pt-20 text-center max-w-5xl">
        <h1 className="text-white lg:text-[48px] text-[20px] font-medium leading-tight">
          Cadensa Orchestrates Your Health into One Unified System.
        </h1>
        <p className="text-[16px] text-gray-300 pt-5">
          Cadensa is the world's first Longevity Operating System — an
          intelligent platform that unifies your health data and transforms it
          into adaptive plans designed for your unique biology and goals.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative w-full h-[50vh] ">
          <img
            src={image}
            alt="banner"
            className="w-full h-full object-cover hidden md:block"
          />
          {/* Gradient Overlay for the TOP */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-t from-transparent to-black/95"></div>
          {/* Gradient Overlay for the BOTTOM */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/100"></div>
        </div>

        <div className="container mx-auto absolute lg:-bottom-28 lg:mt-0 mt-[80vh] ">
          <Animatedborder />
        </div>
      </div>
    </div>
  );
}

export default Cadensa;
