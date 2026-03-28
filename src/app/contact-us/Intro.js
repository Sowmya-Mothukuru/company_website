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

export default function ContactUs() {
  return (
    <motion.section
      className="
        relative w-full bg-[#F8FBFF] flex items-center justify-center
        py-8 sm:py-10 md:py-12 lg:py-16
        overflow-hidden
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* 🔷 MAIN CARD */}
      <motion.div
        variants={fadeUp}
        className="
          relative z-10
          w-full 
          max-w-[92%] sm:max-w-[90%]
          md:max-w-[1000px] 
          lg:max-w-[1100px] 
          xl:max-w-[1200px] 
          2xl:max-w-[1300px]
          aspect-[1016/617]
          min-h-[220px] sm:min-h-[260px]
        "
      >

        {/* ICON BACKGROUND */}
        <Image
          src="/images/contact-intro.svg"
          alt="icons"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* DOTTED PATH */}
        <Image
          src="/icons/Group 266.svg"
          alt="path"
          fill
          className="
            object-contain 
            scale-[0.8] sm:scale-[0.9] md:scale-100 lg:scale-130
            pointer-events-none
          "
        />

        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-10"
        >
          <p
            className="
              font-semibold text-[#334155]
              leading-[120%]
              text-[clamp(18px,5vw,48px)]
              max-w-[90%] sm:max-w-[80%] md:max-w-[70%]
            "
          >
            Every great collaboration starts with a conversation.
          </p>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}