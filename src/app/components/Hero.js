"use client";
import Navbar from "./Navbar";

export default function Hero() {
  return (
   <section className="relative w-full h-auto min-h-[700px] md:h-[860px] xl:h-[920px] overflow-hidden bg-[#F8FBFF]">
      {/* BACKGROUND */}
     <img
  src="/images/hero-bg.svg"
  alt="hero background"
  className="absolute top-0 left-0 w-full h-[75%] object-cover"
/>

      {/* NAVBAR */}
      <Navbar variant="hero" />

      {/* HERO CONTAINER */}
     <div className="relative max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center md:items-start
    pt-[120px] sm:pt-[150px] md:pt-[180px]">

        {/* LEFT CONTENT */}
       <div className="px-[20px] sm:px-[32px] md:pl-[42px] text-white w-full md:max-w-[50%]
flex flex-col items-start
text-left">
          {/* HEADING */}
          <h1
  className="
    text-[26px] sm:text-[34px] md:text-[48px] xl:text-[60px]
    leading-[135%]
    font-[700]
  "
>
            We Build Scalable AI & Software Systems for Modern Businesses
          </h1>

          {/* BUTTON */}
          <button
  className="
    w-[180px]  mt-[20px] sm:w-[220px] xl:w-[254px]
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
  <div className="
  w-full
  flex justify-center md:justify-end
  mt-[40px] md:mt-0
  pointer-events-none
">
     <img src="/images/hero.svg" alt="AI hand"
  className="
  w-[90%]
  max-w-[500px]

  md:w-full md:max-w-[1400px]

  scale-[1]
  md:scale-[1.25] xl:scale-[1.35]

  translate-x-0 md:translate-x-[-120px]
  translate-y-0 md:translate-y-[-40px] xl:translate-y-[-120px]

  rotate-0 md:rotate-[6deg] xl:rotate-[-5deg]
 " /> 
   </div>
    </div>
    </section>
  );
}