/*import Image from "next/image";

export default function SalonLanding() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] xl:gap-[60px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] 
      xl:px-[73px] py-[60px]">
        <div className="w-full lg:max-w-[600px] xl:max-w-[671px] flex flex-col gap-[38px]">

          <h1 className="w-full xl:max-w-[656px] text-2xl lg:text-3xl xl:text-4xl font-bold leading-[100%]">
            Smart Salon App - One System. Three Perspectives.
          </h1>

          <p className="text-lg lg:text-xl font-medium leading-[100%]">
            From booking to service delivery to business control, our modular system
            connects users, staff, and owners seamlessly.
          </p>

          <a href="#" className="flex items-center gap-[6px] text-lg lg:text-xl whitespace-nowrap">
            <Image
              src="/images/arrow.jpg"
              alt="arrow"
              width={24}
              height={24}
            />

            <span>Want to build something like this?</span>

            <span className="font-semibold underline">
              Let&apos;s Talk
            </span>
          </a>

        </div>
        <div className="relative w-full lg:max-w-[600px] xl:max-w-[739px] aspect-[739/544]">
          <Image
            src="/images/Group 96.jpg"
            alt="Salon App"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}*/
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

export default function SalonLanding() {
  return (
    <motion.section
      className="w-full bg-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* CONTAINER */}
      <motion.div
        variants={container}
        className="
          w-full max-w-[1440px] mx-auto 
          flex flex-col lg:flex-row 
          items-center justify-between 
          gap-10 lg:gap-[40px] xl:gap-[60px] 
          px-5 sm:px-6 md:px-10 lg:px-[60px] xl:px-[73px] 
          py-12 sm:py-14 md:py-16 lg:py-[60px]
        "
      >

        {/* 🔽 IMAGE FIRST ON MOBILE */}
        <motion.div
          variants={fadeUp}
          className="
            relative w-full 
            max-w-[320px] sm:max-w-[420px] md:max-w-[500px] 
            lg:max-w-[600px] xl:max-w-[739px] 
            aspect-[739/544]
            order-1 lg:order-2
          "
        >
          <Image
            src="/images/Group 96.jpg"
            alt="Salon App"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* 🔽 CONTENT */}
        <motion.div
          variants={container}
          className="
            w-full lg:max-w-[600px] xl:max-w-[671px] 
            flex flex-col 
            items-center lg:items-start
            text-center lg:text-left
            gap-6 sm:gap-7 md:gap-8 lg:gap-[38px]
            order-2 lg:order-1
          "
        >

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="
              text-xl sm:text-2xl md:text-3xl xl:text-4xl 
              font-bold leading-tight
              max-w-[90%] lg:max-w-full
            "
          >
            Smart Salon App - One System. Three Perspectives.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="
              text-sm sm:text-base md:text-lg lg:text-xl 
              font-medium leading-relaxed
              text-gray-600
              max-w-[95%] lg:max-w-full
            "
          >
            From booking to service delivery to business control, our modular system
            connects users, staff, and owners seamlessly.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href="#"
            className="
              flex flex-col sm:flex-row 
              items-center 
              gap-2 sm:gap-2.5 
              text-sm sm:text-base lg:text-lg 
              text-center lg:text-left
            "
          >
            <div className="flex items-center gap-2">
              <Image
                src="/images/arrow.jpg"
                alt="arrow"
                width={20}
                height={20}
              />
              <span>Want to build something like this?</span>
            </div>

            <span className="font-semibold underline">
              Let&apos;s Talk
            </span>
          </motion.a>

        </motion.div>

      </motion.div>
    </motion.section>
  );
}