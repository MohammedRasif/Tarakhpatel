import { FaStar } from "react-icons/fa";
import img from "../../image/Image (27).png";
import { useEffect } from "react";

function Trusted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black py-8 sm:py-16 pt-20 sm:pt-40 min-h-screen">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 sm:mb-10 px-4">
        Why We’re Building Cadensa
      </h1>

      <div className="container mx-auto px-4 ">
        <p className="text-base sm:text-lg md:text-xl text-[#B4B4B6] leading-relaxed mb-10 sm:mb-16 text-center md:text-left">
          Health has become data-rich but direction-poor. People track more than
          ever, yet still feel uncertain about what matters, what to do next,
          and whether they’re making progress. Cadensa exists to change that —
          by bringing clarity, guidance, and continuity into one intelligent
          health system.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-6 sm:mb-8 text-center md:text-left">
              Founder Story
            </h2>
            <p className="text-base sm:text-lg text-[#B4B4B6] leading-relaxed mb-6">
              Cadensa began with a simple observation: despite having more
              health data than ever before, most people still don’t feel clear
              or confident about their health. As a physician, I’ve spent over
              15 years in clinical practice, research, and medical education —
              working inside a healthcare system that is often reactive and
              fragmented. I’ve seen how data lives in silos, guidance is
              inconsistent, and motivated people are left to connect the dots on
              their own.
            </p>
            <p className="text-base sm:text-lg text-[#B4B4B6] leading-relaxed mb-6">
              Cadensa was created to bridge that gap — not as another app or
              report, but as an intelligent health system that brings clarity to
              complex data, offers thoughtful guidance, and supports people over
              time. The goal is simple: help people understand what matters,
              take realistic action, and feel supported as they age well.
            </p>
            <p className="text-lg sm:text-xl text-white font-medium">
              Tarak Patel, MD
              <br />
              Founder, Cadensa
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src={img}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[465px] lg:max-w-[500px] h-auto object-cover rounded-lg shadow-2xl"
              alt="Dr. Tarak Patel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
