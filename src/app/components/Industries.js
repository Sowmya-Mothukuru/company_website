"use client";

export default function IndustriesSection() {

  const row1 = [
    { text: "Startup & SaaS", icon: "/icons/startup.svg" },
    { text: "Healthcare & tech", icon: "/icons/healthcare.svg" },
    { text: "Enterprise & Corporate Solutions", icon: "/icons/streamline-ultimate_job-responsibility-bag-hand.svg" },
    { text: "Recruitment & Staffing", icon: "/icons/streamline-ultimate_job-search-man.svg" },
  ];

  const row2 = [
    { text: "Real Estate & PropTech", icon: "/icons/real-estate-prop-tech.svg" },
    { text: "Manufacturing & Supply Chain", icon: "/icons/manufacturing-supply-chain.svg" },
    { text: "Elearning & ed tech", icon: "/icons/ph_student.svg" },
  ];

  const row3 = [
    { text: "Logistics & Transportation", icon: "/icons/iconoir_truck.svg" },
    { text: "E-commerce & Retail", icon: "/icons/fluent_cart-24-regular.svg" },
    { text: "Media, Marketing & Content", icon: "/icons/fluent-mdl2_media.svg" },
  ];

  const Capsule = ({ text, icon }) => {
    return (
      <div
        className="
          min-w-[200px]
          sm:min-w-[230px]
          md:min-w-[270px]

          h-[48px]
          sm:h-[56px]
          md:h-[68px]

          rounded-full
          bg-[#2F3E52]

          flex items-center
          px-[12px] sm:px-[16px] md:px-[20px]
          gap-[8px] sm:gap-[10px]

          shrink-0
        "
      >
        {/* ICON */}
        <img
          src={icon}
          alt={text}
          className="
            w-[18px] h-[18px]
            sm:w-[22px] sm:h-[22px]
            md:w-[26px] md:h-[26px]
            shrink-0
          "
        />

        {/* TEXT */}
        <span
          className="
            text-white
            text-[13px]
            sm:text-[15px]
            md:text-[20px]

            font-medium
            leading-[100%]

            tracking-[-0.2px]
            md:tracking-[-0.5px]

            whitespace-nowrap
          "
          style={{ fontFamily: "Space Grotesk" }}
        >
          {text}
        </span>
      </div>
    );
  };

  return (
    <section className="w-full bg-white">

      {/* HEADER */}
      <div className="mt-[40px] sm:mt-[50px] md:mt-[55px] flex justify-center px-4">
        <div className="max-w-[963px] flex flex-col items-center gap-[20px] sm:gap-[24px] md:gap-[28px] text-center">

          <h2 className="text-[22px] sm:text-[26px] md:text-[36px] font-semibold leading-[120%] mt-[10px]">
            Industries we serve
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-gray-500 leading-[150%] max-w-[750px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>
      </div>

      {/* CAPSULE ANIMATION (ALL DEVICES) */}
      <div className="mt-[40px] sm:mt-[50px] md:mt-[71px] mb-[50px] sm:mb-[60px] md:mb-[84px] w-full">

        <div
          className="
            flex
            w-full
            overflow-hidden
            flex-col
            justify-center
            gap-[16px]
            sm:gap-[20px]
            md:gap-[30px]
          "
        >

          {/* ROW 1 */}
          <div className="overflow-hidden">
            <div className="flex gap-[12px] sm:gap-[16px] md:gap-[20px] w-max animate-scrollLeft">
              {[...row1, ...row1, ...row1].map((item, index) => (
                <Capsule key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden">
            <div className="flex gap-[12px] sm:gap-[16px] md:gap-[20px] w-max animate-scrollRight">
              {[...row2, ...row2, ...row2].map((item, index) => (
                <Capsule key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="overflow-hidden">
            <div className="flex gap-[12px] sm:gap-[16px] md:gap-[20px] w-max animate-scrollLeft">
              {[...row3, ...row3, ...row3].map((item, index) => (
                <Capsule key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}