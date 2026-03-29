"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WorkShowcase() {
  return (
    <motion.section
      className="
        relative w-full
        py-[5rem] sm:py-[6rem] md:py-[7rem]
lg:py-[8rem] xl:py-[10rem]
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <img
    src="/icons/our-work-small-bg.svg"
    alt="background"
    className="
      w-full 
      h-full 
      object-cover   // 🔥 KEY FIX
      object-top     // keeps wave aligned from top
      object-bottom
    "
  />
</div>

      {/* CONTENT */}
      <motion.div
        className="
          relative
          max-w-[75rem]
          xl:max-w-[85rem]
          2xl:max-w-[95rem]
          mx-auto

          px-[1rem] sm:px-[1.5rem] lg:px-[2rem] xl:px-[3rem]

          flex flex-col lg:flex-row
          items-center
          gap-[2rem] lg:gap-[3rem]
          pb-[2rem] sm:pb-[3rem] lg:pb-0

          min-h-[300px] sm:min-h-[350px] lg:min-h-[500px]
        "
      >

        {/* ✅ MOBILE IMAGE (TOP) */}
        <motion.div
          variants={fadeUp}
          className="w-full flex justify-center lg:hidden"
        >
          <img
            src="/images/our-work-admin.svg"
            alt="salon app"
            className="
              w-[18rem]
              sm:w-[22rem]
              md:w-[26rem]
              object-contain
            "
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={container}
          className="
            w-full
            lg:w-[45%]
            xl:w-[42%]

            flex flex-col
            gap-[1rem] sm:gap-[1.25rem]

            text-center lg:text-left

            z-10
            lg:-translate-y-[1rem] xl:-translate-y-[2rem]
          "
        >
          <motion.h3
            variants={fadeUp}
            className="
              text-[1.35rem]
              sm:text-[1.6rem]
              md:text-[2rem]
              lg:text-[2.25rem]
              xl:text-[2.5rem]
              2xl:text-[2.75rem]

              font-semibold
              text-[#000000]
              leading-[1.3]
            "
          >
            Smart Salon App - One System. <br />
            Three Perspectives.
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="
              text-[0.9rem]
              sm:text-[1rem]
              md:text-[1.05rem]
              lg:text-[1.1rem]
              xl:text-[1.2rem]

              text-[#5D5D5D]
              leading-[1.6]

              max-w-[100%] sm:max-w-[32rem] lg:max-w-[38rem]
              mx-auto lg:mx-0
            "
          >
            From booking to service delivery to business control, our modular
            system connects users, staff, and owners seamlessly.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="
              w-full max-w-[260px] lg:w-[15.875rem]

              h-[2.75rem] sm:h-[3rem] xl:h-[3.25rem]

              bg-[#334155]
              text-white

              text-[0.85rem] sm:text-[0.9rem] xl:text-[1rem]

              rounded-[1rem]

              flex items-center justify-center

              mx-auto lg:mx-0
              shadow-md
            "
          >
            View More →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ✅ DESKTOP IMAGE (RIGHT EDGE) */}
      <motion.div
        variants={fadeUp}
        className="
          hidden lg:flex
          absolute
          right-0
          top-1/2
          -translate-y-1/2

          w-[50%]
          xl:w-[55%]

          justify-end
          pointer-events-none
        "
      >
        <img
          src="/images/our-work-admin.svg"
          alt="salon app"
          className="
            w-[26rem]
            lg:w-[30rem]
            xl:w-[36rem]
            2xl:w-[42rem]
            object-contain
          "
        />
      </motion.div>
    </motion.section>
  );
}