"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FBFF] pt-10 -mt-[2px]">

      {/* FULL WIDTH BACKGROUND */}
      <div
        className="w-full bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/footer.png')",
        }}
      >

        {/* CONTENT CONTAINER */}
        <div className="max-w-[1298px] mx-auto px-6 lg:px-[72px] pt-[200px] pb-[80px]">
        {/* ↑ increased from 140px → 200px */}

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[60px]">

            {/* LEFT */}
            <div className="max-w-[441px] flex flex-col gap-[24px]">

              <h2 className="text-white text-[20px] font-semibold">
                Glitch Brainer
              </h2>

              {/* Hidden on mobile, visible on md+ */}
              <p className="hidden md:block text-[#B0B8C1] text-[14px] leading-[22px]">
                We build scalable AI, data, and software solutions that help
                businesses automate, optimize, and grow.
              </p>

              <div className="flex flex-col gap-[8px] text-[#E5E7EB] text-[14px]">
                <div className="flex items-center gap-2">
                  <img src="/icons/tdesign_location.png" className="w-[20px]" />
                  Bengaluru
                </div>

                <div className="flex items-center gap-2">
                  <img src="/icons/proicons_call.png" className="w-[20px]" />
                  +91 98765 43210
                </div>

                <div className="flex items-center gap-2">
                  <img src="/icons/material-symbols-light_mail-outline.png" className="w-[20px]" />
                  hello@Glitchbrainer.com
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <img src="/icons/Group 90.png" className="w-[36px]" />
                <img src="/icons/Group 91.png" className="w-[36px]" />
                <img src="/icons/Group 92.png" className="w-[36px]" />
                <img src="/icons/Group 93.png" className="w-[36px]" />
              </div>

              {/* <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-4 w-fit px-5 h-[44px] bg-white text-[#2F3E4E] text-[14px] rounded-[6px] flex items-center gap-2"
              >
                <img src="/icons/iconoir_fast-arrow-up.png" className="w-[20px]" />
                Back to Top
              </button> */}

            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-[80px]">

              <div className="flex flex-col gap-[20px]">
                <h3 className="text-white text-[20px] font-semibold">
                  Site Map
                </h3>

                <ul className="flex flex-col gap-[14px] text-[#E5E7EB] text-[16px]">
                  <li>AI Services</li>
                  <li>Software Services</li>
                  <li>Industries We Serve</li>
                  <li>Team</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h3 className="text-white text-[20px] font-semibold">
                  Legal
                </h3>

                <ul className="flex flex-col gap-[14px] text-[#E5E7EB] text-[16px]">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="w-full text-white text-center py-3 text-[13px] text-gray-600">
          © Glitch Brainer 2025. All Rights Reserved
        </div>

      </div>

    </footer>
  );
}
