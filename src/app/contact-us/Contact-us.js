/*"use client";
import Image from "next/image";
export default function Address() {
  return (
    <section className="relative w-full flex justify-center py-16 bg-[#F8FBFF]">
      <div
        className="
          relative 
          w-full 
          max-w-[1441px] 

          h-[600px]
          md:h-[700px]
          lg:h-[788px]

          px-4 md:px-6 lg:px-0
        "
      >

        <Image
          src="/images/contact.svg"
          alt="background"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-[500] text-[#000000]">
            How to Reach Us
          </h2>
          <div
            className="
              flex flex-col 
              md:flex-row 
              items-center 

              gap-10 
              md:gap-16 
              lg:gap-24 

              mt-10 md:mt-12
            "
          >
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/Address.svg"
                  alt="Location"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">Location</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                2464 Royal Ln, Mesa, New Jersey 45463
              </p>
            </div>
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/phone.svg"
                  alt="Phone"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">Phone Number</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                +91 98765 43210
              </p>
            </div>
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/Email.svg"
                  alt="Email"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">E-mail</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                hello@glitchbrainer.com
              </p>
            </div>

          </div>
          <div className="mt-10 md:mt-12">
            <p className="text-[#2F3E4E] font-medium mb-4">Follow Us</p>

            <div className="flex gap-4 justify-center flex-wrap">
              <img src="/icons/FaceBook.svg" className="w-10 h-10" />
              <img src="/icons/Instagram.svg" className="w-10 h-10" />
              <img src="/icons/X.svg" className="w-10 h-10" />
              <img src="/icons/Linkindin.svg" className="w-10 h-10" />
            </div>
          </div>

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

export default function Address() {
  return (
    <motion.section
      className="
        relative w-full flex justify-center
        py-10 sm:py-12 md:py-16
        bg-[#F8FBFF]
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* BACKGROUND FRAME */}
      <motion.div
        variants={fadeUp}
        className="
          relative 
          w-full 
          max-w-[95%] sm:max-w-[92%]
          md:max-w-[1441px]
          min-h-[800px] sm:min-h-[900px] md:min-h-[700px] lg:min-h-[788px] 
          px-4 sm:px-6 md:px-6 lg:px-0
        "
      >

        <Image
          src="/images/contact.svg"
          alt="background"
          fill
          className="object-cover"
          priority
        />

        {/* CONTENT */}
        <motion.div
          variants={container}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6"
        >

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            className="
              text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]
              font-[500] text-[#000000]
            "
          >
            How to Reach Us
          </motion.h2>

          {/* CONTACT ITEMS */}
          <motion.div
            variants={container}
            className="
              flex flex-col 
              md:flex-row 
              items-center 
              gap-8 sm:gap-10 md:gap-16 lg:gap-24
              mt-8 sm:mt-10 md:mt-12
            "
          >

            {/* LOCATION */}
            <motion.div variants={fadeUp} className="flex flex-col items-center max-w-[220px] sm:max-w-[200px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img src="/icons/Address.svg" alt="Location" className="w-5 h-5 sm:w-6 sm:h-6 invert brightness-0" />
              </div>
              <p className="mt-3 sm:mt-4 font-semibold text-[#2F3E4E] text-[14px] sm:text-[16px]">
                Location
              </p>
              <p className="text-[13px] sm:text-sm text-gray-600 mt-1 text-center">
                2464 Royal Ln, Mesa, New Jersey 45463
              </p>
            </motion.div>

            {/* PHONE */}
            <motion.div variants={fadeUp} className="flex flex-col items-center max-w-[220px] sm:max-w-[200px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img src="/icons/phone.svg" alt="Phone" className="w-5 h-5 sm:w-6 sm:h-6 invert brightness-0" />
              </div>
              <p className="mt-3 sm:mt-4 font-semibold text-[#2F3E4E] text-[14px] sm:text-[16px]">
                Phone Number
              </p>
              <p className="text-[13px] sm:text-sm text-gray-600 mt-1 text-center">
                +91 98765 43210
              </p>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={fadeUp} className="flex flex-col items-center max-w-[220px] sm:max-w-[200px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img src="/icons/Email.svg" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6 invert brightness-0" />
              </div>
              <p className="mt-3 sm:mt-4 font-semibold text-[#2F3E4E] text-[14px] sm:text-[16px]">
                E-mail
              </p>
              <p className="text-[13px] sm:text-sm text-gray-600 mt-1 text-center break-words">
                hello@glitchbrainer.com
              </p>
            </motion.div>

          </motion.div>

          {/* SOCIAL */}
          <motion.div variants={fadeUp} className="mt-8 sm:mt-10 md:mt-12">
            <p className="text-[#2F3E4E] font-medium mb-3 sm:mb-4 text-[14px] sm:text-[16px]">
              Follow Us
            </p>

            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <img src="/icons/FaceBook.svg" className="w-8 h-8 sm:w-10 sm:h-10" />
              <img src="/icons/Instagram.svg" className="w-8 h-8 sm:w-10 sm:h-10" />
              <img src="/icons/X.svg" className="w-8 h-8 sm:w-10 sm:h-10" />
              <img src="/icons/Linkindin.svg" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.section>
  );
}