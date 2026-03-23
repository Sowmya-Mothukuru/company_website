"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit eiusmod tempor incididunt ut labore",
    name: "Mr Jack",
    role: "Director of industry, Saas",
    img: "/images/user1.jpg",
    title: "Good use of remote access",
    count: "01/02",
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit eiusmod tempor incididunt ut labore",
    name: "Mr Jack",
    role: "Director of industry, Saas",
    img: "/images/user2.jpg",
    title: "Good use of remote access",
    count: "02/02",
  },
];

export default function Testimonials() { 
  return (
    //<section className="bg-[#F8FBFF] py-24 flex flex-col items-center overflow-hidden">
    <section className="relative bg-[#F8FBFF] py-24 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <h2 className="text-[36px] font-bold mb-16 font-[Space_Grotesk]">
        Testimonials
      </h2>

      {/* Scroll Container */}
      <div className="w-full overflow-hidden">
    
<img
  src="/icons/testmonials-b.svg"
  alt="blob"
  className="
    absolute
    top-[1.5rem] md:top-[2rem] lg:top-[2rem]
    left-[-4rem] md:left-[-5rem] lg:left-[-6rem]

    w-[15rem] md:w-[22rem] lg:w-[25.125rem] xl:w-[28rem]

    h-auto
    opacity-30
    z-0
    pointer-events-none
  "
/>
      

        <div className="flex gap-[30px] w-max animate-scrollTestimonials">

          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div
  key={index}
  className="group flex-shrink-0 flex w-[720px] lg:w-[820px] xl:w-[873px] min-h-[411px] bg-white border border-gray-300 rounded-[41.59px] overflow-hidden
    hover:border-blue-500 transition-all duration-300"
>

              {/* LEFT */}
              <div className="w-[55%] p-10 flex flex-col justify-between items-center text-center">

                <p className="max-w-[313px] text-[16px] font-semibold leading-[1.5]">
  “{item.text}”
</p>
                <div className="flex items-center gap-4 border border-gray-200 px-4 py-3 max-w-[300px] h-[80px] 
                rounded-l-[38.62px] border-[0.59px]">

  <Image
    src={item.img}
    width={50}
    height={50}
    alt="profile"
    className="rounded-full"
  />

  <div>
    <p className="font-bold">{item.name}</p>
    <p className="text-sm text-gray-500">{item.role}</p>
  </div>

</div>
              </div>

              {/* Divider */}
              <div className="w-[0.5px] bg-gray-300 rounded-full my-8"></div>

              {/* RIGHT */}
              <div className="w-[45%] flex flex-col justify-between p-10 relative">
                 

                <Image
                  src="/images/quote.jpg"
                  width={40}
                  height={40}
                  alt="quote"
                  className="absolute top-8 right-8"
                />

                <div></div>

               <h3 className="w-[235px] text-[25px] 
                font-bold leading-[100%] tracking-[-0.3px] font-[Space_Grotesk]">
                  {item.title}
                </h3>

                <div className="flex justify-end">
                  <span className="text-[24px] font-bold">{item.count}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}