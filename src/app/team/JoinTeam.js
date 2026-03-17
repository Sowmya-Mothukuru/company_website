import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="w-full flex justify-center py-16 lg:py-20 xl:py-24 bg-[#D4D4D4]">

      {/* Card */}
      <div className="w-full max-w-[1298px] h-[420px] lg:h-[450px] xl:h-[481px] bg-[#F4F6F8] rounded-[8px] flex items-center relative">

        {/* Left Illustration */}
        <div className="pl-[24px] lg:pl-[28px] xl:pl-[32px] pt-[24px] lg:pt-[28px] xl:pt-[34px] flex-shrink-0">
          <Image
            src="/images/hiring/rafiki.svg"
            alt="Join team illustration"
            width={497}
            height={414}
            className="object-contain 
            w-[360px] lg:w-[420px] xl:w-[497px] 
            h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center text-center flex-1">

          {/* Subtitle */}
          <div className="font-spaceGrotesk flex items-center gap-4 lg:gap-5 xl:gap-6 text-[14px] lg:text-[15px] xl:text-[16px] font-medium text-[#2D3E50] mb-4">
            <span className="w-[6px] h-[6px] rounded-full bg-[#2D3E50]" />
            <span>Build the future with us</span>
          </div>

          {/* Heading */}
          <h1 className="font-spaceGrotesk 
          text-[32px] lg:text-[36px] xl:text-[40px] 
          leading-[36px] lg:leading-[40px] xl:leading-[44px] 
          text-[#2D3E50] 
          max-w-[550px] lg:max-w-[600px] xl:max-w-[650px] 
          text-center whitespace-nowrap">
            We’re looking for passionate people
            <br />
            to join our team.
          </h1>

          {/* Arrow */}
          <div className="absolute 
          left-[40px] lg:left-[60px] xl:left-[80px] 
          top-[80px] lg:top-[90px] xl:top-[100px]">
            <Image
              src="/icons/Arrow.svg"
              alt="Arrow"
              width={110}
              height={140}
              className="rotate-[20deg] 
              w-[80px] lg:w-[95px] xl:w-[110px] 
              h-auto"
            />
          </div>

          {/* Button */}
          <button className="mt-8 lg:mt-9 xl:mt-10 
          w-[200px] lg:w-[210px] xl:w-[224px] 
          h-[44px] lg:h-[46px] xl:h-[48px] 
          rounded-[16px] bg-[#334155] text-white 
          text-[14px] lg:text-[15px] xl:text-[16px] 
          font-medium shadow-md">
            Apply Now
          </button>

        </div>

      </div>
    </section>
  );
}