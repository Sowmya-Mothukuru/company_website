"use client";

import React from "react";
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

const CloudEng = () => {
  return (
    <motion.section
      id="cloud-eng"
      className="w-full bg-[#F8FBFF] flex justify-center 
      py-[80px] md:py-[120px] lg:py-[120px] px-[1.5rem] -mt-[2px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[78.6875rem]">

        {/* ================= MOBILE ================= */}
        <motion.div
          variants={container}
          className="flex flex-col lg:hidden items-center gap-[28px]"
        >

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            className="text-[22px] sm:text-[26px] font-bold text-black text-center"
          >
            Cloud Engineering, DevOps & System Integration
          </motion.h2>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative bg-[#334155] rounded-[20px] w-[340px] h-[340px] flex items-center justify-center"
          >
            <img
              src="/images/uploading/rafiki.svg"
              alt="Cloud Engineering"
              className="w-[260px] sm:w-[270px] object-contain"
            />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="text-[14px] sm:text-[15px] text-[#969696] leading-[24px] text-left"
          >
            We build cloud-native, scalable infrastructures and ensure seamless 
            integration between systems. Our DevOps-driven approach enables faster deployments, 
            higher reliability, and secure API-driven connectivity across platforms.
          </motion.p>

          {/* INCLUDES */}
          <motion.div variants={fadeUp} className="w-full">
            <h3 className="font-semibold text-[16px] text-black mb-[10px]">
              Includes:
            </h3>

            <ul className="text-[#969696] text-[14px] space-y-[6px]">
              <li>• AI-Powered Automation</li>
              <li>• Intelligent Automation & Decision Systems</li>
            </ul>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-2"
          >
            Let's Talk →
          </motion.button>

        </motion.div>

        {/* ================= DESKTOP ================= */}
        <motion.div
          variants={container}
          className="hidden lg:flex items-center gap-[5.125rem]"
        >

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative flex-shrink-0 bg-[#334155] rounded-[1.5rem] w-[27.375rem] h-[27.125rem]"
          >
            <img
              src="/images/uploading/rafiki.svg"
              alt="Cloud Engineering"
              className="absolute object-contain w-[20.13rem] h-[15.76rem] top-[5.68rem] left-[3.62rem]"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={container}
            className="flex flex-col gap-[2.75rem] max-w-[46rem] w-full"
          >

            <motion.h2
              variants={fadeUp}
              className="text-[2rem] font-bold leading-[3rem] text-black"
            >
              Cloud Engineering, DevOps & System Integration
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[1.25rem] text-[#969696] leading-[1.875rem]"
            >
              We build cloud-native, scalable infrastructures and ensure seamless 
              integration between systems. Our DevOps-driven approach enables faster deployments, 
              higher reliability, and secure API-driven connectivity across platforms.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-[1.75rem] max-w-[27.75rem]"
            >
              <h3 className="font-semibold text-[1.25rem] text-black">
                Includes:
              </h3>

              <ul className="flex flex-col gap-[0.625rem] text-[#969696] text-[1.125rem]">
                <li className="flex items-center gap-[0.5rem]">
                  <span>•</span> AI-Powered Automation
                </li>
                <li className="flex items-center gap-[0.5rem]">
                  <span>•</span> Intelligent Automation & Decision Systems
                </li>
              </ul>
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center justify-center gap-[0.625rem] w-[14rem] h-[3rem] px-[1.125rem] rounded-[1rem] bg-[#334155] text-white text-[1rem] hover:opacity-90 transition-none"
            >
              Let's Talk →
            </motion.button>

          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default CloudEng;