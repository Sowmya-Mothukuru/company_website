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

export default function SoftwareServices() {
  const smallCards = [
    {
      title: "Software Development",
      description: "Custom software crafted for performance and scale",
      link: "/services#software-development",
      image: "/rafiki.svg",
      dark: false,
    },
    {
      title: "Product Engineering & MVPs",
      description: "Convert data into actionable insights",
      link: "/services#product-eng",
      image: "/bro.svg",
      dark: false,
    },
    {
      title: "Cloud Engineering, DevOps",
      description: "Optimize your infrastructure with our cloud engineering and DevOps solutions.",
      link: "/services#cloud-eng",
      image: "/rafiki2.svg",
      dark: false,
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences with our professional UI/UX design services.",
      image: "/rafiki4.png",
      link: "/services#ui-ux",
      dark: false,
    },
  ];

  return (
    <motion.section
      className="relative w-full bg-[#F8FBFF] flex justify-center min-h-[1210px] pb-[100px] overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* BLOBS (no animation for stability) */}
      <img src="/icons/software-s-blob.svg" className="absolute top-[2rem] left-[-6rem] w-[25rem] opacity-30 z-0 pointer-events-none" />
      <img src="/icons/software-s-r.svg" className="absolute top-[55rem] right-0 w-[20rem] opacity-30 z-0 pointer-events-none" />

      <motion.div
        variants={container}
        className="w-full max-w-[1254px] px-6 flex flex-col items-center pt-[60px] sm:pt-[80px] md:pt-[100px] relative z-10"
      >

        {/* TITLE */}
        <motion.div variants={fadeUp} className="w-full max-w-[963px] flex flex-col items-center gap-[28px] px-4">
          <h2 className="font-['Space_Grotesk'] font-bold text-[24px] sm:text-[28px] md:text-[36px] text-black text-center">
            Software Services
          </h2>

          <p className="font-['Space_Grotesk'] text-[14px] sm:text-[16px] md:text-[20px] text-[#5D5D5D] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          className="mt-[82px] w-full grid grid-cols-1 justify-items-center lg:grid-cols-[389px_1fr_1fr] lg:grid-rows-2 gap-[16px] md:gap-[18px]"
        >

          {/* FEATURED */}
          <motion.div variants={fadeUp} className="hidden lg:block row-span-2">
            <FeaturedCard />
          </motion.div>

          {/* SMALL CARDS */}
          {smallCards.map((service, index) => (
            <Card key={index} service={service} />
          ))}

        </motion.div>

        {/* BUTTON */}
        <motion.div variants={fadeUp} className="mt-[48px] w-full flex justify-center lg:justify-end">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[220px] md:w-[254px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-[10px] font-['Space_Grotesk'] text-[16px] md:text-[20px] hover:opacity-90 transition-none"
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


// 🔹 FEATURED CARD
function FeaturedCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="w-[389px] h-full rounded-[24px] flex flex-col justify-between items-center p-[32px] text-center"
      style={{ background: "linear-gradient(to bottom, #334155, #367FA6)" }}
    >
      <div className="flex flex-col gap-[16px] items-center">
        <span className="text-[20px] uppercase text-white">FEATURED SERVICES</span>
        <h3 className="text-[32px] text-white leading-[40px] max-w-[280px]">
          Custom Software Solutions
        </h3>
        <p className="text-[16px] text-white max-w-[260px]">
          From concept to deployment, we design and develop software tailored to your business needs.
        </p>
      </div>

      <img src="/amico.svg" className="max-h-[280px] object-contain mt-[24px]" />
    </motion.div>
  );
}


// 🔹 CARD
function Card({ service }) {
  return (
    <motion.div variants={fadeUp} className="w-full flex justify-center">
      <Link href={service.link || "#"} className="block w-full max-w-[420px]">
        <div className="group bg-white rounded-[24px] p-[20px] sm:p-[24px] md:p-[32px] flex flex-col items-center justify-between hover:bg-[#2E3B4E] transition-all duration-300">

          <img src={service.image} className="max-h-[180px] object-contain mb-[16px]" />

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold group-hover:text-white text-center">
            {service.title}
          </h3>

          <p className="mt-[12px] text-[14px] text-[#6B7280] group-hover:text-white text-center max-w-[280px]">
            {service.description}
          </p>

        </div>
      </Link>
    </motion.div>
  );
}