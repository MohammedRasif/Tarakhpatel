"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import img1 from "../../image/Frame 1707483021.png";
import img2 from "../../image/Frame 1707483021 (1).png";
import img3 from "../../image/Frame 1707483021 (2).png";
import img4 from "../../image/Frame 1707483021 (3).png";
import img5 from "../../image/Frame 1707483021 (4).png";
import img6 from "../../image/Frame 1707483021 (5).png";

const projects = [
  {
    title: "Project 1",
    src: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-4.jpg",
  },
  {
    title: "Project 2",
    src: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-5.jpg",
  },
  {
    title: "Project 3",
    src: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-3.jpg",
  },
  {
    title: "Project 4",
    src: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529180/cld-sample-2.jpg",
  },
  {
    title: "Project 5",
    src: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1737529179/samples/dessert-on-a-plate.jpg",
  },
];

const StickyCard_001 = ({ i, title, src, progress, range, targetScale }) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-[300px] w-[500px] origin-top flex-col overflow-hidden"
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[10vh]"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
            scroll down to see card stack
          </span>
        </div>
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
    <div>
      <Skiper16 />
    </div>
  );
}

export default WhyChoice;
