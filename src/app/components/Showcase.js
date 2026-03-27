/*import Image from "next/image";

export default function SalonLanding() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] xl:gap-[60px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] 
      xl:px-[73px] py-[60px]">
        <div className="w-full lg:max-w-[600px] xl:max-w-[671px] flex flex-col gap-[38px]">

          <h1 className="w-full xl:max-w-[656px] text-2xl lg:text-3xl xl:text-4xl font-bold leading-[100%]">
            Smart Salon App - One System. Three Perspectives.
          </h1>

          <p className="text-lg lg:text-xl font-medium leading-[100%]">
            From booking to service delivery to business control, our modular system
            connects users, staff, and owners seamlessly.
          </p>

          <a href="#" className="flex items-center gap-[6px] text-lg lg:text-xl whitespace-nowrap">
            <Image
              src="/images/arrow.jpg"
              alt="arrow"
              width={24}
              height={24}
            />

            <span>Want to build something like this?</span>

            <span className="font-semibold underline">
              Let&apos;s Talk
            </span>
          </a>

        </div>
        <div className="relative w-full lg:max-w-[600px] xl:max-w-[739px] aspect-[739/544]">
          <Image
            src="/images/Group 96.jpg"
            alt="Salon App"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}*/
import Image from "next/image";

export default function SalonLanding() {
  return (
    <section className="w-full bg-white">

      {/* CONTAINER */}
      <div className="
        w-full max-w-[1440px] mx-auto 
        flex flex-col lg:flex-row 
        items-center justify-between 
        
        gap-10 lg:gap-[40px] xl:gap-[60px] 
        
        px-5 sm:px-6 md:px-10 lg:px-[60px] xl:px-[73px] 
        py-12 sm:py-14 md:py-16 lg:py-[60px]
      ">

        {/* 🔽 IMAGE FIRST ON MOBILE */}
        <div className="
          relative w-full 
          max-w-[320px] sm:max-w-[420px] md:max-w-[500px] 
          lg:max-w-[600px] xl:max-w-[739px] 
          aspect-[739/544]
          order-1 lg:order-2
        ">
          <Image
            src="/images/Group 96.jpg"
            alt="Salon App"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 🔽 CONTENT */}
        <div className="
          w-full lg:max-w-[600px] xl:max-w-[671px] 
          flex flex-col 
          items-center lg:items-start   /* center on mobile */
          text-center lg:text-left     /* center text on mobile */
          
          gap-6 sm:gap-7 md:gap-8 lg:gap-[38px]
          order-2 lg:order-1
        ">

          {/* TITLE */}
          <h1 className="
            text-xl sm:text-2xl md:text-3xl xl:text-4xl 
            font-bold leading-tight
            max-w-[90%] lg:max-w-full
          ">
            Smart Salon App - One System. Three Perspectives.
          </h1>

          {/* DESCRIPTION */}
          <p className="
            text-sm sm:text-base md:text-lg lg:text-xl 
            font-medium leading-relaxed
            text-gray-600
            max-w-[95%] lg:max-w-full
          ">
            From booking to service delivery to business control, our modular system
            connects users, staff, and owners seamlessly.
          </p>

          {/* CTA */}
          <a 
            href="#" 
            className="
              flex flex-col sm:flex-row 
              items-center 
              gap-2 sm:gap-2.5 
              text-sm sm:text-base lg:text-lg 
              text-center lg:text-left
            "
          >
            <div className="flex items-center gap-2">
              <Image
                src="/images/arrow.jpg"
                alt="arrow"
                width={20}
                height={20}
              />
              <span>Want to build something like this?</span>
            </div>

            <span className="font-semibold underline">
              Let&apos;s Talk
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
