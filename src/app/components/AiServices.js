import Link from "next/link";

export default function AiServices() {

  const services = [
    {
      title: "AI Strategy & Execution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
         link: "/ai-services#ai-strategy",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
    {
      title: "Generative & Conversational AI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
         link: "/ai-services#generative-ai",
      icon: "/charm_robot.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Advanced Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
         link: "/ai-services#advance-analytics",
      icon: "/carbon_analytics.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Intelligent Automation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
         link: "/ai-services#automation",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
  ];

  return (
    <section className="w-full bg-[#D4D4D4] flex justify-center py-[80px]">

      <div className="max-w-[1257px] w-full px-6 flex flex-col items-center">

        {/* TITLE */}
        <div className="max-w-[900px] text-center font-['Space_Grotesk']">

          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-black">
            AI Services
          </h2>

          <p className="mt-6 text-[16px] md:text-[18px] lg:text-[20px] text-[#5D5D5D] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-[70px] w-full flex flex-col gap-6">

          {/* ROW 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[0]} />
            <Card service={services[1]} />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[2]} />
            <Card service={services[3]} />
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-[50px] w-full flex justify-center lg:justify-end">

          <Link href="/ai-services">

            <button className="w-[200px] md:w-[240px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-2 text-[16px] md:text-[18px] font-['Space_Grotesk'] hover:opacity-90 transition">

              <span>View More</span>
              <span>→</span>

            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}


function Card({ service }) {
  return (
    <Link href={service.link} className={`w-full flex-1 ${service.width}`}>
      <div
        className="
        bg-white
        rounded-[24px]
        p-8 md:p-10
        flex flex-col
        gap-6
        min-h-[300px]
        h-full
        transition-all duration-300
        hover:bg-[#2E3B4E]
        hover:text-white
        hover:shadow-lg
        "
      >
        {/* ICON */}
        <div className="w-[72px] h-[72px] bg-[#2E3B4E] rounded-full flex items-center justify-center">
          <img src={service.icon} alt="icon" className="w-[32px] h-[32px]" />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[30px]">
            {service.title}
          </h3>

          <p className="mt-4 text-[16px] md:text-[18px] leading-[28px] 
          text-[#5D5D5D] group-hover:text-white hover:text-white">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}