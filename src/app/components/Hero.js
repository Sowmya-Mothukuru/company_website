"use client";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/images/hero-bg.svg"
        alt="hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* NAVBAR */}
      <Navbar variant="hero" />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          max-w-[1440px]
          mx-auto
          px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20
          pt-[60px] md:pt-[80px]
          pb-[160px] md:pb-[200px] lg:pb-[240px]
        "
      >

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT TEXT */}
          <div className="text-white z-10">

            <h1
              className="
                text-[34px] sm:text-[42px] md:text-[40px] lg:text-[64px]
                font-semibold leading-[120%]
                tracking-[-0.5px]
                max-w-[720px]
              "
            >
              We Build Scalable AI & Software Systems for Modern Businesses
            </h1>

            <button
              className="
                mt-8
                px-6 h-[48px]
                bg-white text-[#2F3E4E]
                rounded-[10px]
                flex items-center gap-2
                text-[16px]
                hover:scale-105 transition
              "
            >
              Lets Talk →
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">

            <img
              src="/images/hero.svg"
              alt="AI hand"
              className="
                w-[260px]
                sm:w-[360px]
                md:w-[420px]
                lg:w-[600px]
                xl:w-[750px]
                2xl:w-[850px]

                md:translate-x-[40px]
                lg:translate-x-[80px]
                xl:translate-x-[120px]

                rotate-[1deg]
                pointer-events-none
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
}