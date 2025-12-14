import React from "react";
import img from "../../image/image1.png";
function SecondSection() {
  return (
    <div className="bg-black container mx-auto py-10 pt-20">
      <div className="lg:flex justify-between  gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 px-5 lg:px-0">
          <h1 className="text-white lg:text-[36px] text-[28px] font-medium leading-tight text-center lg:text-left">
            Your Health Data is Scattered. <br />
            Your path to aging well shouldn’t be..
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 px-5 lg:px-0 mt-6 lg:mt-0">
          <p className="text-gray-300 text-center lg:text-left">
            Most people track their health — steps, sleep, heart rate, labs —
            yet still feel unsure about their long-term direction.
          </p>

          <h5 className="text-[20px] font-semibold text-center lg:text-left mt-3 text-white">
            Cadensa brings it all together.
          </h5>

          <p className="text-gray-300 text-center lg:text-left mt-3">
            We unify your wearables, labs, and daily signals into one
            intelligent system to help you understand your health, optimize your
            habits, and age with clarity and community.
          </p>
        </div>
      </div>

      <img
        src={img}
        className="lg:h-96 h-52 w-full mt-10 object-cover lg:rounded-2xl"
        alt=""
      />
    </div>
  );
}

export default SecondSection;
