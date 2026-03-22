import Link from "next/link";
export default function SoftwareServices() {
  const smallCards = [
    {
      title: "Software Development",
      description: "Custom software crafted for performance and scale",
      link: "/services#software-development",
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
       link: "/services#product-eng",
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
      link: "/services#cloud-eng",
      image: "/rafiki2.svg",
      dark: false,
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences with our professional UI/UX design services.",
      image: "/rafiki4.png",
      link: "/services#ui-ux",
      dark: false,
    },
  ];

  return (
   // <section className="w-full bg-[#F8FBFF] flex justify-center min-h-[1210px] pb-[100px]">
   <section className="relative w-full bg-[#F8FBFF] flex justify-center min-h-[1210px] pb-[100px] overflow-hidden">

  {/* 🔷 BLOB 1 (LEFT TOP) */}
  <img
    src="/icons/software-s-blob.svg"
    alt="blob"
    className="
      absolute
      top-[0rem]
      left-[-8.875rem]
      w-[25.125rem]
      h-auto
      opacity-30
      z-0
      pointer-events-none
    "
  />

  {/* 🔷 BLOB 2 (RIGHT BOTTOM) */}
  <img
    src="/icons/software-s-r-blob.svg"
    alt="blob"
    className="
      absolute
      bottom-[-6rem]
      right-[-6rem]
      w-[43.375rem]
      h-auto
      opacity-30
      z-0
      pointer-events-none
    "
  />

  {/* EXISTING CONTENT */}
  <div className="w-full max-w-[1254px] px-6 flex flex-col items-center pt-[100px] relative z-10"></div>
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
        <div className="grid grid-cols-[389px_1fr] gap-[18px] w-full">
            {/* FEATURED CARD */}
            <FeaturedCard />

            {/* SMALL CARDS GRID - 2x2 with 18px gap, w: 854px, h: 624px */}
<div className="
grid
grid-cols-2
gap-[18px]
w-full
">
              {smallCards.map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* VIEW MORE BUTTON - Align right under cards */}
       <div className="mt-[48px] w-full flex justify-end">
          <Link
  href="/services"
  className="w-[254px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-[10px] font-['Space_Grotesk'] font-normal text-[20px] leading-none transition-opacity hover:opacity-90"
>
  <span>View More</span>
  <span className="text-[20px]">→</span>
</Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard() {
  return (
    <div
      className="
      w-[389px]
      row-span-2
      h-full
      rounded-[24px]
      flex
      flex-col
      justify-between
      items-center
      p-[32px]
      text-center
    "
      style={{
        background: "linear-gradient(to bottom, #334155, #367FA6)",
      }}
    >
      {/* TEXT CONTENT */}
      <div className="flex flex-col gap-[16px] items-center">
        <span className="font-['Space_Grotesk'] font-light text-[20px] uppercase text-white">
          FEATURED SERVICES
        </span>

        <h3 className="font-['Space_Grotesk'] font-semibold text-[32px] text-white leading-[40px] max-w-[280px]">
          Custom Software Solutions
        </h3>

        <p className="font-['Space_Grotesk'] text-[16px] leading-[24px] text-white max-w-[260px]">
          From concept to deployment, we design and develop software tailored
          to your business needs.
        </p>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-[24px]">
        <img
          src="/amico.svg"
          alt="Software Solutions"
          className="max-h-[280px] object-contain"
        />
      </div>
    </div>
  );
}

function Card({ service }) {
  const isDark = service.dark;

  const cardContent = (
    <div
      className={`
        group
        w-full
        h-full min-h-[300px]
        rounded-[24px]
        flex flex-col
        items-center
        justify-between
        p-[32px]
        transition-all duration-300
        ${isDark ? "bg-[#334155]" : "bg-white"}
        hover:bg-[#2E3B4E]
      `}
      style={!isDark ? { boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" } : {}}
    >
      {/* IMAGE */}
      <div className="w-full flex justify-center mb-[16px]">
        <img
          src={service.image}
          alt={service.title}
          className="max-h-[180px] object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="text-center flex flex-col items-center">
        <h3
          className={`
            font-['Space_Grotesk']
            text-[20px]
            leading-[28px]
            font-semibold
            transition-colors
            ${isDark ? "text-white" : "text-black"}
            group-hover:text-white
          `}
        >
          {service.title}
        </h3>

        <p
          className="
            mt-[12px]
            text-[14px]
            text-[#6B7280]
            max-w-[280px]
            leading-[22px]
            transition-colors
           
            hover:text-white
          "
        >
          {service.description}
        </p>
      </div>
    </div>
  );

  // Only wrap with Link if link exists
  return service.link ? (
    <Link href={service.link} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}