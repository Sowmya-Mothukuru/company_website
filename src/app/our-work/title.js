/*"use client";
export default function WorkTitleSection() {
  return (
    <section className="w-full bg-[#F8FBFF]">

      <div className="
        max-w-[56rem] 
        mx-auto 
        px-[1.5rem] 
        py-[3rem] 
        text-center
        flex 
        flex-col 
        gap-[1.125rem]
      ">
        <h2 className="
          text-[2rem]         
          md:text-[2.25rem]    
          lg:text-[2.5rem]     
          font-bold            
          text-[#000000]
          leading-[1.2]
        ">
          What We’ve Built. And Why It Matters.
        </h2>
        <p className="
          text-[1rem]          
          md:text-[1.25rem]    
          lg:text-[1.5rem]     
          text-[#000000];
          leading-[1.4]
          max-w-[50rem]        
          mx-auto
        ">
          Each project reflects our drive to solve real problems with scalable,
          human-centered solutions.
        </p>

      </div>
    </section>
  );
}*/
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

export default function WorkTitleSection() {
  return (
    <motion.section
      className="w-full bg-[#F8FBFF]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <motion.div
        className="
        max-w-[56rem] 
        mx-auto 

        px-[1rem] sm:px-[1.5rem]
        py-[2.5rem] sm:py-[3rem] lg:py-[4rem]

        text-center
        flex flex-col 
        gap-[0.75rem] sm:gap-[1.125rem]
      "
        variants={container}
      >

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="
            text-[1.4rem]
            sm:text-[1.75rem]
            md:text-[2.25rem]
            lg:text-[2.5rem]

            font-bold
            text-[#000000]

            leading-[1.3]
            tracking-[0.01em]

            max-w-[95%]
            sm:max-w-[30rem]
            md:max-w-[40rem]
            lg:max-w-full
            mx-auto
          "
        >
          What We’ve Built. And Why It Matters.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="
            text-[0.9rem]
            sm:text-[1rem]
            md:text-[1.25rem]
            lg:text-[1.5rem]

            text-[#000000]
            leading-[1.5]

            max-w-[95%]
            sm:max-w-[28rem]
            md:max-w-[45rem]
            lg:max-w-[50rem]

            mx-auto
          "
        >
          Each project reflects our drive to solve real problems with scalable,
          human-centered solutions.
        </motion.p>

      </motion.div>
    </motion.section>
  );
}