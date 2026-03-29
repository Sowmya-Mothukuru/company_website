/*import React from "react";
const ContactCard = () => {
  return (
<div className="w-full relative bg-[#F8FBFF]">
    <div className="max-w-[1257px] mx-auto w-full px-6 flex flex-col items-center
     pt-[80px] gap-[40px] relative z-10">

        <header className="text-center mb-16 max-w-[722px] w-full">
          <h1 className="text-[36px] font-bold text-black mb-6 tracking-tight">
            Let's Build Together
          </h1>

          <p className="text-[#5D5D5D] text-[20px]">
            Tell us about your idea, product, or challenge
          </p>
        </header>
<div
  className="
    relative
    w-full
     z-10 
    bg-white
    rounded-[15px]
    shadow-sm
    px-6 md:px-12 lg:px-[120px]
    max-h-[850px]
    py-8 md:py-10 lg:py-12
  "
>
 <div className="relative z-10">
 <h2 className="text-[28px] font-bold text-black mb-4">
   Drop us a line!
</h2>
<div className="flex flex-col lg:flex-row gap-10 md:gap-14 gap-10 md:gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-6">
           <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300
                   placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <p className="text-gray-800 font-medium whitespace-nowrap">
                or send us an email to{" "}
                <span className="font-bold">info@glichbrainer.com</span>
              </p>

            </div>
            <div className="flex-1 flex flex-col gap-6">

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Message
                </label>

                <textarea
                  placeholder="Type something if you want..."
                  className="w-full h-[124px] px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                />
              </div>

              <p className="text-[20px] text-gray-800 leading-snug">
                By submitting this, I confirm that I have read and understood the{" "}
                <a
                  href="#"
                  className="underline font-bold hover:text-blue-700 transition-colors"
                >
                  Privacy Policy.
                </a>
              </p>

              <button
                className="w-full h-[48px] flex items-center justify-center gap-[10px]
                px-[18px] rounded-[16px] bg-[#2F3E4E] text-white font-semibold
                hover:bg-[#1f2933] transition-all shadow-md active:scale-[0.98]"
              >
                Send Me Message
              </button>

            </div>
     
             </div>
        </div>
      </div>
      
      </div>
      </div>

  );
};
export default ContactCard;*/
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

const ContactCard = () => {
  return (
    <motion.div
      className="w-full relative bg-[#F8FBFF]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* MAIN OUTER CONTAINER */}
      <motion.div
        variants={container}
        id="contact-us"
        className="
          max-w-[1257px] mx-auto w-full 
          px-4 sm:px-6
          flex flex-col items-center
          pt-[60px] sm:pt-[80px]
          gap-[32px] sm:gap-[40px]
          relative z-10
        "
      >

        {/* HEADER */}
        <motion.header
          variants={fadeUp}
          className="text-center mb-10 sm:mb-16 max-w-[722px] w-full"
        >
          <h1 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Let's Build Together
          </h1>

          <p className="text-[#5D5D5D] text-[16px] sm:text-[18px] md:text-[20px]">
            Tell us about your idea, product, or challenge
          </p>
        </motion.header>

        {/* CARD */}
        <motion.div
          variants={fadeUp}
          className="
            relative w-full z-10 bg-white
            rounded-[12px] sm:rounded-[15px]
            shadow-sm
            px-4 sm:px-6 md:px-12 lg:px-[120px]
            py-6 sm:py-8 md:py-10 lg:py-12
            max-h-none
          "
        >

          <motion.div variants={container} className="relative z-10">

            <motion.h2
              variants={fadeUp}
              className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-black mb-4"
            >
              Drop us a line!
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16">

              {/* LEFT */}
              <motion.div
                variants={container}
                className="flex-1 flex flex-col gap-5 sm:gap-6"
              >

                {["Your Name", "Your Email", "Your Phone Number"].map((label, i) => (
                  <motion.div key={i} variants={fadeUp} className="space-y-2">
                    <label className="block text-[13px] sm:text-sm font-bold text-gray-800">
                      {label}
                    </label>

                    <input
                      type="text"
                      placeholder={label.split(" ")[1] || label}
                      className="w-full h-[52px] sm:h-[58px] md:h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </motion.div>
                ))}

                <motion.p
                  variants={fadeUp}
                  className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-800 font-medium break-words"
                >
                  or send us an email to{" "}
                  <span className="font-bold">info@glichbrainer.com</span>
                </motion.p>

              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={container}
                className="flex-1 flex flex-col gap-5 sm:gap-6"
              >

                <motion.div variants={fadeUp} className="space-y-2">
                  <label className="block text-[13px] sm:text-sm font-bold text-gray-800">
                    Your Message
                  </label>

                  <textarea
                    placeholder="Type something if you want..."
                    className="w-full h-[100px] sm:h-[110px] md:h-[124px] px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                  />
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-800 leading-snug"
                >
                  By submitting this, I confirm that I have read and understood the{" "}
                  <a
                    href="#"
                    className="underline font-bold hover:text-blue-700 transition-colors"
                  >
                    Privacy Policy.
                  </a>
                </motion.p>

                {/* BUTTON */}
                <motion.button
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    w-full h-[44px] sm:h-[46px] md:h-[48px]
                    flex items-center justify-center gap-[10px]
                    px-[18px] rounded-[14px] sm:rounded-[16px]
                    bg-[#2F3E4E] text-white font-semibold
                    hover:bg-[#1f2933] transition-none shadow-md
                    text-[14px] sm:text-[15px] md:text-[16px]
                  "
                >
                  Send Me Message
                </motion.button>

              </motion.div>

            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default ContactCard;