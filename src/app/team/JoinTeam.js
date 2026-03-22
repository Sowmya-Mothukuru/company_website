import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="w-full flex justify-center py-16 lg:py-20 xl:py-24 bg-[#F8FBFF]">

      {/* Card */}
  
  <div
  className="
    w-full 
    max-w-[1298px] 

    mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-10 2xl:mx-auto

    h-[380px]
    md:h-[420px]
    lg:h-[450px]
    xl:h-[481px]

    bg-[#F4F6F8] 
    rounded-[8px] 

    flex items-center 
    relative

    px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0
  "
>

        {/* Left Illustration */}
        <div
          className="
            pl-[16px] sm:pl-[20px] md:pl-[24px] 
            lg:pl-[28px] xl:pl-[32px] 

            pt-[20px] sm:pt-[22px] md:pt-[24px] 
            lg:pt-[28px] xl:pt-[34px] 

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
              w-[260px] sm:w-[300px] md:w-[340px] 
              lg:w-[420px] xl:w-[497px] 
              h-auto
            "
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center text-center flex-1 px-2 sm:px-4">

          {/* Subtitle */}
          <div
            className="
              font-spaceGrotesk 
              flex items-center 
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
    text-[24px] sm:text-[28px] md:text-[32px] 
    lg:text-[36px] xl:text-[40px] 

    leading-[30px] sm:leading-[34px] md:leading-[36px] 
    lg:leading-[40px] xl:leading-[44px] 

    text-[#2D3E50] 

    max-w-[90%] sm:max-w-[500px] md:max-w-[550px] 
    lg:max-w-[600px] xl:max-w-[650px] 

    text-center
    xl:whitespace-nowrap
  "
>
            We’re looking for passionate people
            <br />
            to join our team.
          </h1>

          {/* Arrow */}
      <div
  className="
    absolute 

    left-[0px] sm:left-[10px] md:left-[20px] 
    lg:left-[20px] xl:left-[80px] 

    top-[80px] sm:top-[90px] md:top-[90px] 
    lg:top-[110px] xl:top-[100px]

    pointer-events-none
    hidden xl:block
  "
>
  <Image
    src="/icons/Arrow.svg"
    alt="Arrow"
    width={110}
    height={140}
    className="
      rotate-[20deg] 

      w-[50px] sm:w-[60px] md:w-[70px] 
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