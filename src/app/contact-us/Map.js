export default function Address() {
  return (
    <section className="w-full flex justify-center bg-[#D4D4D4] px-6 lg:px-8 xl:px-0">

      <div
        className="
        flex flex-col xl:flex-row
        items-center xl:items-start
        w-full max-w-[79.5625rem]
        min-h-[38.941rem]
        rounded-[0.5rem]
        pt-[1.4375rem] pb-[1.4375rem] px-[1.5rem]
        gap-[4.125rem]
        bg-white
        "
      >

        {/* LEFT MAP */}
        <div className="w-full max-w-[24.3125rem] h-auto xl:h-[34.375rem] flex items-center justify-center">
          <img
            src="/icons/Map.svg"
            alt="Contact Illustration"
            className="w-full h-auto xl:h-full object-contain"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="relative w-full max-w-[48.125rem] h-auto xl:h-[36.066rem] flex items-center justify-center">

          {/* PHONE FRAME */}
          <img
            src="/images/Group 259.svg"
            alt="Mobile Contact UI"
            className="w-full h-auto xl:h-full object-contain"
          />

          {/* PHONE SCREEN */}
          <div
            className="
            absolute
            bg-white
            w-[15.9075rem]
            h-[30.07125rem]
            top-[3.854rem]
            xl:left-[17.9375rem]
            left-1/2 -translate-x-1/2 xl:translate-x-0
            rounded-[1.5rem]
            flex flex-col
            items-center
            pt-[2.5rem]
            gap-[1.75rem]
            z-10
            "
          >

            {/* TITLE */}
            <h3
              className="
              w-[9rem]
              text-center
              font-spaceGrotesk
              font-medium
              text-[1.5rem]
              leading-[100%]
              text-black
              "
            >
              Get In Touch
            </h3>

            {/* ADDRESS */}
            <div className="flex w-[13.875rem] gap-[1.25rem] items-start">
              <img
                src="/icons/Address.svg"
                alt="Address"
                className="w-[2rem] h-[2rem]"
              />

              <div className="flex flex-col w-[10.0625rem] gap-[0.375rem]">
                <p className="font-spaceGrotesk font-medium text-[1.25rem]">
                  Address
                </p>

                <p className="text-[0.875rem] text-[#6B7280] leading-[1.2]">
                  2464 Royal Ln. Mesa,
                  <br />
                  New Jersey 45463
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex w-[13.875rem] gap-[1.25rem] items-start">
              <img
                src="/icons/phone.svg"
                alt="Phone"
                className="w-[2rem] h-[2rem]"
              />

              <div className="flex flex-col w-[10.0625rem] gap-[0.375rem]">
                <p className="font-spaceGrotesk font-medium text-[1.25rem]">
                  Phone Number
                </p>

                <p className="text-[0.875rem] text-[#6B7280]">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex w-[13.875rem] gap-[1.25rem] items-start">
              <img
                src="/icons/Email.svg"
                alt="Email"
                className="w-[2rem] h-[2rem]"
              />

              <div className="flex flex-col w-[10.0625rem] gap-[0.375rem]">
                <p className="font-spaceGrotesk font-medium text-[1.25rem]">
                  E-mail
                </p>

                <p className="text-[0.875rem] text-[#6B7280]">
                  hello@Glitchbrainer.com
                </p>
              </div>
            </div>

            {/* FOLLOW US */}
            <div className="flex flex-col items-center gap-[0.8125rem] pt-[1.25rem]">

              <p
                className="
                font-spaceGrotesk
                font-medium
                text-[1.25rem]
                leading-[100%]
                text-black
                "
              >
                Follow Us
              </p>

              <div className="flex gap-[0.8125rem]">
                <img src="/icons/FaceBook.svg" className="w-[2rem] h-[2rem]" />
                <img src="/icons/Instagram.svg" className="w-[2rem] h-[2rem]" />
                <img src="/icons/X.svg" className="w-[2rem] h-[2rem]" />
                <img src="/icons/Linkindin.svg" className="w-[2rem] h-[2rem]" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}