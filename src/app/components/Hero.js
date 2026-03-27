"use client";
import Navbar from "./Navbar";

export default function Hero() {
  return (
   <section className="relative w-full h-[860px] xl:h-[920px] overflow-hidden bg-[#F8FBFF]">
      {/* BACKGROUND */}
     <img
  src="/images/hero-bg.svg"
  alt="hero background"
  className="absolute top-0 left-0 w-full h-[75%] object-cover"
/>

      {/* NAVBAR */}
      <Navbar variant="hero" />

      {/* HERO CONTAINER */}
  <div className="relative max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-start 
  pt-[140px] md:pt-[120px] xl:pt-[180px]">

        {/* LEFT CONTENT */}
       <div className="
  pl-[24px] sm:pl-[32px] md:pl-[42px]
  pr-[20px] sm:pr-[32px]   /* ✅ ADD RIGHT PADDING */
  text-white 
  max-w-full md:max-w-[50%]

  text-left md:text-left   /* (keeps same, but explicit) */
">
          {/* HEADING */}
          <h1
  className="
    max-w-full sm:max-w-[520px] xl:max-w-[668px]

    text-[28px] 
sm:text-[34px] 
md:text-[40px] 
lg:text-[48px] 
xl:text-[60px]
    font-[700]
    leading-[130%]
  "
>
            We Build Scalable AI & Software Systems for Modern Businesses
          </h1>

          {/* BUTTON */}
          <button
            className="
             mt-[24px] md:mt-[30px] xl:mt-[48px]

              w-[180px] sm:w-[220px] xl:w-[254px]
              h-[44px] xl:h-[48px]

              px-[18px]
              rounded-[12px] xl:rounded-[16px]

              bg-white text-[#2F3E4E]
              text-[14px] xl:text-[16px]
              font-[500]

              flex items-center justify-center gap-[10px]

              hover:scale-[1.05]
              transition-all
            "
          >
            Lets Talk →
          </button>

        </div>

        {/* RIGHT IMAGE */}
 <div className="flex-1 flex justify-center md:justify-end mt-[40px] md:mt-0 pointer-events-none">
     <img src="/images/hero.svg" alt="AI hand"
   className="
w-full max-w-[1400px]

/* MOBILE FIX */
translate-x-[-10px] translate-y-[-200px] rotate-0 scale-100
md:scale-[1.25] 
xl:scale-[1.35] 
md:translate-x-[-120px]
xl:translate-x-[-120px]
md:translate-y-[-40px] 
xl:translate-y-[-120px] 
xl:rotate-[-5deg]
" /> </div>
    </div>
    </section>
  );
}