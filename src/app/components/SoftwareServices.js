export default function SoftwareServices() {
  const largeCard = {
    title: "Custom Software Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/star_icon.svg",
    width: "w-[710px]",
    height: "h-[776px]",
    iconPos: { top: "120px", left: "73px" }, // Adjusted for larger card
    contentPos: { top: "250px", left: "73px" } // Adjusted for larger card
  };

  const smallCards = [
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/charm_robot.svg",
      width: "w-[254px]",
      height: "h-[379px]",
    },
    {
      title: "Mobile App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/carbon_analytics.svg",
      width: "w-[254px]",
      height: "h-[379px]",
    },
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "w-[254px]",
      height: "h-[379px]",
    },
    {
      title: "Cloud Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/charm_robot.svg",
      width: "w-[254px]",
      height: "h-[379px]",
    },
  ];

  return (
    <section className="w-full bg-[#D9D9D9] flex justify-center mt-[140px] min-h-[1210px] pb-[100px]">
      <div className="w-[1254px] flex flex-col items-center pt-[100px]">

        {/* TITLE BLOCK */}
        <div className="w-[963px] flex flex-col items-center gap-[28px]">
          <h2 className="font-['Space_Grotesk'] font-bold text-[36px] text-black w-[963px] h-[46px] text-center flex items-center justify-center">
            Software Services
          </h2>
          <p className="font-['Space_Grotesk'] font-normal text-[20px] leading-[32px] text-[#5D5D5D] w-[963px] h-[60px] text-center flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARDS WRAPPER - 82px gap from paragraph */}
        <div className="mt-[82px] w-full">
          <div className="flex gap-[18px]">
            {/* LARGE CARD */}
            <Card service={largeCard} />

            {/* SMALL CARDS GRID - 2x2 with 18px gap */}
            <div className="grid grid-cols-2 gap-[18px]">
              {smallCards.map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* VIEW MORE BUTTON - Align right under cards */}
        <div className="mt-[48px] w-full flex justify-end">
          <button className="px-[32px] py-[12px] bg-[#2E3B4E] text-white rounded-[12px] text-[16px] font-medium transition-opacity hover:opacity-90">
            View More →
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ service }) {
  // Use custom positioning for large card, or default for small
  const iconTop = service.iconPos?.top || "71px";
  const iconLeft = service.iconPos?.left || "73px";
  const contentTop = service.contentPos?.top || "181px";
  const contentLeft = service.contentPos?.left || "73px";

  return (
    <div className={`${service.width} ${service.height} bg-white rounded-[24px] relative overflow-hidden`}>
      {/* Icon circle: 72x72 */}
      <div
        className="absolute w-[72px] h-[72px] bg-[#2E3B4E] rounded-full flex items-center justify-center"
        style={{ top: iconTop, left: iconLeft }}
      >
        <img src={service.icon} alt="icon" className="w-[32px] h-[32px]" />
      </div>

      {/* Content */}
      <div
        className="absolute right-[24px]" // Use right padding for small cards
        style={{ top: contentTop, left: contentLeft }}
      >
        <h3 className="text-[24px] font-medium text-black leading-tight">
          {service.title}
        </h3>
        <p className="mt-[16px] text-[20px] text-[#5D5D5D] leading-[30px]">
          {service.description}
        </p>
      </div>
    </div>
  );
}