import Image from "next/image";

export default function AIStrategySection() {
  return (
    <section
      id="ai-strategy"
      className="w-full flex justify-center py-[70px] md:py-[70px] lg:py-[70px] bg-[#F8FBFF] -mt-[1px]"
    >
      <div className="w-full max-w-[1269px] px-6">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[30px] lg:gap-[109px]">

          {/* ================= MOBILE TITLE ================= */}
          <h2 className="lg:hidden text-[24px] sm:text-[28px] font-semibold text-black text-center w-full">
            AI Strategy, Consulting & Data Foundation
          </h2>

          {/* ================= IMAGE ================= */}
          <div className="flex-shrink-0">
            <Image
              src="/images/artificial-intelligence/amico.svg"
              alt="AI Strategy Illustration"
              width={450}
              height={450}
              priority
              className="w-[300px] sm:w-[360px] lg:w-[450px] h-auto object-contain"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col w-full lg:w-[710px] gap-[30px] lg:gap-[44px] items-center lg:items-start text-center lg:text-left">

            {/* ================= DESKTOP TITLE ================= */}
            <h2 className="hidden lg:block text-[32px] font-semibold text-black">
              AI Strategy, Consulting & Data Foundation
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] lg:text-[18px] text-[#6B7280] leading-[26px] lg:leading-[30px] max-w-[600px] text-left">
              We help organizations define the right AI strategy and prepare their
              data ecosystem for success. From identifying high-impact AI
              opportunities to building scalable data pipelines, we ensure your AI
              initiatives start with a strong, future-ready foundation.
            </p>

            {/* INCLUDES */}
            <div className="w-full">
              <p className="font-medium text-black mb-[10px] lg:mb-[12px] text-left">
                Includes:
              </p>

              <ul className="list-disc pl-5 text-[#6B7280] text-[15px] lg:text-[16px] space-y-[6px] text-left">
                <li>AI Consulting & Strategy</li>
                <li>Data Readiness & Engineering</li>
              </ul>
            </div>

            {/* BUTTON */}
            <button className="w-full lg:w-[180px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90">
              Let’s Talk →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}