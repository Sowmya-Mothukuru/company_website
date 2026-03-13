import Image from "next/image";
export default function AiModel(){
  return (
    <section className="w-full flex justify-center py-[80px] bg-[#D4D4D4]">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1269px] flex flex-col lg:flex-row items-center 
      lg:items-start gap-[60px] lg:gap-[109px] px-6">

        {/* LEFT IMAGE */}
        <div className="flex-shrink-0  bg-[#D4D4D4] bg-transparent">
<Image
            src="/images/report/amico.svg"
            alt="AI Strategy Illustration"
            width={450}
            height={450}
            priority
            className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
<div className="flex flex-col w-[710px] gap-[44px]">

  {/* TITLE */}
  <h2 className="text-[32px] font-semibold text-black">
AI Model Development, Deployment & Lifecycle Management
  </h2>

  {/* DESCRIPTION */}
  <p className="text-[18px] text-[#6B7280] leading-[30px]">
We design, train, deploy, and manage robust AI/ML models tailored to your business needs.
 Our end-to-end approach ensures seamless integration, scalable deployment, 
and continuous monitoring to keep models accurate, secure, and reliable over time.
  </p>

  {/* INCLUDES */}
  <div>
    <p className="font-medium text-black mb-[12px]">Includes:</p>

    <ul className="list-disc pl-5 text-[#6B7280] text-[16px] space-y-[6px]">
  <li>Model Development & Training</li>
<li>Deployment & System Integration</li>
 <li>Maintenance, Monitoring & Continuous Improvement</li>
    </ul>
  </div>

  {/* BUTTON */}
  <button className="w-[180px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-2 hover:opacity-90 transition">
    Let’s Talk →
  </button>

</div>
      </div>

    </section>
  );
}