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

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#F8FBFF] pt-10 -mt-[2px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* FULL WIDTH BACKGROUND */}
      <div
        className="w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/footer.png')",
        }}
      >

        {/* CONTENT CONTAINER */}
        <motion.div
          variants={container}
          className="max-w-[1298px] mx-auto px-6 lg:px-[72px] pt-[200px] pb-[80px]"
        >

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[60px]">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              className="max-w-[441px] flex flex-col gap-[24px]"
            >

              <h2 className="text-white text-[20px] font-semibold">
                Glitch Brainer
              </h2>

              <p className="hidden md:block text-[#B0B8C1] text-[14px] leading-[22px]">
                We build scalable AI, data, and software solutions that help
                businesses automate, optimize, and grow.
              </p>

              <div className="flex flex-col gap-[8px] text-[#E5E7EB] text-[14px]">
                <div className="flex items-center gap-2">
                  <img src="/icons/tdesign_location.png" className="w-[20px]" />
                  Bengaluru
                </div>

                <div className="flex items-center gap-2">
                  <img src="/icons/proicons_call.png" className="w-[20px]" />
                  +91 98765 43210
                </div>

                <div className="flex items-center gap-2">
                  <img src="/icons/material-symbols-light_mail-outline.png" className="w-[20px]" />
                  hello@Glitchbrainer.com
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <img src="/icons/Group 90.png" className="w-[36px]" />
                <img src="/icons/Group 91.png" className="w-[36px]" />
                <img src="/icons/Group 92.png" className="w-[36px]" />
                <img src="/icons/Group 93.png" className="w-[36px]" />
              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={container}
              className="flex flex-col sm:flex-row gap-[80px]"
            >

              <motion.div variants={fadeUp} className="flex flex-col gap-[20px]">
                <h3 className="text-white text-[20px] font-semibold">
                  Site Map
                </h3>

                <ul className="flex flex-col gap-[14px] text-[#E5E7EB] text-[16px]">
                  <li>AI Services</li>
                  <li>Software Services</li>
                  <li>Industries We Serve</li>
                  <li>Team</li>
                  <li>Contact Us</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-[20px]">
                <h3 className="text-white text-[20px] font-semibold">
                  Legal
                </h3>

                <ul className="flex flex-col gap-[14px] text-[#E5E7EB] text-[16px]">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </motion.div>

            </motion.div>

          </div>

        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={fadeUp}
          className="w-full text-white text-center py-3 text-[13px] text-gray-600"
        >
          © Glitch Brainer 2025. All Rights Reserved
        </motion.div>

      </div>

    </motion.footer>
  );
}