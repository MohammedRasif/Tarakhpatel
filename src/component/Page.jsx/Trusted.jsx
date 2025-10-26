import { FaStar } from "react-icons/fa";

function Trusted() {
  return (
    <div className="bg-black  py-16">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-white text-[48px] font-medium leading-tight mb-4">
          Trusted by Experts. Built for You.
        </h1>
        <p className="text-gray-300 text-lg">
          Cadensa combines medical expertise with cutting-edge technology to
          make longevity accessible.
        </p>
      </div>

      <div className="flex items-center gap-8 container mx-auto">
        {/* Left side - Doctor profile */}
        <div className="w-2/3">
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3 relative ">
            <div className=" items-start gap-4 relative">
              <div className="items-center justify-start flex space-x-3 pb-2">
                <img
                  src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1761393429/Image_27_tzr9vq.png"
                  className="rounded-full w-10 h-10"
                  alt=""
                />
                <div>
                  <h3 className="text-white font-semibold text-[17px]">
                    Dr. Tarak Patel
                  </h3>
                  <p className="text-gray-400 text-[14px]">
                    Founder & Chief Medical Officer
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Board-certified specialist with 15+ years of clinical and
                  biomarker experience. Passionate about using technology to
                  democratize longevity medicine.
                </p>
              </div>
            </div>
            {/* <div className="absolute text-white flex items-center font-semibold right-0 rounded-tr-lg px-3 py-1 rounded-bl-lg bg-gradient-to-r from-[#00953B] to-[#0068F0] top-0">
              <FaStar />
              1.0
            </div> */}
          </div>
        </div>

        {/* Right side - Advisory board and partnerships */}
        <div className="w-1/3 space-y-6">
          {/* Expert Advisory Board */}
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-white font-semibold">
                Expert Advisory Board
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
             Developed with input from longevity researchers, health-tech innovators, and physicians from leading institutions.
            </p>
          </div>

          {/* Research Partnerships */}
          <div className="bg-neutral-900 border border-green-900 rounded-lg p-3">
            <h3 className="text-white font-semibold mb-3">
              Research Partnerships
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Collaborating with leading longevity research institutions to ensure our platform reflects the latest scientific breakthroughs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
