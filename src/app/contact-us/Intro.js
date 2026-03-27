/*export default function ContactUs() {
  return (
    <section className="w-full flex justify-center bg-[#D4D4D4]  py-15 px-6 lg:px-8 xl:px-0">

      <div className="flex flex-col lg:flex-row items-center w-full max-w-[79.875rem] min-h-[29.375rem] 
      gap-[1.9375rem]">

    
        <div className="w-full lg:w-[32.461rem] h-[24.1875rem] flex justify-center">
          <img
            src="/images/contact-us/rafiki.svg"
            alt="Team"
            className="w-full h-full object-contain"
          />
        </div>

     
        <div className="w-full lg:w-[36.625rem] h-[6.625rem] flex items-center justify-center">
          <p
            className="
            font-playfair
            text-[2rem]
            lg:text-[2.5rem]
            font-normal
            leading-[100%]
            tracking-[0]
            text-black
            text-center
            "
          >
            Every great collaboration starts with a conversation
          </p>
        </div>

      </div>

    </section>
  );
}*/
"use client";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section
      className="
        relative w-full bg-[#F8FBFF] flex items-center justify-center
        py-8 sm:py-10 md:py-12 lg:py-16   /* ✅ UPDATED (better mobile spacing) */
        overflow-hidden
      "
    >

      {/* 🔷 MAIN CARD */}
      <div
        className="
          relative z-10
          w-full 

          max-w-[92%] sm:max-w-[90%]   /* ✅ ADDED (prevents edge sticking on mobile) */
          md:max-w-[1000px] 
          lg:max-w-[1100px] 
          xl:max-w-[1200px] 
          2xl:max-w-[1300px]

          aspect-[1016/617]

          min-h-[220px] sm:min-h-[260px]   /* ✅ ADDED (avoid squish on small screens) */
        "
      >

        {/* ICON BACKGROUND */}
        <Image
          src="/images/contact-intro.svg"
          alt="icons"
          fill
          className="
            object-cover 
            opacity-80
          "
          priority
        />

        {/* DOTTED PATH */}
        <Image
          src="/icons/Group 266.svg"
          alt="path"
          fill
          className="
            object-contain 
            scale-[0.8] sm:scale-[0.9] md:scale-100 lg:scale-130   /* ✅ UPDATED (better mobile scale) */
            pointer-events-none
          "
        />

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-10">
          <p
            className="
               font-semibold text-[#334155]

              leading-[120%]   /* ✅ UPDATED (better readability on mobile) */

              text-[clamp(18px,5vw,48px)]   /* ✅ UPDATED (mobile-friendly scaling) */

              max-w-[90%] sm:max-w-[80%] md:max-w-[70%]   /* ✅ ADDED (prevents overflow) */
            "
          >
            Every great collaboration starts with a conversation.
          </p>
        </div>

      </div>
    </section>
  );
}