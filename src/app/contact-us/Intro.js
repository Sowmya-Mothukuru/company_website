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
    /*<section className="relative w-full bg-[#F8FBFF] flex justify-center py-12 md:py-16 lg:py-3 overflow-hidden">
      <div
        className="
          relative z-10
          w-full
          max-w-[1016px]
          h-[420px]
          md:h-[520px]
          lg:h-[600px]
          xl:h-[640px]
        "
      >
        <Image
          src="/images/contact-intro.svg"
          alt="icons"
          fill
          className="object-contain"
          priority
        />
        <Image
          src="/icons/Group 266.svg"
          alt="path"
          width={760}
          height={400}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[60%]
            md:w-[65%]
            lg:w-[70%]
            xl:w-[75%]

            h-auto
            pointer-events-none
          "
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6">
          <p
            className="
              font-Playfair
              font-semibold

              text-[28px]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[42px]
              xl:text-[48px]

              leading-[110%]
              text-[#334155]
              text-center
            "
          >
            Every great collaboration starts with a conversation.
          </p>
        </div>
      </div>

    </section>*/
    <section className="relative w-full bg-[#F8FBFF] flex items-center justify-center py-10 
    md:py-12 lg:py-5 overflow-hidden">

      {/* 🔵 TOP RIGHT BLOB */}
     { /* <img
  src="/blobs/contact-intro-b.svg"
  alt="blob"
  className="
    absolute 
    top-[-6%] 
    right-[-6%]

    w-[clamp(140px,18vw,320px)]

    opacity-40
    z-0
    pointer-events-none
  "
/>*/}

      {/* 🔵 BOTTOM LEFT BLOB */}
   {/*} <img
  src="/blobs/contact-intro-b-l.svg"
  alt="blob"
  className="
    absolute 
    bottom-[-8%] 
    left-[-7%]

    w-[clamp(140px,18vw,320px)]

    opacity-40
    z-0
    pointer-events-none
  "
/>*/}

      {/* 🔷 MAIN CARD */}
      <div
        className="
          relative z-10
          w-full 
          max-w-[900px] 
          md:max-w-[1000px] 
          lg:max-w-[1100px] 
          xl:max-w-[1200px] 
          2xl:max-w-[1300px]
          aspect-[1016/617]
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
    scale-[0.9] md:scale-100 lg:scale-105
    pointer-events-none
  "
/>
        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-10">
          <p
            className="
              font-Playfair font-semibold text-[#334155]
              leading-[110%]
              text-[clamp(22px,3vw,48px)]
            "
          >
            Every great collaboration starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}