export default function TeamHeroSection() {
  return (
    <section className="w-full  flex justify-center py-[8rem] bg-[#F8FBFF] px-6 lg:px-8 xl:px-0">
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
/>*/}

      <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] max-w-[75.4375rem] w-full">

        {/* LEFT IMAGE */}
        <div className="w-full max-w-[26.37rem] flex justify-center">
          <img
            src="/images/coworking/rafiki.svg"
            alt="Team"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
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
}