import img from "../../image/Image (27).png";
import img1 from "../../image/Frame 1707483045.png";
import img2 from "../../image/Image (28).png";
import img3 from "../../image/Image (29).png";

function FounderStory() {
  return (
    <div className="text-white container mx-auto px-4 py-10 sm:py-16">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 sm:mb-8">
        Founder Story
      </h1>
      <div className="flex flex-col md:flex-row  justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-5">
            Dr. Tarak Patel
          </h2>
          <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5 lg:pr-28">
            I've spent my career at the intersection of medicine, research, and
            leadership training the next generation of physicians, leading
            radiology departments, and contributing to groundbreaking research
            alongside collaborators who later went on to a Nobel Prize.
          </p>
          <p className="text-base sm:text-lg text-[#B4B4B6]">
            Along the way, I've seen how fragmented health data keeps patients
            from realizing their full health potential. That's why I founded
            Cadensa: to unify wearables, labs, and AI-driven insights into one
            ecosystem for longevity. The goal is to help people live in cadence
            with their health, so they can truly thrive.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={img}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[465px] h-auto object-cover"
            alt="Dr. Tarak Patel"
          />
        </div>
      </div>
      <div className="lg:flex items-center justify-between">
        <h1 className="lg:w-1/2  text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 sm:mb-8 pt-14">
          Healing Today, <br /> Shaping Tomorrow
        </h1>
        <p className=" lg:w-1/2 text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
          We’re committed to improving lives in the present while building a
          healthier, more resilient future. Every step we take blends
          compassionate care with forward-thinking innovation so you thrive
          today and tomorrow.
        </p>
      </div>
      <div className="lg:flex items-center justify-between pt-8 lg:pt-24">
        <div className="relative lg:w-1/2 lg:pr-16">
          <img
            src={img1}
            className="w-full rounded-2xl relative z-10 max-w-[300px] sm:max-w-[400px] md:max-w-[736px] lg:h-[415.16px] h-auto object-cover"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 ">
          <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
            Vision
          </h1>
          <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
            To redefine how the world approaches aging - from reactive care to
            proactive, personalized longevity - by building the most
            intelligent, integrated ecosystem for lifelong health.
          </p>
          <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
            Mission
          </h1>
          <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
            Our mission is to empower people with early, personalized insights
            and adaptive tools that prevent disease, optimize healthspan, and
            align their entire care ecosystem around a smarter path to long-term
            wellbeing.
          </p>
        </div>
      </div>
      <div className="lg:flex pt-10 items-center justify-between  lg:pt-24">
        <div className="lg:w-1/2 lg:pr-20">
          <h1 className="lg:text-[32px] text-[20px] font-medium lg:pt-0 pt-5">
            Problem
          </h1>
          <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5">
            Millions of people wear trackers, get labs, and follow health trends
            - yet still feel uncertain about their long-term health. Fragmented
            tools, generic advice, and disconnected care leave them guessing if
            they're truly on track to age well or unknowingly drifting toward
            disease.
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
            from wearables, labs, and lifestyle to deliver adaptive, Al-powered
            prevention plans. It continuously learns from your unique health
            patterns, giving you early insights, evolving guidance, and
            coordinated support to help you age with strength and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FounderStory;
