import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="w-full flex justify-center py-16 lg:py-20 xl:py-24 bg-[#F8FBFF]">

      {/* Card */}
      <div
        className="
          w-full 
          max-w-[1298px] 

          mx-0 lg:mx-10 xl:mx-10 2xl:mx-auto

          h-auto lg:h-[450px] xl:h-[481px]   /* ✅ mobile fix */

          bg-[#F4F6F8] 
          rounded-[8px] 

          flex flex-col lg:flex-row   /* ✅ mobile layout */
          items-center 
          relative

          py-8 sm:py-10 md:py-12 lg:py-0

          px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0
        "
      >

        {/* ✅ Mobile Top Subtitle */}
        <div
          className="
            flex lg:hidden

            font-spaceGrotesk 
            items-center justify-center
            gap-2

            text-[13px] sm:text-[14px] 
            font-medium text-[#2D3E50] 

            mb-4
          "
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#2D3E50]" />
          <span>Build the future with us</span>
        </div>

        {/* Left Illustration */}
        <div
          className="
            flex justify-center

            mb-6 sm:mb-8 lg:mb-0

            pl-0 lg:pl-[28px] xl:pl-[32px]
            pt-0 lg:pt-[28px] xl:pt-[34px]

            flex-shrink-0
          "
        >
          <Image
            src="/images/hiring/rafiki.svg"
            alt="Join team illustration"
            width={497}
            height={414}
            className="
              object-contain 
              w-[220px] sm:w-[260px] md:w-[300px] 
              lg:w-[420px] xl:w-[497px] 
              h-auto
            "
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center text-center flex-1 px-2 sm:px-4">

          {/* ✅ Desktop Subtitle */}
          <div
            className="
              hidden lg:flex

              font-spaceGrotesk 
              items-center 
              gap-3 sm:gap-4 lg:gap-5 xl:gap-6 

              text-[13px] sm:text-[14px] 
              lg:text-[15px] xl:text-[16px] 

              font-medium text-[#2D3E50] 
              mb-3 sm:mb-4
            "
          >
            <span className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#2D3E50]" />
            <span>Build the future with us</span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-spaceGrotesk 
              font-medium
              text-[24px] sm:text-[28px] md:text-[32px] 
              lg:text-[36px] xl:text-[40px] 

              leading-[30px] sm:leading-[34px] md:leading-[36px] 
              lg:leading-[40px] xl:leading-[44px] 

              text-[#2D3E50] 

              max-w-[90%] sm:max-w-[500px] md:max-w-[550px] 
              lg:max-w-[600px] xl:max-w-[650px] 

              text-center
            "
          >
            We’re looking for passionate people
            <br />
            to join our team.
          </h1>

          {/* Arrow */}
      
          {/* Arrow */}
      <div
  className="
    absolute 

    left-1/2 
    -translate-x-[150px]
    bottom-[40px]

    sm:-translate-x-[140px] sm:bottom-[75px]

    md:-translate-x-[180px] md:bottom-[60px]   /* ✅ TABLET FIX */

    lg:hidden xl:block

    xl:left-[280px] xl:top-[120px]   /* ✅ FIX for 1440 */
2xl:left-[140px] 2xl:top-[130px] /* ✅ bigger screens */         /* ✅ 1440+ FIX */

    pointer-events-none
  "
>
  <Image
    src="/icons/Arrow.svg"
    alt="Arrow"
    width={110}
    height={140}
    className="
      rotate-[30deg]

      w-[60px] sm:w-[55px] md:w-[65px]   /* ✅ tablet size tweak */
      lg:w-[85px] xl:w-[110px]

      h-auto
    "
  />
</div>

          {/* Button */}
          <button
            className="
              mt-6 sm:mt-7 lg:mt-9 xl:mt-10 

              w-[180px] sm:w-[190px] md:w-[200px] 
              lg:w-[210px] xl:w-[224px] 

              h-[40px] sm:h-[42px] md:h-[44px] 
              lg:h-[46px] xl:h-[48px] 

              rounded-[16px] bg-[#334155] text-white 

              text-[13px] sm:text-[14px] md:text-[15px] 
              xl:text-[16px] 

              font-medium shadow-md
            "
          >
            Apply Now
          </button>

        </div>

      </div>
    </section>
  );
}