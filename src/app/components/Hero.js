"use client";

import Navbar from "./Navbar";
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

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-[860px] xl:h-[920px] overflow-hidden bg-[#F8FBFF]"
      variants={container}
      initial="hidden"
      animate="show"   // ✅ hero loads immediately (not scroll-based)
    >

      {/* BACKGROUND */}
      <img
        src="/images/hero-bg.svg"
        alt="hero background"
        className="absolute top-0 left-0 w-full h-[75%] object-cover"
      />

      {/* NAVBAR */}
      <Navbar variant="hero" />

      {/* HERO CONTAINER */}
      <motion.div
        variants={container}
        className="relative max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-start 
        pt-[140px] md:pt-[120px] xl:pt-[180px]"
      >

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          className="
            pl-[24px] sm:pl-[32px] md:pl-[42px]
            pr-[20px] sm:pr-[32px]
            text-white 
            max-w-full md:max-w-[50%]
            text-left md:text-left
          "
        >
          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            className="
              max-w-full sm:max-w-[520px] xl:max-w-[668px]
              text-[28px] 
              sm:text-[34px] 
              md:text-[40px] 
              lg:text-[48px] 
              xl:text-[60px]
              font-[700]
              leading-[130%]
            "
          >
            We Build Scalable AI & Software Systems for Modern Businesses
          </motion.h1>

          {/* BUTTON */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              mt-[24px] md:mt-[30px] xl:mt-[48px]
              w-[180px] sm:w-[220px] xl:w-[254px]
              h-[44px] xl:h-[48px]
              px-[18px]
              rounded-[12px] xl:rounded-[16px]
              bg-white text-[#2F3E4E]
              text-[14px] xl:text-[16px]
              font-[500]
              flex items-center justify-center gap-[10px]
              transition-none
            "
          >
            Lets Talk →
          </motion.button>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex justify-center md:justify-end mt-[40px] md:mt-0 pointer-events-none"
        >
          <img
            src="/images/hero.svg"
            alt="AI hand"
            className="
              w-full max-w-[1400px]
              translate-x-[-10px] translate-y-[-200px] rotate-0 scale-100
              md:scale-[1.25] 
              xl:scale-[1.35] 
              md:translate-x-[-120px]
              xl:translate-x-[-120px]
              md:translate-y-[-40px] 
              xl:translate-y-[-120px] 
              xl:rotate-[-5deg]
            "
          />
        </motion.div>

      </motion.div>
    </motion.section>
  );
}