"use client";

import Image from "next/image";

export default function Address() {
  return (
    <section className="relative w-full flex justify-center py-16 bg-[#F8FBFF]">

      {/* BACKGROUND FRAME */}
      <div
        className="
          relative 
          w-full 
          max-w-[1441px] 

          h-[600px]
          md:h-[700px]
          lg:h-[788px]

          px-4 md:px-6 lg:px-0
        "
      >

        <Image
          src="/images/contact.svg"
          alt="background"
          fill
          className="object-contain"
          priority
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          {/* TITLE */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#2F3E4E]">
            How to Reach Us
          </h2>

          {/* CONTACT ITEMS */}
          <div
            className="
              flex flex-col 
              md:flex-row 
              items-center 

              gap-10 
              md:gap-16 
              lg:gap-24 

              mt-10 md:mt-12
            "
          >

            {/* LOCATION */}
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/Address.svg"
                  alt="Location"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">Location</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                2464 Royal Ln, Mesa, New Jersey 45463
              </p>
            </div>

            {/* PHONE */}
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/phone.svg"
                  alt="Phone"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">Phone Number</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                +91 98765 43210
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-14 h-14 rounded-full bg-[#2F3E4E] flex items-center justify-center">
                <img
                  src="/icons/Email.svg"
                  alt="Email"
                  className="w-6 h-6 invert brightness-0"
                />
              </div>
              <p className="mt-4 font-semibold text-[#2F3E4E]">E-mail</p>
              <p className="text-sm text-gray-600 mt-1 text-center">
                hello@glitchbrainer.com
              </p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-10 md:mt-12">
            <p className="text-[#2F3E4E] font-medium mb-4">Follow Us</p>

            <div className="flex gap-4 justify-center flex-wrap">
              <img src="/icons/FaceBook.svg" className="w-10 h-10" />
              <img src="/icons/Instagram.svg" className="w-10 h-10" />
              <img src="/icons/X.svg" className="w-10 h-10" />
              <img src="/icons/Linkindin.svg" className="w-10 h-10" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}