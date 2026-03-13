import Image from "next/image";
export default function AiSecurity() {
  return (
    <section className="w-full flex justify-center py-[80px] bg-[#D4D4D4]">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1269px] flex flex-col lg:flex-row-reverse lg:flex-row items-center 
      lg:items-start gap-[60px] lg:gap-[109px] px-6">

        {/* right IMAGE */}
        <div className="flex-shrink-0  bg-[#D4D4D4]">
<Image
            src="/images/security/amico.svg"
            alt="AI Strategy Illustration"
            width={450}
            height={450}
            priority
            className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
<div className="flex flex-col w-[710px] gap-[44px]">

  {/* TITLE */}
  <h2 className="text-[32px] font-semibold text-black">
 AI Security, Compliance & Risk Intelligence
  </h2>

  {/* DESCRIPTION */}
  <p className="text-[18px] text-[#6B7280] leading-[30px]">
We build secure, compliant, and trustworthy AI systems designed to 
mitigate risks and meet regulatory standards. From fraud detection to custom risk models,
 we ensure your AI solutions are safe, transparent, and enterprise-ready.
  </p>

  {/* INCLUDES */}
  <div>
    <p className="font-medium text-black mb-[12px]">Includes:</p>

    <ul className="list-disc pl-5 text-[#6B7280] text-[16px] space-y-[6px]">
      <li>AI Testing, Security & Compliance</li>
<li>Fraud Detection & Risk Analysis</li>
<li>Custom AI Solutions</li>
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