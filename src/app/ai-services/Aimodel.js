"use client";

import Image from "next/image";
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

export default function AiModel() {
  return (
    <motion.section
      id="ai-model"
      className="w-full flex justify-center py-[70px] md:py-[70px] lg:py-[70px] bg-[#F8FBFF] -mt-[2px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[1269px] px-6">

        <motion.div
          variants={container}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-[30px] lg:gap-[109px]"
        >

          {/* 🔹 MOBILE TITLE */}
          <motion.h2
            variants={fadeUp}
            className="lg:hidden text-[22px] sm:text-[26px] font-semibold text-black text-center w-full"
          >
            AI Model Development, Deployment & Lifecycle Management
          </motion.h2>

          {/* 🔹 IMAGE */}
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <Image
              src="/images/report/amico.svg"
              alt="AI Model Illustration"
              width={450}
              height={450}
              priority
              className="w-[340px] sm:w-[400px] lg:w-[450px] h-auto object-contain"
            />
          </motion.div>

          {/* 🔹 CONTENT */}
          <motion.div
            variants={container}
            className="flex flex-col w-full lg:w-[710px] gap-[30px] lg:gap-[44px] items-center lg:items-start text-center lg:text-left"
          >

            {/* 🔹 DESKTOP TITLE */}
            <motion.h2
              variants={fadeUp}
              className="hidden lg:block text-[32px] font-semibold text-black"
            >
              AI Model Development, Deployment & Lifecycle Management
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-[14px] sm:text-[15px] lg:text-[18px] text-[#6B7280] leading-[24px] lg:leading-[30px] max-w-[600px] text-left"
            >
              We design, train, deploy, and manage robust AI/ML models tailored to your business needs.
              Our end-to-end approach ensures seamless integration, scalable deployment, 
              and continuous monitoring to keep models accurate, secure, and reliable over time.
            </motion.p>

            {/* INCLUDES */}
            <motion.div variants={fadeUp} className="w-full">
              <p className="font-medium text-black mb-[10px] lg:mb-[12px] text-left">
                Includes:
              </p>

              <ul className="list-disc pl-5 text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px] space-y-[6px] text-left">
                <li>Model Development & Training</li>
                <li>Deployment & System Integration</li>
                <li>Maintenance, Monitoring & Continuous Improvement</li>
              </ul>
            </motion.div>

            {/* BUTTON (✅ SMOOTH FIX) */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full lg:w-[180px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-2 transition-none hover:opacity-90"
            >
              Let’s Talk →
            </motion.button>

          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
}