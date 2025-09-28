import React from "react";
import AnimatedCurveLine from "./AnimatedCursorline";
import imgae from "../../image/Ellipse 374.png";

function Longevity({ number, title, description }) {
  return (
    <div className="py-32">
      <div className="container mx-auto py-10 pt-20 text-center pb-40">
        <h1 className="text-white text-[48px] font-medium leading-tight">
          Your Longevity Journey, Simplified.
        </h1>
        <p className="text-[16px] text-gray-300 pt-5">
          Expert care with a personal touch, dedicated to your health
        </p>
      </div>
      <div>
        {/* card desgin show*/}
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-40 px-4 z-30 relative">
          {/* 01 */}
          <div className=" relative top-36 w-80 h-[45vh] rounded-2xl p-6 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Background Gradient with Blur */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#040a07] via-[#081b0f] to-[#03240f] rounded-2xl "></div>

            {/* Border Effect */}
            <div className="absolute inset-0 z-10 rounded-2xl border border-white/[0.08]"></div>

            {/* Circular Progress/Number Indicator */}
            <div className="relative z-20 flex items-center justify-start mb-10">
              <h1 className="absolute text-white text-7xl -top-3 left-0 font-semibold -ml-3">
                01
              </h1>
              <div className="relative w-32 h-32 rounded-full  flex items-center justify-center text-white text-4xl font-bold ">
                <img
                  src={imgae}
                  alt=""
                  className="h-32 -mt-10 -ml-14 object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-20 text-left">
              <h2 className="text-white text-4xl font-semibold mb-4">
                Connect
              </h2>
              <p className="text-gray-300 text-[16px] leading-relaxed">
                Sync wearables, labs, lifestyle, and medical history.
              </p>
            </div>

            {/* Faint blue curve, similar to the main AnimatedCurveLine, for aesthetic */}
            <div className="absolute -bottom-10 -right-20 w-48 h-48 rounded-full bg-[#63A4FF] opacity-10 filter blur-3xl z-0"></div>
          </div>
          {/* 02 */}
          <div className=" w-80 h-[45vh] relative top-0 rounded-2xl p-6 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Background Gradient with Blur */}
            <div className="absolute inset-0 z-0  backdrop-blur-2xl bg-white/20 outline-offset-[-1px] outline-neutral-400/25 rounded-2xl "></div>

            {/* Border Effect */}
            <div className="absolute inset-0 z-10 rounded-2xl border border-white/[0.08]"></div>

            {/* Circular Progress/Number Indicator */}
            <div className="relative z-20 flex items-center justify-start mb-10">
              <h1 className="absolute text-white text-7xl -top-3 left-0 font-semibold -ml-3">
                02
              </h1>
              <div className="relative w-32 h-32 rounded-full  flex items-center justify-center text-white text-4xl font-bold ">
                <img
                  src={imgae}
                  alt=""
                  className="h-32 -mt-10 -ml-14 object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-20 text-left">
              <h2 className="text-white text-4xl font-semibold mb-4">
                Analyze
              </h2>
              <p className="text-gray-300 text-[16px] leading-relaxed">
                Our AI translates complex inputs into personalized insights.
              </p>
            </div>

            {/* Faint blue curve, similar to the main AnimatedCurveLine, for aesthetic */}
            <div className="absolute -bottom-10 -right-20 w-48 h-48 rounded-full bg-[#63A4FF] opacity-10 filter blur-3xl z-0"></div>
          </div>
          {/* 03 */}
          <div className="relative top-36 w-80 h-[45vh] rounded-2xl p-6 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Background Gradient with Blur */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#040a07] via-[#081b0f] to-[#03240f] rounded-2xl "></div>

            {/* Border Effect */}
            <div className="absolute inset-0 z-10 rounded-2xl border border-white/[0.08]"></div>

            {/* Circular Progress/Number Indicator */}
            <div className="relative z-20 flex items-center justify-start mb-10">
              <h1 className="absolute text-white text-7xl -top-3 left-0 font-semibold -ml-3">
                03
              </h1>
              <div className="relative w-32 h-32 rounded-full  flex items-center justify-center text-white text-4xl font-bold ">
                <img
                  src={imgae}
                  alt=""
                  className="h-32 -mt-10 -ml-14 object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="relative z-20 text-left">
              <h2 className="text-white text-4xl font-semibold mb-4">Thrive</h2>
              <p className="text-gray-300 text-[16px] leading-relaxed">
                Follow adaptive healthplans that evolve with you to support
                energy, clarity, and resilience.
              </p>
            </div>

            {/* Faint blue curve, similar to the main AnimatedCurveLine, for aesthetic */}
            <div className="absolute -bottom-10 -right-20 w-48 h-48 rounded-full bg-[#63A4FF] opacity-10 filter blur-3xl z-0"></div>
          </div>
        </div>
        <div className=" relative z-10">
          <AnimatedCurveLine></AnimatedCurveLine>
        </div>
      </div>
    </div>
  );
}

export default Longevity;
