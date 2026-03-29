"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function WorkCTA() {
  return (
    <motion.section
      className="
        relative w-full overflow-hidden bg-[#F8FBFF]
    mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[5rem]
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* BACKGROUND SVG */}
      <img
        src="/icons/our-work-bottom-bg.svg"
        alt="background"
     className="
  absolute top-0 left-0 
  w-full h-full 
  object-cover sm:object-contain
  opacity-90
  pointer-events-none
"
      />

      {/* CONTENT */}
      <motion.div
        className="
        relative 
        max-w-[83rem]
        xl:max-w-[90rem]
        2xl:max-w-[100rem]
        mx-auto 

        px-[1.25rem] sm:px-[1.5rem] lg:px-[2rem] xl:px-[3rem]

        pt-[4rem] sm:pt-[5rem] md:pt-[6rem] lg:pt-[7rem] xl:pt-[8rem]
        pb-[4rem] sm:pb-[5rem] md:pb-[5.5rem] lg:pb-[6rem] xl:pb-[7rem]

        flex 
        flex-col 
        items-center 
        text-center
      "
        variants={container}
      >

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="
          text-[1.5rem] 
          sm:text-[1.6rem]
          md:text-[2.25rem] 
          lg:text-[2.75rem]
          xl:text-[3rem]
          2xl:text-[3.25rem]

          font-medium 
          text-[#334155]
          leading-[1.25]

          max-w-[95%] sm:max-w-[60rem] xl:max-w-[70rem]
        "
        >
          Got an Idea in Mind? Let’s Build It Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="
          mt-[1rem]

          text-[0.95rem]
          sm:text-[1rem]
          md:text-[1.125rem] 
          lg:text-[1.25rem]
          xl:text-[1.5rem]

          text-[#334155]
          leading-[1.2]

          max-w-[92%] sm:max-w-[50rem] xl:max-w-[65rem]
        "
        >
          We turn bold ideas into powerful digital products. 
          Whether it’s a spark or a full vision—our team is ready to bring it to life.
        </motion.p>

        {/* ARROW + BUTTON */}
        <motion.div
          variants={fadeUp}
          className="
            mt-[2.5rem] 
            relative flex items-center justify-center w-full
          "
        >
     <img
  src="/icons/our-work-arrow-bottom.svg"
  alt="arrow"
  className="
    absolute

    // 📱 MOBILE → right side + flipped + rotated
    right-[-1rem]
    top-[-3.5rem]
    scale-x-[-1]
    rotate-[-35deg]

    // 📲 TABLET → reset rotation + flip
    md:left-[10rem]
    md:right-auto
    md:top-[-1rem]
    md:scale-x-100
    md:rotate-12

    // 💻 DESKTOP
    lg:left-[20rem]
    lg:top-[-1rem]

    // 🖥 XL
    xl:left-[30rem]
    xl:top-[-1.25rem]

    w-[3rem]
    sm:w-[3.5rem]
    md:w-[4rem]
    xl:w-[5rem]
  "
/>

          {/* BUTTON */}
          <Link href="/contact-us#contact-us" className="w-full flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                w-full max-w-[320px] sm:w-[12rem] 
                h-[2.75rem] 
                xl:w-[14rem] 
                xl:h-[3rem]

                bg-[#334155] 
                text-white 
                text-[0.9rem]
                xl:text-[1rem]

                rounded-[0.75rem]
                shadow-md
              "
            >
              Contact-Us
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}