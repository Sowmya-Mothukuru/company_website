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

export default function AIStrategySection() {
  return (
    <motion.section
      id="ai-strategy"
      className="w-full flex justify-center py-[70px] md:py-[70px] lg:py-[70px] bg-[#F8FBFF] -mt-[1px]"
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

          {/* ================= MOBILE TITLE ================= */}
          <motion.h2
            variants={fadeUp}
            className="lg:hidden text-[24px] sm:text-[28px] font-semibold text-black text-center w-full"
          >
            AI Strategy, Consulting & Data Foundation
          </motion.h2>

          {/* ================= IMAGE ================= */}
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <Image
              src="/images/artificial-intelligence/amico.svg"
              alt="AI Strategy Illustration"
              width={450}
              height={450}
              priority
              className="w-[300px] sm:w-[360px] lg:w-[450px] h-auto object-contain"
            />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            variants={container}
            className="flex flex-col w-full lg:w-[710px] gap-[30px] lg:gap-[44px] items-center lg:items-start text-center lg:text-left"
          >

            {/* ================= DESKTOP TITLE ================= */}
            <motion.h2
              variants={fadeUp}
              className="hidden lg:block text-[32px] font-semibold text-black"
            >
              AI Strategy, Consulting & Data Foundation
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] lg:text-[18px] text-[#6B7280] leading-[26px] lg:leading-[30px] max-w-[600px] text-left"
            >
              We help organizations define the right AI strategy and prepare their
              data ecosystem for success. From identifying high-impact AI
              opportunities to building scalable data pipelines, we ensure your AI
              initiatives start with a strong, future-ready foundation.
            </motion.p>

            {/* INCLUDES */}
            <motion.div variants={fadeUp} className="w-full">
              <p className="font-medium text-black mb-[10px] lg:mb-[12px] text-left">
                Includes:
              </p>

              <ul className="list-disc pl-5 text-[#6B7280] text-[15px] lg:text-[16px] space-y-[6px] text-left">
                <li>AI Consulting & Strategy</li>
                <li>Data Readiness & Engineering</li>
              </ul>
            </motion.div>

            {/* BUTTON (✅ SMOOTH FIX APPLIED) */}
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