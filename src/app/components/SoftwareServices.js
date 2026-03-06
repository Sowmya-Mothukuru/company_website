export default function SoftwareServices() {
  const smallCards = [
    {
      title: "Software Development",
      description: "Custom software crafted for performance and scale",
      image: "/rafiki.svg",
      dark: true,
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
  ];

  return (
    <section className="w-full bg-[#D9D9D9] flex justify-center min-h-[1210px] pb-[100px]">
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

        {/* CARDS WRAPPER - 216px gap from paragraph */}
        <div className="mt-[82px] w-full">
          <div className="flex gap-[18px] items-start">
            {/* FEATURED CARD */}
            <FeaturedCard />

            {/* SMALL CARDS GRID - 2x2 with 18px gap, w: 854px, h: 624px */}
            <div className="grid grid-cols-2 gap-[18px] w-[854px] h-[624px]">
              {smallCards.map((service, index) => (
                <Card key={index} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* VIEW MORE BUTTON - Align right under cards */}
        <div className="mt-[48px] w-full flex justify-end">
          <button className="w-[254px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center gap-[10px] font-['Space_Grotesk'] font-normal text-[20px] leading-none transition-opacity hover:opacity-90">
            <span>View More</span>
            <span className="text-[20px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard() {
  return (
    <div className="w-[389px] h-[624px] rounded-[24px] overflow-hidden flex flex-col items-center pt-[19px] px-[48px] relative"
      style={{ background: 'linear-gradient(to bottom, #334155, #367FA6)' }}>

      {/* CONTENT CONTAINER: 282px x 207px, Gap: 16px */}
      <div className="w-[282px] h-[207px] flex flex-col gap-[16px]">
        {/* LABEL: FEATURED SERVICES (282x26) - 19px from top edge */}
        <div className="w-[282px] h-[26px]">
          <span className="font-['Space_Grotesk'] font-light text-[20px] leading-none uppercase text-white">
            FEATURED SERVICES
          </span>
        </div>

        {/* HEADING: Custom Software Solutions (282x89) */}
        <h3 className="w-[282px] h-[89px] font-['Space_Grotesk'] font-medium text-[32px] leading-none text-white">
          Custom Software Solutions
        </h3>

        {/* DESCRIPTION (270x60) - 24px line height as per Figma */}
        <p className="w-[270px] h-auto font-['Space_Grotesk'] font-medium text-[16px] leading-[24px] text-white">
          From concept to deployment, we design and develop software tailored to your business needs.
        </p>
      </div>

      {/* IMAGE - FIGMA EXACT: 295.14x290px, top: 300px, left: 47px */}
      <img
        src="/amico.svg"
        alt="Software Solutions"
        className="absolute object-contain"
        style={{
          width: '295.144989px',
          height: '290.000061px',
          top: '300px',
          left: '47px',
          opacity: 1,
          transform: 'rotate(0deg)'
        }}
      />
    </div>
  );
}

function Card({ service }) {
  const isDark = service.dark;
  return (
    <div
      className={`w-[415px] h-[300px] rounded-[24px] flex flex-col items-center p-[32px] relative ${isDark ? 'bg-[#334155]' : 'bg-white'
        }`}
      style={!isDark ? { boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)' } : {}}
    >
      {/* Image Handling */}
      {service.imgSize ? (
        <img
          src={service.image}
          alt={service.title}
          className="absolute object-contain"
          style={{
            width: service.imgSize.w,
            height: service.imgSize.h,
            top: service.imgSize.top,
            left: service.imgSize.left,
            opacity: 1,
            transform: 'rotate(0deg)'
          }}
        />
      ) : (
        <div className="h-[120px] flex items-center justify-center mb-[20px]">
          <img src={service.image} alt={service.title} className="max-h-full object-contain" />
        </div>
      )}

      {/* Content center aligned */}
      <div className={`text-center flex flex-col items-center ${service.imgSize ? 'mt-auto' : ''}`}>
        <h3
          className={`font-['Space_Grotesk'] text-[20px] leading-none ${isDark ? 'text-white' : 'text-black'}`}
          style={{
            width: service.titleSize?.w || 'auto',
            height: service.titleSize?.h || 'auto',
            fontWeight: service.titleWeight || '500'
          }}
        >
          {service.title}
        </h3>
        <p
          className="mt-[12px] text-center"
          style={{
            fontFamily: service.descFont || 'Space Grotesk',
            fontWeight: service.descWeight || '400',
            fontSize: service.descSize || '14px',
            color: service.descColor || (isDark ? 'white' : '#6B7280'),
            width: '351px',
            lineHeight: '100%'
          }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}
