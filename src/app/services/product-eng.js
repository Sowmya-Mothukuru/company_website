import React from "react";

const ProductEng = () => {
  return (
    <section className="w-full bg-[#D4D4D4] flex justify-center py-[5rem] px-[1.5rem]">
      
      {/* MAIN CONTAINER */}
      <div
  className="
  flex
  flex flex-row-reverse
  items-center
  gap-[5.125rem]
  max-w-[78.6875rem]
  w-full
  "
>
        
        {/* LEFT IMAGE CONTAINER */}
        <div
          className="
          relative
          flex-shrink-0
          bg-[#334155]
          rounded-[1.5rem]
          w-[27.375rem]
          h-[27.125rem]
          "
        >
          <img
            src="/images/programmer/bro.svg"
            alt="Software Development Illustration"
            className="
            absolute
            object-contain
            w-[20.13rem]
            h-[15.76rem]
            top-[5.68rem]
            left-[3.62rem]
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-[2.75rem] max-w-[46rem] w-full">
          
          {/* HEADING */}
          <h2
            className="
            text-[2rem]
            font-bold
            leading-[3rem]
            text-black
            "
          >
           Product Engineering & MVP Development
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            text-[1.25rem]
            text-[#969696]
            leading-[1.875rem]
            "
          >
          We help startups and businesses turn ideas into successful digital products. 
          From MVP development to full-scale product engineering, we focus on speed, usability, 
          and market readiness while aligning technology with business goals.
          </p>

          {/* INCLUDES */}
          <div className="flex flex-col gap-[1.75rem] max-w-[27.75rem]">
            <h3 className="font-semibold text-[1.25rem] text-black">
              Includes:
            </h3>

            <ul className="flex flex-col gap-[0.625rem] text-[#969696] text-[1.125rem]">
              <li className="flex items-center gap-[0.5rem]">
                <span>•</span> MVP & Startup Product Development
              </li>

              <li className="flex items-center gap-[0.5rem]">
                <span>•</span> Product Consulting & Digital Strategy
              </li>
            </ul>
          </div>

          {/* BUTTON */}
          <button
            className="
            flex
            items-center
            justify-center
            gap-[0.625rem]
            w-[14rem]
            h-[3rem]
            px-[1.125rem]
            rounded-[1rem]
            bg-[#334155]
            text-white
            text-[1rem]
            transition
            hover:opacity-90
            "
          >
            Let's Talk
            <span className="text-[1.125rem]">→</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ProductEng;