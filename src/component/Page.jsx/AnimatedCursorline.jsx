import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Database, FileText, BarChart3 } from "lucide-react";

export default function AnimatedCurveLine() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInViewRef.current) {
          isInViewRef.current = true;
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 3,
        delay: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div ref={ref} className="relative w-full -mt-[70vh] h-[80vh]">
      <svg
        className="absolute inset-0 w-full h-full overflow-hidden"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Path */}
        <motion.path
          d="M 0 240 Q 200 120, 400 180 T 800 80"
          stroke="#2B466B" // Changed stroke color here
          strokeWidth="5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={controls}
        />

        {/* Moving Dot Animation */}
        <motion.circle
          r="6"
          fill="#ffffff"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
        >
          <animateMotion dur="3s" begin="2.5s" repeatCount="indefinite">
            <mpath href="#curve-path" />
          </animateMotion>
        </motion.circle>

        {/* Hidden path for motion */}
        <path
          id="curve-path"
          d="M 0 240 Q 200 120, 400 180 T 800 80"
          fill="none"
          opacity="0"
        />
      </svg>
    </div>
  );
}