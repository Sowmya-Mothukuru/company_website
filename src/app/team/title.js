/*export default function TeamIntroSection() {
  return (
    <section className="w-full flex justify-center py-[10rem] bg-[#F8FBFF] px-6 lg:px-8 xl:px-0">
      <div className="flex flex-col items-center gap-[1.75rem] max-w-[50.0625rem] w-full text-center">
        <h2 className="
        font-spaceGrotesk 
        font-bold 
        text-[2rem] 
        lg:text-[2.25rem] 
        xl:text-[2.5rem] 
        leading-[1] 
        tracking-normal
        ">
          People Who Make It Happen
        </h2>
        <p className="
        font-spaceGrotesk 
        font-normal 
        text-[1.125rem] 
        lg:text-[1.25rem] 
        leading-[1.4] 
        tracking-normal
        max-w-[50.0625rem]
        ">
          A diverse group of professionals working together to deliver reliable
          digital solutions for businesses.
        </p>

      </div>

    </section>
  );
}*/
export default function TeamIntroSection() {
  return (
    <section className="
      w-full flex justify-center 
      py-12 sm:py-14 md:py-16 lg:py-[10rem]   /* ✅ responsive spacing */
      bg-[#F8FBFF] 
      px-4 sm:px-6 lg:px-8 xl:px-0
    ">
      <div className="
        flex flex-col items-center 
        gap-4 sm:gap-5 md:gap-6 lg:gap-[1.75rem]   /* ✅ responsive gap */
        max-w-[50.0625rem] 
        w-full 
        text-center
      ">

        {/* TITLE */}
        <h2 className="
          font-spaceGrotesk 
          font-bold 

          text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem]
          /* ✅ smooth scaling */

          leading-[1.2] md:leading-[1.1] lg:leading-[1]
          /* ✅ better readability */

          tracking-normal
          px-2 sm:px-0   /* ✅ avoid edge touching */
        ">
          People Who Make It Happen
        </h2>

        {/* PARAGRAPH */}
        <p className="
          font-spaceGrotesk 
          font-normal 

          text-[0.95rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]
          /* ✅ responsive text */

          leading-[1.6] md:leading-[1.5] lg:leading-[1.4]
          /* ✅ more breathing space on mobile */

          tracking-normal
          max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50.0625rem]
          /* ✅ better text width control */
        ">
          A diverse group of professionals working together to deliver reliable
          digital solutions for businesses.
        </p>

      </div>
    </section>
  );
}