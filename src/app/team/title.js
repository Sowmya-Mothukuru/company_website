export default function TeamIntroSection() {
  return (
    <section className="w-full flex justify-center py-[10rem] bg-[#F8FBFF] px-6 lg:px-8 xl:px-0">
      <div className="flex flex-col items-center gap-[1.75rem] max-w-[50.0625rem] w-full text-center">

        {/* TITLE */}
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

        {/* PARAGRAPH */}
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
}