"use client";

import { motion } from "framer-motion";

const features = [
  "The Cadensa Score: your personal 0–100 healthspan index",
  "Unified insights from your wearables and labs",
  "Intelligent, adaptive guidance",
  "Clear guidance to help you age stronger and healthier",
  "Community moving in cadence toward better longevity.",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Healthspan() {
  return (
    <div className="bg-black py-24 px-4">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" mb-16"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6">
            A new way to understand — and improve your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00953B] to-[#0068F0]">
              healthspan
            </span>
            .
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start gap-4 bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#00953B] to-[#0068F0] mt-3" />
              <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 text-base sm:text-lg">
            Your full experience unlocks in January. Join now to gain early
            access.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
