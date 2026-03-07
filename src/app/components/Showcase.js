import Image from "next/image";

export default function SalonLanding() {
 return (
  <section className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] xl:gap-[60px] px-[40px] lg:px-[60px] xl:px-[73px] py-[60px]">

   {/* LEFT CONTENT */}
   <div className="w-full lg:max-w-[600px] xl:max-w-[671px] flex flex-col gap-[38px]">

    <h1 className="w-full xl:max-w-[656px] text-2xl lg:text-3xl xl:text-4xl font-bold leading-[100%]">
     Smart Salon App - One System. Three Perspectives.
    </h1>

    <p className="text-lg lg:text-xl  font-medium leading-[100%]">
     From booking to service delivery to business control, our modular system
     connects users, staff, and owners seamlessly.
    </p>

    <a
     href="#"
     className="flex items-center gap-[6px] text-lg lg:text-xl  whitespace-nowrap"
    >
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

   {/* RIGHT IMAGE */}
   <div className="relative w-full lg:max-w-[600px] xl:max-w-[739px] aspect-[739/544]">
    <Image
     src="/images/Group 96.jpg"
     alt="Salon App"
     fill
     className="object-contain"
    />
   </div>
  

  </section>
 );
}