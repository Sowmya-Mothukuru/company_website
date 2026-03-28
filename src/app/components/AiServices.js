"use client";

import Link from "next/link";
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

export default function AiServices() {

  const services = [
    {
      title: "AI Strategy & Execution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      link: "/ai-services#ai-strategy",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
    {
      title: "Generative & Conversational AI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      link: "/ai-services#generative-ai",
      icon: "/charm_robot.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Advanced Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      link: "/ai-services#advance-analytics",
      icon: "/carbon_analytics.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Intelligent Automation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      link: "/ai-services#automation",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
  ];

  return (
    <motion.section
      className="relative w-full bg-[#F8FBFF] flex justify-center py-[5rem] overflow-hidden mt-[-235px]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* BLOB */}
      <img
        src="/icons/ai-blob.svg"
        alt="background blob"
        className="
          absolute
          top-[-3rem]
          right-[-4rem]
          w-[18rem] sm:w-[22rem] md:w-[24rem] lg:w-[26rem] xl:w-[28.7rem]
          opacity-30
          z-0
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <motion.div
        variants={container}
        className="relative z-10 max-w-[78.5rem] w-full px-6 flex flex-col items-center"
      >

        {/* TITLE */}
        <motion.div variants={fadeUp} className="max-w-[56rem] text-center font-['Space_Grotesk']">

          <h2 className="text-[1.4rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold text-black">
            AI Services
          </h2>

          <p className="mt-6 text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
          leading-[1.3rem] sm:leading-[1.5rem] md:leading-[1.6rem] text-[#5D5D5D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          className="mt-[2.5rem] sm:mt-[3.5rem] md:mt-[4.5rem] w-full flex flex-col gap-6"
        >

          {/* ROW 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[0]} />
            <Card service={services[1]} />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[2]} />
            <Card service={services[3]} />
          </div>

        </motion.div>

        {/* BUTTON */}
        <motion.div
          variants={fadeUp}
          className="mt-[3rem] w-full flex justify-center lg:justify-end"
        >

          <Link href="/ai-services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[12.5rem] md:w-[15rem] h-[3rem] bg-[#334155] text-white rounded-[1rem] flex items-center justify-center gap-2 text-[1rem] md:text-[1.125rem] font-['Space_Grotesk'] hover:opacity-90 transition-none"
            >
              <span>View More</span>
              <span>→</span>
            </motion.button>
          </Link>

        </motion.div>

      </motion.div>

    </motion.section>
  );
}


// 🔹 CARD
function Card({ service }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={service.link} className={`w-full flex justify-center lg:flex-1 ${service.width}`}>
        <div
          className="
          group
          bg-white
          rounded-[1.5rem]
          p-5 sm:p-6 md:p-10
          gap-4 sm:gap-5 md:gap-6
          min-h-[auto]
          sm:min-h-[18rem]
          md:min-h-[20rem]
          flex flex-col
          items-center text-center
          lg:items-start lg:text-left
          h-full
          transition-all duration-300
          hover:bg-[#2E3B4E]
          hover:text-white
          hover:shadow-lg
        "
        >

          {/* ICON */}
          <div className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem]
           bg-[#2E3B4E] rounded-full flex items-center justify-center">
            <img src={service.icon} alt="icon" className="w-[1.5rem] h-[1.5rem] sm:w-[1.75rem] sm:h-[1.75rem] md:w-[2rem] md:h-[2rem]" />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.375rem] lg:text-[1.5rem]
            leading-[1.5rem] sm:leading-[1.7rem] md:leading-[1.875rem] font-semibold">
              {service.title}
            </h3>

            <p className="text-[0.85rem] sm:text-[0.95rem] md:text-[1.125rem]
            leading-[1.4rem] sm:leading-[1.6rem] md:leading-[1.75rem] text-[#5D5D5D] group-hover:text-white">
              {service.description}
            </p>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}