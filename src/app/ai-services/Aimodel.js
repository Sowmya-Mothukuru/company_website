import Image from "next/image";

export default function AiModel() {
  return (
    <section id ="ai-model" className="w-full flex justify-center py-[70px] md:py-[70px] lg:py-[70px] bg-[#F8FBFF] -mt-[2px]">
      
      <div className="w-full max-w-[1269px] px-6">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[30px] lg:gap-[109px]">

          {/* 🔹 MOBILE TITLE */}
          <h2 className="lg:hidden text-[22px] sm:text-[26px] font-semibold text-black text-center w-full">
            AI Model Development, Deployment & Lifecycle Management
          </h2>

          {/* 🔹 IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/images/report/amico.svg"
              alt="AI Model Illustration"
              width={450}
              height={450}
              priority
              className="w-[340px] sm:w-[400px] lg:w-[450px] h-auto object-contain"
            />
          </div>

          {/* 🔹 CONTENT */}
          <div className="flex flex-col w-full lg:w-[710px] gap-[30px] lg:gap-[44px] items-center lg:items-start text-center lg:text-left">

            {/* 🔹 DESKTOP TITLE */}
            <h2 className="hidden lg:block text-[32px] font-semibold text-black">
              AI Model Development, Deployment & Lifecycle Management
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[14px] sm:text-[15px] lg:text-[18px] text-[#6B7280] leading-[24px] lg:leading-[30px] max-w-[600px] text-left">
              We design, train, deploy, and manage robust AI/ML models tailored to your business needs.
              Our end-to-end approach ensures seamless integration, scalable deployment, 
              and continuous monitoring to keep models accurate, secure, and reliable over time.
            </p>

            {/* INCLUDES */}
            <div className="w-full">
              <p className="font-medium text-black mb-[10px] lg:mb-[12px] text-left">
                Includes:
              </p>

              <ul className="list-disc pl-5 text-[#6B7280] text-[14px] sm:text-[15px] lg:text-[16px] space-y-[6px] text-left">
                <li>Model Development & Training</li>
                <li>Deployment & System Integration</li>
                <li>Maintenance, Monitoring & Continuous Improvement</li>
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