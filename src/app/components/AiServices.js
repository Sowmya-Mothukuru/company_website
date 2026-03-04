export default function AiServices() {
  const services = [
    {
      title: "AI Strategy & Execution",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "w-[526px]",
    },
    {
      title: "Generative & Conversational AI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/charm_robot.svg",
      width: "w-[710px]",
    },
    {
      title: "Advanced Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/carbon_analytics.svg",
      width: "w-[710px]",
    },
    {
      title: "Intelligent Automation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "w-[526px]",
    },
  ];

  return (
    <section className="w-full bg-[#D9D9D9] flex justify-center h-[1098px]">
      <div className="w-[1257px] flex flex-col items-center pt-[100px]">
        {/* TITLE BLOCK */}
        <div className="w-[914px] text-center flex flex-col items-center font-['Space_Grotesk']">
          <h2 className="text-[36px] font-bold text-black leading-none h-[54px] flex items-center justify-center">
            AI Services
          </h2>
          <p className="mt-[28px] text-[20px] text-[#5D5D5D] leading-[32px] h-[60px] flex items-center justify-center font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* 82px gap between description and cards section */}
        <div className="mt-[82px] w-full">
          {/* CARDS GRID: 2 rows with flex to handle the specific widths and gaps */}
          <div className="flex flex-col gap-[20px]">
            {/* ROW 1 */}
            <div className="flex justify-between">
              {services.slice(0, 2).map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>
            {/* ROW 2 */}
            <div className="flex justify-between">
              {services.slice(2, 4).map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* 48px spacing between bottom cards and View More button */}
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
  return (
    <div className={`${service.width} h-[379px] bg-white rounded-[24px] relative overflow-hidden`}>
      {/* Icon circle: 72x72, pos: 73px from left, 71px from top */}
      <div className="absolute left-[73px] top-[71px] w-[72px] h-[72px] bg-[#2E3B4E] rounded-full flex items-center justify-center">
        <img src={service.icon} alt="icon" className="w-[32px] h-[32px]" />
      </div>

      {/* Content: Title inside card (24px medium), Top gap from icon block: 181px from top (71+72+38) */}
      <div className="absolute left-[73px] top-[181px] right-[73px]">
        <h3 className="text-[24px] font-medium text-black">
          {service.title}
        </h3>
        {/* Description: 20px, line-height: 30px, Gap from title: 16px */}
        <p className="mt-[16px] text-[20px] text-[#5D5D5D] leading-[30px]">
          {service.description}
        </p>
      </div>
    </div>
  );
}
