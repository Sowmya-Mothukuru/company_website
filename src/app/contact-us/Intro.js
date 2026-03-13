export default function ContactUs() {
  return (
    <section className="w-full flex justify-center bg-[#D4D4D4] px-6 lg:px-8 xl:px-0">

      <div className="flex flex-col lg:flex-row items-center w-full max-w-[79.875rem] min-h-[29.375rem] gap-[1.9375rem]">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[32.461rem] h-[24.1875rem] flex justify-center">
          <img
            src="/images/contact-us/rafiki.svg"
            alt="Team"
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-[36.625rem] h-[6.625rem] flex items-center justify-center">
          <p
            className="
            font-playfair
            text-[2rem]
            lg:text-[2.5rem]
            font-normal
            leading-[100%]
            tracking-[0]
            text-black
            text-center
            "
          >
            Every great collaboration starts with a conversation
          </p>
        </div>

      </div>

    </section>
  );
}