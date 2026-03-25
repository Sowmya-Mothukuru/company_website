export function TeamBottomStrip() {
  return (
    <section
      className="
        w-full 
        bg-[#F8FBFF] 
        flex justify-center 
        
        -mt-[40px] 
        md:-mt-[50px] 
        lg:-mt-[70px] 
        xl:-mt-[90px] 
        2xl:-mt-[110px]
      "
    >
      <div
        className="
          w-full 
          max-w-[1200px] 
          md:max-w-[1300px] 
          lg:max-w-[1377px] 
          xl:max-w-[1450px]
          px-4 md:px-6 lg:px-8 xl:px-0
        "
      >
        <img
          src="/icons/team-botom-strip.svg"
          alt="team values"
          className="
            w-full 
            h-auto 
            object-contain

            max-h-[120px]
            md:max-h-[130px]
            lg:max-h-[139px]
            xl:max-h-[150px]
          "
        />
      </div>
    </section>
  );
}