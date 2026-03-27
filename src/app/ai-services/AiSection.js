import Link from "next/link";

export default function AiServices() {

  const services = [
    {
      title: "AI Strategy & Execution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
    {
      title: "Generative & Conversational AI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/charm_robot.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Advanced Analytics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/carbon_analytics.svg",
      width: "lg:flex-[6]",
    },
    {
      title: "Intelligent Automation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
    {
      title: "AI Model Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/star_icon.svg",
      width: "lg:flex-[4]",
    },
    {
      title: "AI Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      icon: "/charm_robot.svg",
      width: "lg:flex-[6]",
    },
  ];

  return (
    //<section className="w-full bg-[#F8FBFF] flex justify-center py-[40px] ">
      <section className="w-full bg-[#F8FBFF] flex justify-center py-[40px] -mt-[120px] pt-[140px]">

      <div className="max-w-[1257px] w-full px-6 flex flex-col items-center">

        {/* TITLE */}
        <div className="max-w-[900px] text-center font-['Space_Grotesk']">

          <h2 className="text-black text-[28px] md:text-[36px] lg:text-[40px] font-bold">
            AI Services
          </h2>

          {/*  FIXED ALIGNMENT */}
          <p className="mt-6 max-w-[600px] mx-auto text-[16px] md:text-[18px] lg:text-[20px] text-[#5D5D5D] leading-[30px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-[70px] w-full flex flex-col gap-6">

          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[0]} />
            <Card service={services[1]} />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[2]} />
            <Card service={services[3]} />
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <Card service={services[4]} />
            <Card service={services[5]} />
          </div>

        </div>

      </div>

    </section>
  );
}



function Card({ service }) {

  return (

    <Link href="/ai-services" className={`w-full ${service.width}`}>

      <div
        className="
        group
        bg-white
        rounded-[24px]

        p-6 md:p-10

        flex flex-col
        items-center md:items-start
        text-center md:text-left

        gap-5 md:gap-6

        min-h-[260px] md:min-h-[300px]
        h-full

        border border-gray-200

        transition-all duration-300
        hover:bg-[#2E3B4E]
        hover:shadow-lg
        "
      >

        {/* ICON */}
        <div className="
          w-[56px] h-[56px]
          md:w-[72px] md:h-[72px]

          bg-[#2E3B4E]
          rounded-full
          flex items-center justify-center
        ">
          <img
            src={service.icon}
            alt="icon"
            className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
          />
        </div>

        {/* CONTENT */}
        <div>

          {/*  TITLE HOVER WHITE */}
          <h3 className="
            text-black
            group-hover:text-white
            text-[18px] md:text-[22px] lg:text-[24px]
            font-semibold
            leading-[26px] md:leading-[30px]
          ">
            {service.title}
          </h3>

          {/* DESCRIPTION HOVER LIGHT GREY */}
          <p className="
            mt-3 md:mt-4
            text-[14px] md:text-[18px]
            leading-[22px] md:leading-[28px]
            text-[#5D5D5D]
            group-hover:text-gray-300
          ">
            {service.description}
          </p>

        </div>

      </div>

    </Link>
  );
}