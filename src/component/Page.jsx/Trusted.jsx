import { FaStar } from "react-icons/fa";
import img from "../../image/Image (27).png";
import { useEffect } from "react";

function Trusted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black py-8 sm:py-16 pt-20 sm:pt-40">
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-16 px-4">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-medium leading-tight mb-4">
          Trusted by Experts. Built for You.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Cadensa combines medical expertise with cutting-edge technology to make longevity accessible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center items-start gap-6 sm:gap-8 container mx-auto px-4">
        {/* Left side - Doctor profile */}
        <div className="w-full lg:w-2/3">
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3 relative">
            <div className="items-start gap-4 relative">
              <div className="items-center justify-start flex space-x-3 pb-2">
                <img
                  src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1761393429/Image_27_tzr9vq.png"
                  className="rounded-full w-10 h-10"
                  alt="Dr. Tarak Patel"
                />
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-[17px]">Dr. Tarak Patel</h3>
                  <p className="text-gray-400 text-sm sm:text-[14px]">Founder & Chief Medical Officer</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
                  Board-certified specialist with 15+ years of clinical and research experience. Passionate about using
                  technology to democratize longevity medicine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Advisory board and partnerships */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Expert Advisory Board */}
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-white font-semibold text-base sm:text-lg">Expert Advisory Board</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Developed with input from longevity researchers, health-tech innovators, and physicians from leading
              institutions.
            </p>
          </div>

          {/* Research Partnerships */}
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3">
            <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">Research Partnerships</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Collaborating with leading longevity research institutions to ensure our platform reflects the latest
              scientific breakthroughs.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 sm:mb-8 mt-12 sm:mt-16 px-4">
        Founder Story
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 container mx-auto px-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-5 text-white">Dr. Tarak Patel</h2>
          <p className="text-base sm:text-lg text-[#B4B4B6] mb-4 sm:mb-5 lg:pr-28">
            I've spent my career at the intersection of medicine, research, and leadership training the next generation
            of physicians, leading radiology departments, and contributing to groundbreaking research alongside
            collaborators who later went on to a Nobel Prize.
          </p>
          <p className="text-base sm:text-lg text-[#B4B4B6]">
            Along the way, I've seen how fragmented health data keeps patients from realizing their full health
            potential. That's why I founded Cadensa: to unify wearables, labs, and AI-driven insights into one ecosystem for wellness. The goal is to help people live in cadence with their health, so they can truly thrive.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={img}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[465px] h-auto object-cover rounded-lg"
            alt="Dr. Tarak Patel"
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
