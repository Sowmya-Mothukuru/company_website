import Link from "next/link";
export default function SoftwareServices() {
  const services = [
    {
      title: "Software Development",
      description: "Custom software crafted for performance and scale",
      link:"#software-development",
      image: "/rafiki.svg",
    },
    {
      title: "Product Engineering & MVPs",
      description: "Convert data into actionable insights",
      link:"#product-eng",
      image: "/bro.svg",
    },
    {
      title: "Cloud Engineering, DevOps",
      description: "Optimize your infrastructure with our cloud engineering and DevOps solutions.",
      link:"#cloud-eng",
      image: "/rafiki2.svg",
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences with our professional UI/UX design services.",
      link:"#ui-ux",
      image: "/rafiki4.png",
    },
    {
      title: "Data Engineering, BI & Quality Assurance",
      description: "Convert data into actionable insights",
      link:"#data-eng",
      image: "/data-analysis/amico.svg",
    },
    {
      title: "Digital Transformation, IT Consulting & Support",
      description: "Convert data into actionable insights",
      link:"#digital-trans",
      image: "/computer-login/rafiki.svg",
    },
  ];

  return (
    <section className="w-full bg-[#F8FBFF] flex justify-center pb-[80px] lg:pb-[100px] -mt-[2px]">

      <div className="w-full max-w-[1254px] px-6 flex flex-col items-center pt-[30px] md:pt-[80px]">

        {/* 🔹 TITLE */}
        <div className="w-full max-w-[963px] flex flex-col items-center gap-[16px] md:gap-[28px] px-4">

          <h2 className="font-['Space_Grotesk'] font-bold text-[26px] md:text-[32px] lg:text-[36px] text-black text-center">
            Software Services
          </h2>

          <p className="font-['Space_Grotesk'] text-[14px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] text-[#5D5D5D] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>

        {/* 🔹 CARDS */}
        <div className="mt-[40px] md:mt-[60px] lg:mt-[82px] w-full">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-[24px] md:gap-[20px] lg:gap-[24px]
          ">
            {services.map((service, index) => (
              <Card key={index} service={service} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


function Card({ service }) {
  return (
    <Link href={service.link || "#"} className="w-full">
    <div
      className="
      group
      w-full
      min-h-[280px] md:min-h-[300px] lg:min-h-[320px]
      bg-white
      rounded-[16px] md:rounded-[20px]
      px-[20px] py-[24px] md:p-[28px] lg:p-[32px]
      flex flex-col items-center text-center
      transition-all duration-300
      hover:bg-[#2E3B4E]
      hover:shadow-xl
      "
      style={{ boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}
    >

      {/* IMAGE */}
      <div className="mb-[16px] md:mb-[20px] flex justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="h-[150px] md:h-[130px] lg:h-[140px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="
        font-['Space_Grotesk']
        text-[18px] md:text-[20px] lg:text-[22px]
        font-bold
        text-black
        group-hover:text-white
        transition-colors
      ">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="
        mt-[8px] md:mt-[10px] lg:mt-[12px]
        text-[13px] md:text-[14px]
        text-[#6B7280]
        leading-[20px] md:leading-[22px]
        max-w-[260px]
        group-hover:text-[#D1D5DB]
        transition-colors
      ">
        {service.description}
      </p>

    </div>
    </Link>
  );
}