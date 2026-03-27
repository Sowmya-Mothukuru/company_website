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
    <section className="relative w-full bg-[#F8FBFF] flex justify-center py-[5rem] overflow-hidden mt-[-235px]">

      {/* 🔷 RESPONSIVE BLOB */}
      <img
        src="/icons/ai-blob.svg"
        alt="background blob"
        className="
          absolute
          top-[-3rem]
          right-[-4rem]

          w-[18rem]
          sm:w-[22rem]
          md:w-[24rem]
          lg:w-[26rem]
          xl:w-[28.7rem]

          opacity-30
          z-0
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[78.5rem] w-full px-6 flex flex-col items-center">

        {/* TITLE */}
        <div className="max-w-[56rem] text-center font-['Space_Grotesk']">

          <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold text-black">
            AI Services
          </h2>

          <p className="mt-6 text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#5D5D5D] leading-[1.875rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-[4.5rem] w-full flex flex-col gap-6">

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
        <div className="mt-[3rem] w-full flex justify-center lg:justify-end">

          <Link href="/ai-services">
            <button className="w-[12.5rem] md:w-[15rem] h-[3rem] bg-[#334155] text-white rounded-[1rem] flex items-center justify-center gap-2 text-[1rem] md:text-[1.125rem] font-['Space_Grotesk'] hover:opacity-90 transition">
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
        group
        bg-white
        rounded-[1.5rem]
        p-8 md:p-10
        flex flex-col
        gap-6
        min-h-[20rem]
        h-full
        transition-all duration-300
        hover:bg-[#2E3B4E]
        hover:text-white
        hover:shadow-lg
        "
      >
        {/* ICON */}
        <div className="w-[4.5rem] h-[4.5rem] bg-[#2E3B4E] rounded-full flex items-center justify-center">
          <img src={service.icon} alt="icon" className="w-[2rem] h-[2rem]" />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-[1.875rem]">
            {service.title}
          </h3>

          <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.75rem] text-[#5D5D5D] group-hover:text-white">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}