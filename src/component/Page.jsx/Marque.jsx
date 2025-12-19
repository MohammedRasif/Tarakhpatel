import React from "react";
import Marquee from "react-fast-marquee";
import image from "../../image/Image (26).png";
// import image1 from "../../image/Cadensa pictoral.png";

function Marque() {
  return (
    <div className="pb-28 lg:pt-24 pt-34">
      {/* <img src={image1} className="w-full" alt="" /> */}
      <p className="text-gray-300 pl-10 py-5 pb-16 text-center text-[18px]">
        Works with the devices and labs you already use
      </p>

      <div className="">
        <Marquee className="">
          <div className="flex space-x-20 overflow-x-hidden ">
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">WATCH</h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">OURA</h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              Meta Quest
            </h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">WHOOP</h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">WHOOP</h1>
          </div>
        </Marquee>
      </div>

      <div className="relative">
        <div>
          <img src={image} className="w-full lg:h-96 h-72 object-cover mt-16" alt="" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-white lg:text-5xl text-4xl font-semibold max-w-2xl">
            Health, Orchestrated. Longevity, Unlocked.
          </h1>
          <p className="text-gray-300 max-w-4xl py-5">
            Cadensa is more than an app—it's the world's first Longevity
            Operating System. By integrating your health data and guiding you
            with adaptive insights, we help you unlock your full potential for a
            longer, better life.
          </p>
          {/* <p className="text-white">
            "Add years to your life by adding life to your years."
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Marque;
