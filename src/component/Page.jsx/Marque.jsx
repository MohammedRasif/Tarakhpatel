import React from "react";
import Marquee from "react-fast-marquee";
import image from "../../image/young (2).jpg";
import { CheckCircle } from "lucide-react";
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
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              WATCH
            </h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              OURA
            </h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              Meta Quest
            </h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              WHOOP
            </h1>
            <h1 className="text-gray-400 lg:text-[45px] text-[33px] font-semibold">
              WHOOP
            </h1>
          </div>
        </Marquee>
      </div>

      <div className="relative">
        <div>
          <img
            src={image}
            className="w-full lg:h-[55vh] opacity-70 h-72 object-cover mt-16"
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4">
          <div className="flex items-center justify-center  p-4">
            <div
              style={{
                backgroundImage: "var(--my-gradient)",
              }}
              className={`
                relative w-full flex flex-col items-center justify-center 
                text-white lg:max-w-4xl lg:aspect-[1.8/1] lg:rounded-[100%] lg:shadow-2xl lg:backdrop-blur-[0px] lg:px-45
                [--my-gradient:none] lg:[--my-gradient:linear-gradient(110deg,rgba(103,232,249,0.85)_0%,rgba(37,99,235,0.85)_100%)]
              `}
            >
              <div className="max-w-2xl w-full">
                <h2 className="text-xl md:text-[24px] text-center font-normal mb-8">
                  In your first few minutes with Cadensa, you'll
                </h2>
                <ul className="space-y-2 md:space-y-3 text-lg md:text-[18px] font-light">
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 opacity-90" />
                    <span>See a simple snapshot of your current health</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 opacity-90" />
                    <span>Understand which signals matter most right now</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 opacity-90" />
                    <span>Receive personalized next steps</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 opacity-90" />
                    <span>Engage your support partners</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0 opacity-90" />
                    <span>Feel oriented — not overwhelmed</span>
                  </li>
                </ul>
                <p className="mt-10 text-xl md:text-2xl font-medium text-start">
                  This is about progress, not perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marque;
