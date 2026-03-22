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
    <section className="w-full bg-[#F8FBFF] flex justify-center py-12 md:py-16 lg:py-20">

      {/* RESPONSIVE CONTAINER */}
      <div
        className="
          relative
          w-full
          max-w-[1016px]

          h-[420px]
          md:h-[520px]
          lg:h-[600px]
          xl:h-[640px]
        "
      >

        {/* ICONS BACKGROUND */}
        <Image
          src="/images/contact-intro.svg"
          alt="icons"
          fill
          className="object-contain"
          priority
        />

        {/* DOTTED PATH */}
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

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6">
          <p
            className="
              font-playfair

              text-[24px]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[36px]
              xl:text-[40px]

              leading-[120%]
              tracking-[-0.3px]
              text-[#3A4754]

              max-w-[90%]
              md:max-w-[640px]
              lg:max-w-[720px]
            "
          >
            Every great collaboration starts with a conversation.
          </p>
        </div>

      </div>

    </section>
  );
}