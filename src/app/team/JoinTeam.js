import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-gray-300">
      {/* Main Container */}
      <div className="w-full max-w-[1298px] h-[481px] bg-white rounded-[8px] flex flex-col lg:flex-row items-center justify-between gap-8 px-8 lg:px-12 py-8 relative">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[497px] h-[414px] flex justify-center">
          <Image
            src="/images/hiring/rafiki.svg"
            alt="Join team illustration"
            width={497}
            height={414}
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[550px] relative">

          {/* Subtitle */}
          <div className="w-[251px] h-[26px] flex items-center gap-3 text-[16px] font-medium text-[#2D3E50] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D3E50]" />
            Build the future with us
          </div>

          {/* Heading */}
          <h1 className="font-spaceGrotesk font-semibold text-[32px] leading-[1.3] 
           text-[#2D3E50] mb-16 flex-col items-center justify-center">
            We’re looking for passionate people <br /> to join our team.
          </h1>

          {/* Button + Arrow */}
          <div className="relative flex flex-col items-center lg:items-start">

            {/* Button */}
            <button className="flex items-center justify-center w-[224px] h-[48px] rounded-[16px] bg-[#2D3E50] text-white text-[16px] font-medium px-[18px] gap-[10px] shadow-lg transition-transform hover:scale-105">
              Apply Now
            </button>

            {/* Arrow */}
            <div className="absolute -top-36 -left-20 hidden lg:block">
              <Image
                src="/icons/Arrow.svg"
                alt="Arrow pointing to button"
                width={102}
                height={147}
                className="rotate-[-160deg] opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
