"use client";
export default function Footer() {
  return (
    /*<footer className="w-full flex justify-center px-6 bg-[#D4D4D4]">
      
      {/* MAIN FOOTER CONTAINER 
      <div className="w-full max-w-[1298px] bg-[#3E4C5E] rounded-[16px] flex flex-col justify-between">*/
      <footer className="w-full flex justify-center bg-[#D4D4D4] pt-10 pb-6">

  <div className="w-full max-w-[1298px] mx-6 bg-[#3E4C5E] rounded-[16px] flex flex-col justify-between">

        {/* INNER CONTENT */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start px-6 lg:px-[72px] pt-[60px] pb-[40px] gap-[60px]">

          {/* LEFT SECTION */}
          <div className="max-w-[441px] flex flex-col gap-[24px]">

            <h2 className="text-white text-[20px] font-semibold">
              Glitch Brainer
            </h2>

            <p className="text-[#929292] text-[14px] leading-[22px]">
              We build scalable AI, data, and software solutions that help
              businesses automate, optimize, and grow.
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-[8px] text-[#E5E7EB] text-[14px]">

              <div className="flex items-center gap-2">
                <img src="/icons/tdesign_location.png" alt="location" className="w-[24px]" />
                Bengaluru
              </div>

              <div className="flex items-center gap-2">
                <img src="/icons/proicons_call.png" alt="phone" className="w-[24px]" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-2">
                <img src="/icons/material-symbols-light_mail-outline.png" alt="mail" className="w-[24px]" />
                hello@Glitchbrainer.com
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-[13px] pt-[6px]">
              <img src="/icons/Group 90.png" alt="social" className="w-[33px]" />
              <img src="/icons/Group 91.png" alt="social" className="w-[33px]" />
              <img src="/icons/Group 92.png" alt="social" className="w-[33px]" />
              <img src="/icons/Group 93.png" alt="social" className="w-[33px]" />
            </div>

            {/* BACK TO TOP */}
            <div className="pt-[10px]">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-[18px] h-[48px] bg-white text-[#2F3E4E] text-[16px] rounded-[4px] flex items-center justify-center gap-2"
              >
                <img src="/icons/iconoir_fast-arrow-up.png" alt="arrow" className="w-[24px]" />
                Back to Top
              </button>
            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-wrap md:flex-nowrap gap-[80px]">

            {/* SITE MAP */}
            <div className="flex flex-col gap-[27px]">
              <h3 className="text-white font-semibold text-[22px]">
                Site Map
              </h3>

              <ul className="flex flex-col gap-[18px] text-[#E5E7EB] text-[18px]">
                <li>AI Services</li>
                <li>Software Services</li>
                <li>Industries We Serve</li>
                <li>Why Choose Us</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-[27px]">
              <h3 className="text-white font-semibold text-[22px]">
                Legal
              </h3>

              <ul className="flex flex-col gap-[18px] text-[#E5E7EB] text-[18px]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
       {/* <div className="w-full h-[40px] bg-white flex items-center justify-center 
        rounded-b-[16px] text-[13px] text-gray-600">*/}
        <div className="w-full bg-white flex items-center justify-center py-2 rounded-b-[16px]">
          © Glitch Brainer 2025. All Rights Reserved
        </div>

      </div>

    </footer>
  );
}