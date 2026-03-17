export default function Hero() {
  return (
    <section  id="hero" className= "w-full bg-white py-[120px]">

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 flex items-center justify-between gap-16">

        {/* TEXT CONTENT */}
        <div className="max-w-[723px]">

          <h1 className="text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.2] text-black">
            We Build Scalable AI & Software Systems for Modern Businesses
          </h1>

          <p className="mt-[24px] text-[20px] lg:text-[21px] xl:text-[22px] text-[#5D5D5D] leading-[32px]">
            From AI strategy and data engineering to production-ready software,
            we help startups and enterprises turn ideas into reliable,
            high-impact digital products.
          </p>

        </div>

        {/* HERO IMAGE */}
        <div className="w-[380px] lg:w-[440px] xl:w-[498px] shrink-0">

          <img
            src="/pana.svg"
            alt="Hero Illustration"
            className="w-full h-auto object-contain"
          />

        </div>

      </div>

    </section>
  );
}