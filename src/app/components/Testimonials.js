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

const testimonials = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit eiusmod tempor incididunt ut labore",
    name: "Mr Jack",
    role: "Director of industry, Saas",
    img: "/images/user1.jpg",
    title: "Good use of remote access",
    count: "01/02",
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit eiusmod tempor incididunt ut labore",
    name: "Mr Jack",
    role: "Director of industry, Saas",
    img: "/images/user2.jpg",
    title: "Good use of remote access",
    count: "02/02",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="relative bg-[#F8FBFF] py-16 sm:py-20 md:py-24 flex flex-col items-center overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-10 sm:mb-12 md:mb-16 font-[Space_Grotesk]"
      >
        Testimonials
      </motion.h2>

      {/* Scroll Container */}
      <motion.div variants={fadeUp} className="w-full overflow-hidden touch-pan-x">

        {/* Background Blob */}
        <img
          src="/icons/testmonials-b.svg"
          alt="blob"
          className="
            absolute
            top-[1rem] sm:top-[1.5rem] md:top-[2rem]
            left-[-3rem] sm:left-[-4rem] md:left-[-5rem] lg:left-[-6rem]
            w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[25.125rem] xl:w-[28rem]
            h-auto opacity-30 z-0 pointer-events-none
          "
        />

        <div className="flex gap-[16px] sm:gap-[20px] md:gap-[30px] w-max animate-scrollTestimonials">

          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (

            <div
              key={index}
              className="
                group flex-shrink-0 flex
                w-[720px] sm:w-[720px] md:w-[720px] lg:w-[820px] xl:w-[873px]
                min-h-[280px] sm:min-h-[320px] md:min-h-[411px]
                bg-white border border-gray-300 rounded-[30px] sm:rounded-[35px] md:rounded-[41.59px]
                overflow-hidden
                hover:border-blue-500 transition-all duration-300
              "
            >

              {/* LEFT */}
              <div className="w-[55%] p-4 sm:p-6 md:p-10 flex flex-col justify-between items-center text-center">

                <p className="
                  max-w-[200px] sm:max-w-[260px] md:max-w-[313px]
                  text-[12px] sm:text-[14px] md:text-[16px]
                  font-semibold leading-[140%]
                ">
                  “{item.text}”
                </p>

                <div className="
                  flex items-center gap-2 sm:gap-3 md:gap-4
                  border border-gray-200
                  px-2 sm:px-3 md:px-4
                  py-2 sm:py-2 md:py-3
                  max-w-[220px] sm:max-w-[260px] md:max-w-[300px]
                  h-[55px] sm:h-[65px] md:h-[80px]
                  rounded-l-[30px] sm:rounded-l-[34px] md:rounded-l-[38.62px]
                ">

                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="profile"
                    className="rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"
                  />

                  <div>
                    <p className="font-bold text-[12px] sm:text-[14px] md:text-[16px]">
                      {item.name}
                    </p>
                    <p className="text-[10px] sm:text-[12px] md:text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="w-[0.5px] bg-gray-300 rounded-full my-4 sm:my-6 md:my-8"></div>

              {/* RIGHT */}
              <div className="w-[45%] flex flex-col justify-between p-4 sm:p-6 md:p-10 relative">

                <Image
                  src="/images/quote.jpg"
                  width={40}
                  height={40}
                  alt="quote"
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-[20px] sm:w-[28px] md:w-[40px]"
                />

                <div></div>

                <h3 className="
                  w-[160px] sm:w-[200px] md:w-[235px]
                  text-[14px] sm:text-[18px] md:text-[25px]
                  font-bold leading-[110%] tracking-[-0.3px]
                  font-[Space_Grotesk]
                ">
                  {item.title}
                </h3>

                <div className="flex justify-end">
                  <span className="text-[14px] sm:text-[18px] md:text-[24px] font-bold">
                    {item.count}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </motion.div>

    </motion.section>
  );
}