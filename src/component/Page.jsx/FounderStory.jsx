import { div } from "framer-motion/client";
import img1 from "../../image/Frame 1707483045.png";
import img2 from "../../image/image (28).png";
import img3 from "../../image/image (29).png";
import { useEffect } from "react";

function FounderStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black">
      <div className="text-white container mx-auto px-4 py-10 sm:py-16 ">
        <div className="lg:flex items-center justify-between pt-24">
          <h1 className="lg:w-1/2  text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 sm:mb-8 pt-14">
            Building Clarity into <br /> Modern Health.
          </h1>
          <p className=" lg:w-1/2 text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
            We’re committed to improving lives in the present while building a
            healthier, more resilient future. Every step we take blends
            compassionate care with forward-thinking innovation so you thrive
            today and tomorrow.
          </p>
        </div>
        <div className="lg:flex items-center justify-between pt-8 lg:pt-24">
          <div className="relative  lg:w-1/2">
            <img
              src={img1}
              className={`
      w-full
      rounded-2xl
      object-cover
      h-auto
      aspect-[4/3]          sm:aspect-[5/3]          lg:aspect-[16/9]     
      max-h-[200px] sm:max-h-[400px] lg:max-h-[520px] 
      mx-auto
      relative z-10
    `}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
              Vision
            </h1>
            <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
              A future where people clearly understand their health and feel
              supported as they act on it. We envision a world where health is
              no longer fragmented, confusing, or navigated alone. Cadensa
              exists to help people age well with direction, not guesswork.
            </p>
            <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
              Mission
            </h1>
            <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
              Our mission is to turn personal health data into clarity, action
              and ongoing support. Cadensa is building an intelligent health
              system that helps people understand what matters most, take
              achievable action and stay engaged over time through guidance and
              community. We believe lasting health comes from aligning insight,
              action, and support.
            </p>
          </div>
        </div>
        <div className="lg:flex pt-10 items-center justify-between  lg:pt-24">
          <div className="lg:w-1/2 lg:pr-20">
            <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
              Problem
            </h1>
            <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
              Millions of people wear trackers, get labs, and follow health
              trends - yet still feel uncertain about their long-term health.
              Fragmented tools, generic advice, and disconnected care leave them
              guessing if they're truly on track to age well or unknowingly
              drifting toward disease.
            </p>
          </div>
          <div className="lg:w-1/2 ">
            <img src={img2} className="" alt="" />
          </div>
        </div>
        <div className="lg:flex pt-10 items-center justify-between lg:pt-24">
          <div className="lg:w-1/2 ">
            <img src={img3} className="" alt="" />
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
              Solution
            </h1>
            <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
              Cadensa is your personal health operating system - unifying data
              from wearables, labs, and lifestyle to deliver adaptive,
              preventative guidance. It continuously learns from your unique
              health patterns, giving you early insights, evolving guidance, and
              coordinated support to help you age with strength and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderStory;
