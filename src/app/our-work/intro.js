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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurWorkHero() {
  return (
    <motion.section
      className="relative w-full bg-[#F8FBFF] overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* CONTAINER */}
      <motion.div
        className="
        relative 
        max-w-[75rem]
        xl:max-w-[85rem] 
        2xl:max-w-[95rem]
        mx-auto 
        px-[1rem] sm:px-[1.5rem] 
        pt-[2rem] sm:pt-[1rem]
        pb-[4rem] sm:pb-[5rem]

        flex 
        flex-col 
        lg:flex-row 
        items-center 
        justify-between 
        gap-[2rem] lg:gap-[3rem]
      "
        variants={container}
      >

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          className="
            w-full lg:w-[40%] flex justify-center
            order-2 lg:order-1
          "
        >
          <img
            src="/images/our-work-intro.svg"
            alt="work illustration"
            className="
              w-[14rem] 
              sm:w-[18rem]
              md:w-[25rem] 
              lg:w-[28rem] 
              xl:w-[30rem]
              object-contain
            "
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={container}
          className="
            w-full lg:w-[55%] 
            text-center lg:text-left
            order-1 lg:order-2
          "
        >

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="
              text-[1.3rem]
              sm:text-[1.6rem]
              md:text-[2.25rem]
              lg:text-[2.625rem]
              xl:text-[3rem]

              font-semibold 
              text-[#334155] 
              leading-[1.4]

              px-[0.5rem] sm:px-0
            "
          >
            We translate vision into code, <br />
            and complexity into clarity. <br />
            This is where meaningful <br />
            technology takes shape.
          </motion.h1>

          {/* DESKTOP QUOTE (unchanged) */}
          <motion.div
            variants={fadeUp}
            className="mt-[1.5rem] hidden lg:flex justify-start"
          >
            <div
              className="
                relative 
                w-[36rem] 
                xl:w-[40rem]
              "
            >
              <img
                src="/icons/Subtract.svg"
                alt="quote background"
                className="w-full h-auto"
              />

              <p
                className="
                  absolute 
                  inset-0 
                  flex 
                  items-center 
                  justify-center 
                  text-center 
                  text-white 

                  text-[0.875rem]
                  px-[1rem]
                  leading-[1.4]
                "
              >
                "Great design is not just what looks good, it's what works
                perfectly for everyone involved."
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* MOBILE QUOTE (new) */}
        <motion.div
          variants={fadeUp}
          className="
            w-full
            mt-[1rem]
            flex justify-center
            order-3
            lg:hidden
          "
        >
          <div
            className="
              relative 
              w-full
              max-w-[22rem]
              sm:max-w-[26rem]
            "
          >
            <img
              src="/icons/Subtract.svg"
              alt="quote background"
              className="w-full h-auto"
            />

            <p
              className="
                absolute inset-0 
                flex items-center justify-center 
                text-center text-white 

                text-[0.7rem]
                sm:text-[0.75rem]

                px-[1rem]
                leading-[1.5]
              "
            >
              "Great design is not just what looks good, it's what works perfectly for everyone involved."
            </p>
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}