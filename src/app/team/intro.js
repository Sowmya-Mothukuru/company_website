/*export default function TeamHeroSection() {
  return (
    <section className="w-full  flex justify-center py-[8rem] bg-[#F8FBFF] py-[40px] -mt-[120px] pt-[140px]">
     {/* <img
  src="/blobs/team-intro-blob.svg"
  alt="blob"
  className="
    absolute

    top-[40px]

    right-[calc((100vw-1550px)/2+20px)]

    w-[clamp(80px,18vw,280px)]

    opacity-30
    pointer-events-none
    z-0
  "
/>

      <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] max-w-[75.4375rem] w-full">
        <div className="w-full max-w-[26.37rem] flex justify-center">
          <img
            src="/images/coworking/rafiki.svg"
            alt="Team"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full max-w-[47.4375rem]">
          <p className="
          font-playfair
          text-[2rem]
          md:text-[2.25rem]
          lg:text-[2.5rem]
          leading-[1]
          tracking-normal
          text-black
          text-center
          lg:text-left
          ">
            The minds behind our work are driven by passion and powered by
            collaboration.
          </p>
        </div>

      </div>
 
    </section>
  );
}*/
export default function TeamHeroSection() {
  return (
    <section className="
      w-full flex justify-center 
      py-10 sm:py-12 md:py-16 lg:py-[8rem]
      bg-[#F8FBFF] 
      px-4 sm:px-6 lg:px-8 xl:px-0
    ">
      
      <div className="
        flex flex-col lg:flex-row 
        items-center 
        gap-6 sm:gap-8 lg:gap-[1.625rem]
        max-w-[75.4375rem] 
        w-full
      ">

        {/* TEXT FIRST ON MOBILE */}
        <div className="
          w-full max-w-[47.4375rem]
          order-1 lg:order-2   /* ✅ key change */
        ">
          <p className="
          font-medium
            text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]
            leading-[1.3] md:leading-[1.2] lg:leading-[1]
            text-black
            text-center lg:text-left
            px-2 sm:px-0
          ">
            The minds behind our work are driven by passion and powered by
            collaboration.
          </p>
        </div>

        {/* IMAGE BELOW TEXT ON MOBILE */}
        <div className="
          w-full 
          max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[26.37rem]
          flex justify-center
          order-2 lg:order-1   /* ✅ key change */
        ">
          <img
            src="/images/coworking/rafiki.svg"
            alt="Team"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}