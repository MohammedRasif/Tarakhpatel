"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
// Local image imports - make sure the paths are correct
import img1 from "../../image/Frame 1707483021.png";
import img2 from "../../image/Frame 1707483021 (1).png";
import img3 from "../../image/Frame 1707483021 (2).png";
import img4 from "../../image/Frame 1707483021 (3).png";
import img5 from "../../image/Frame 1707483021 (4).png";
import img6 from "../../image/Frame 1707483021 (5).png";

const projects = [
  {
    title: "Personalized Not Generic",
    description:
      "Tailored recommendations based on your unique health profile and goals.",
    buttonText: "Learn More",

    src: img1,
  },
  {
    title: "Cutting-Edge Science",
    description:
      "Leveraging the latest research and advancements in health and longevity.",
    buttonText: "Discover More",
    src: img2,
  },
  {
    title: "Holistic Approach",
    description:
      "Addressing all aspects of your well-being, from diet to mind-body connection.",
    buttonText: "Explore Options",
    src: img3,
  },
  {
    title: "Expert Guidance",
    description:
      "Benefit from the wisdom and support of our experienced health professionals.",
    buttonText: "Meet Our Team",
    src: img4,
  },
  {
    title: "Community & Support",
    description:
      "Join a vibrant community on a shared journey towards a healthier future.",
    buttonText: "Join Now",
    src: img5,
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
  description,
  buttonText,
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center w-full min-h-screen py-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 0 + 150}px)`,
        }}
        className="relative h-[400px] w-full max-w-[1500px] mx-auto rounded-4xl overflow-hidden  "
      >
        {/* Background Image */}
        <img
          src={src}
          alt={title}
          className="absolute  h-full w-full object-cover"
        />

        {/* Overlay for darkening and gradient */}
        <div className="absolute "></div>

        {/* Text Content - Absolutely positioned on the left */}
        <div className="absolute inset-y-0 left-0 p-8 text-white flex flex-col justify-center max-w-lg">
          {" "}
          {/* max-w-lg to control text width */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            {description}
          </p>
          <button className="self-start px-6 py-3 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300">
            {buttonText}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start center", "end center"], // This defines the scroll range relative to the viewport center
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[10vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

function WhyChoice() {
  return (
    <div className="">
      <div className=" w-full flex justify-center items-center">
        <div className="py-8 sm:py-10 w-full max-w-xl px-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
            Why Choose Cadensa?
          </h1>
          <p className="text-base sm:text-lg text-gray-300 pt-5">
            Because longevity is more than years lived—it's energy, clarity, and
            vitality every day.
          </p>
        </div>
      </div>
      <div className="-my-96">
        <Skiper16 />
      </div>
    </div>
  );
}

export default WhyChoice;
