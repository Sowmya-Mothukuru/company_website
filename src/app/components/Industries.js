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

  const allItems = [...row1, ...row2, ...row3];

  const Capsule = ({ text, icon }) => {
    return (
      <div
        className="
          min-w-[270px]
          h-[68px]
          rounded-[50px]
          bg-[#2F3E52]
          flex
          items-center
          px-[20px]
          gap-[10px]
          shrink-0
            flex-shrink-0
        "
      >
        {/* ICON */}
        <img
          src={icon}
          alt={text}
          className="w-[26px] h-[26px] shrink-0"
        />

        {/* TEXT */}
        <span
          className="
            text-white
            text-[20px]
            md:text-[24px]
            font-medium
            leading-[100%]
            tracking-[-0.5px]
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
    <section className="w-full">

      {/* HEADER Data*/}
      <div className="mt-[55px] flex justify-center px-4">
        <div className="max-w-[963px] flex flex-col items-center gap-[28px] text-center">

          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[120%]">
            Industries we serve
          </h2>

          <p className="text-[16px] md:text-[20px] text-gray-500 leading-[150%] max-w-[750px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>
      </div>

      {/* CAPSULES */}
      <div className="mt-[60px] md:mt-[71px] mb-[60px] md:mb-[84px] w-full">

        {/* MOBILE */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-[16px] justify-items-center">
          {allItems.map((item, index) => (
            <Capsule key={index} text={item.text} icon={item.icon} />
          ))}
        </div>

        {/* DESKTOP */}
       <div
  className="
    hidden
    md:flex
    w-full
    h-[310px]
    overflow-hidden
    flex-col
    justify-center
    gap-[30px]
  "
>
          {/* ROW 1 */}
          <div className="overflow-hidden">
            <div className="flex gap-[20px] w-max animate-scrollRight">
              {[...row1, ...row1, ...row1].map((item, index) => (
                <Capsule key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden">
            <div className="flex gap-[20px] w-max animate-scrollLeft">
              {[...row2, ...row2, ...row2].map((item, index) => (
                <Capsule key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="overflow-hidden">
            <div className="flex gap-[20px] w-max animate-scrollRight">
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