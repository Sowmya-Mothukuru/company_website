/*export default function TeamIntroSection() {
  return (
    <section className="w-full flex justify-center py-[10rem] bg-[#F8FBFF] px-6 lg:px-8 xl:px-0">
      <div className="flex flex-col items-center gap-[1.75rem] max-w-[50.0625rem] w-full text-center">
        <h2 className="
        font-spaceGrotesk 
        font-bold 
        text-[2rem] 
        lg:text-[2.25rem] 
        xl:text-[2.5rem] 
        leading-[1] 
        tracking-normal
        ">
          People Who Make It Happen
        </h2>
        <p className="
        font-spaceGrotesk 
        font-normal 
        text-[1.125rem] 
        lg:text-[1.25rem] 
        leading-[1.4] 
        tracking-normal
        max-w-[50.0625rem]
        ">
          A diverse group of professionals working together to deliver reliable
          digital solutions for businesses.
        </p>

      </div>

    </section>
  );
}*/
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

export default function TeamIntroSection() {
  return (
    <motion.section
      className="
        w-full flex justify-center 
        py-12 sm:py-14 md:py-16 lg:py-[10rem]
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
          flex flex-col items-center 
          gap-4 sm:gap-5 md:gap-6 lg:gap-[1.75rem]
          max-w-[50.0625rem] 
          w-full 
          text-center
        "
      >

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="
            font-spaceGrotesk 
            font-bold 
            text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]
            leading-[1.2] md:leading-[1.1] lg:leading-[1]
            tracking-normal
            px-2 sm:px-0
          "
        >
          People Who Make It Happen
        </motion.h2>

        {/* PARAGRAPH */}
        <motion.p
          variants={fadeUp}
          className="
            font-spaceGrotesk 
            font-normal 
            text-[0.95rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
            leading-[1.6] md:leading-[1.5] lg:leading-[1.4]
            tracking-normal
            max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50.0625rem]
          "
        >
          A diverse group of professionals working together to deliver reliable
          digital solutions for businesses.
        </motion.p>

      </motion.div>
    </motion.section>
  );
}