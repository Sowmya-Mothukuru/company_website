"use client";

import { motion } from "framer-motion";

// ✅ SAME animation configs
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TeamHeroSection() {
  return (
    <motion.section
      className="
        w-full flex justify-center 
        py-10 sm:py-12 md:py-16 lg:py-[8rem]
        bg-[#F8FBFF] 
        px-4 sm:px-6 lg:px-8 xl:px-0
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      
      <motion.div
        variants={container}
        className="
          flex flex-col lg:flex-row 
          items-center 
          gap-6 sm:gap-8 lg:gap-[1.625rem]
          max-w-[75.4375rem] 
          w-full
        "
      >

        {/* TEXT FIRST ON MOBILE */}
        <motion.div
          variants={fadeUp}
          className="
            w-full max-w-[47.4375rem]
            order-1 lg:order-2
          "
        >
          <p className="
            font-medium
            text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]
            leading-[1.3] md:leading-[1.2] lg:leading-[1]
            text-black
            text-center lg:text-left
            px-2 sm:px-0
          ">
            The minds behind our work are driven by passion and powered by
            collaboration.
          </p>
        </motion.div>

        {/* IMAGE BELOW TEXT ON MOBILE */}
        <motion.div
          variants={fadeUp}
          className="
            w-full 
            max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[26.37rem]
            flex justify-center
            order-2 lg:order-1
          "
        >
          <img
            src="/images/coworking/rafiki.svg"
            alt="Team"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </motion.div>
    </motion.section>
  );
}