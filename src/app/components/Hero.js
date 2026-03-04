export default function Hero() {
  return (
    <section className="relative w-full h-[840px] bg-white">

      {/* TEXT BOX (adjusted for navbar 90px) */}
      <div className="absolute top-[156px] right-[626px] w-[723px] h-[354px]">
        <h1 className="text-[64px] font-bold leading-[76px] text-black">
          We Build Scalable AI & Software Systems for Modern Businesses
        </h1>

        <p className="mt-[24px] text-[22px] text-[#5D5D5D] leading-[32px]">
          From AI strategy and data engineering to production-ready software,
          we help startups and enterprises turn ideas into reliable,
          high-impact digital products.
        </p>
      </div>

      {/* IMAGE (adjusted for navbar 90px) */}
      <div className="absolute top-[84px] right-[85.58px] w-[498px] h-[498px]">
        <img
          src="/pana.svg"
          alt="Hero"
          className="w-full h-full object-contain"
        />
      </div>

    </section>
  );
}