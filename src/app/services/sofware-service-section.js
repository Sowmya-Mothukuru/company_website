export default function SoftwareServices() {
  const smallCards = [
    {
      title: "Software Development",
      description: "Custom software crafted for performance and scale",
      image: "/rafiki.svg",
      dark: false,
      imgSize: { w: '235px', h: '183.9997px', top: '34px', left: '90px' },
      titleSize: { w: '286.6388px', h: '26px' },
      titleWeight: '700',
      descWeight: '300',
      descSize: '12px'
    },
    {
      title: "Product Engineering & MVPs",
      description: "Convert data into actionable insights",
      image: "/bro.svg",
      dark: false,
      imgSize: { w: '224.0953px', h: '173.9961px', top: '41px', left: '97px' },
      titleWeight: '700',
      descFont: 'Poppins',
      descColor: '#787878',
      descSize: '14px'
    },
    {
      title: "Cloud Engineering, DevOps",
      description: "Optimize your infrastructure with our cloud engineering and DevOps solutions.",
      image: "/rafiki2.svg",
      dark: false,
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences with our professional UI/UX design services.",
      image: "/rafiki4.png",
      dark: false,
    },
     {
      title: "Data Engineering, BI & Quality Assurance",
      description:"Convert data into actionable insights",
      image: "/data-analysis/amico.svg",
      dark: false,
    },
    {
      title: "Digital Transformation, IT Consulting & Support",
      description:"Convert data into actionable insights",
      image: "/computer-login/rafiki.svg",
      dark: false,
    },
  ];

  return (
    <section className="w-full bg-[#D4D4D4] flex justify-center min-h-[1210px] pb-[100px]">
      <div className="w-full max-w-[1254px] px-6 flex flex-col items-center pt-[100px]">

        {/* TITLE BLOCK */}
        <div className="w-full max-w-[963px] flex flex-col items-center gap-[28px] px-4">
       <h2 className="font-['Space_Grotesk'] font-bold text-[36px] text-black w-full text-center">
            Software Services
          </h2>
          <p className="font-['Space_Grotesk'] font-normal text-[20px] leading-[32px] text-[#5D5D5D] w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARDS WRAPPER - 216px gap from paragraph */}
        <div className="mt-[82px] w-full">
        <div className="flex gap-[18px] items-start justify-center">
            {/* FEATURED CARD */}
          

            {/* SMALL CARDS GRID - 2x2 with 18px gap, w: 854px, h: 624px */}
{/*<div className="
grid 
grid-cols-3
gap-[18px] 
w-[854px]
">
              {smallCards.map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>*/}
            <div
  className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-[24px]
  w-full
  "
>
  {smallCards.map((service, index) => (
    <Card key={index} service={service} />
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ service }) {
  return (
    <div
      className="
      group
      w-full
      min-h-[320px]
      bg-white
      rounded-[20px]
      p-[32px]
      flex
      flex-col
      items-center
      text-center
      transition-all
      duration-300
      hover:bg-[#2E3B4E]
      hover:shadow-xl
      "
      style={{ boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}
    >
      {/* IMAGE */}
      <div className="mb-[24px] flex justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="h-[140px] object-contain"
        />
      </div>

      {/* TITLE */}
      <h3
        className="
        font-['Space_Grotesk']
        text-[20px]
        font-semibold
        text-black
        transition-colors
        group-hover:text-white
        "
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
        mt-[12px]
        text-[14px]
        text-[#6B7280]
        leading-[22px]
        max-w-[260px]
        transition-colors
        group-hover:text-white
        "
      >
        {service.description}
      </p>
    </div>
  );
}