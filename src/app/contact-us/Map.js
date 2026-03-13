export default function Address() {
  return (
    <section className="w-full flex justify-center bg-[#D4D4D4] px-6 lg:px-8 xl:px-0">

      <div
        className="
        flex flex-col lg:flex-row
        w-full max-w-[79.5625rem]
        min-h-[38.941rem]
        rounded-[0.5rem]
        pt-[1.4375rem] pb-[1.4375rem] px-[1.5rem]
        gap-[4.125rem]
        bg-white
        "
      >

        {/* LEFT SVG */}
        <div className="w-[24.3125rem] h-[34.375rem] flex items-center justify-center">
          <img
            src="/icons/Map.svg"
            alt="Contact Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* RIGHT SVG */}
       {/* RIGHT SECTION */}
<div className="relative w-[48.125rem] h-[36.066rem] flex items-center justify-center">

  {/* PHONE SVG */}
  <img
    src="/images/Group 259.svg"
    alt="Mobile Contact UI"
    className="w-full h-full object-contain"
  />

  {/* PHONE INNER TITLE */}
 <div
  className="
  absolute
  w-[14rem]
  top-[5.5rem]
  left-[55%]
  -translate-x-1/2
  flex flex-col
  items-center
  gap-[1rem]
  "
>
  {/* TITLE */}
 {/* GET IN TOUCH TITLE */}
<h3
className="
w-[9rem]
text-center
font-spaceGrotesk
font-medium
text-[1.5rem]
leading-[100%]
text-black
"
>
Get In Touch
</h3>
  {/* ADDRESS ROW */}
<div className="flex w-[13.875rem] gap-[1.25rem] items-start">

  <img
    src="/icons/Address.svg"
    alt="Address"
    className="w-[2rem] h-[2rem]"
  />

  <div className="flex flex-col w-[10.0625rem] h-[4.5625rem] gap-[0.375rem]">

    <p className="font-spaceGrotesk font-medium text-[1.25rem] leading-[100%]">
      Address
    </p>

    <p className="text-[0.875rem] text-[#6B7280] leading-[1.2]">
      2464 Royal Ln. Mesa,
      <br />
      New Jersey 45463
    </p>

  </div>
</div>
{/*phone row */}
<div className="flex w-[13.875rem] gap-[1.25rem] items-start">

  <img
    src="/icons/phone.svg"
    alt="Phone"
    className="w-[2rem] h-[2rem]"
  />

  <div className="flex flex-col w-[10.0625rem] h-[4.5625rem] gap-[0.375rem]">

    <p className="font-spaceGrotesk font-medium text-[1.25rem] leading-[100%]">
      Phone Number
    </p>

    <p className="text-[0.875rem] text-[#6B7280]">
      +91 98765 43210
    </p>

  </div>
</div>

{/*phone row */}<div className="flex w-[13.875rem] gap-[1.25rem] items-start">
  <img
    src="/icons/Email.svg"
    alt="Email"
    className="w-[2rem] h-[2rem]"
  />

  <div className="flex flex-col w-[10.0625rem] h-[4.5625rem] gap-[0.375rem]">

    <p className="font-spaceGrotesk font-medium text-[1.25rem] leading-[100%]">
      E-mail
    </p>

    <p className="text-[0.875rem] text-[#6B7280]">
      hello@Glitchbrainer.com
    </p>

  </div>
</div>
</div>
  {/* FOLLOW */}
  <p
className="
absolute
w-[10.6875rem]
h-[1.625rem]
top-[27.0625rem]
left-[20.5625rem]
font-spaceGrotesk
font-medium
text-[1.25rem]
leading-[100%]
text-black
"
>
Follow Us:
</p>
<div
className="
absolute
flex
w-[10.6875rem]
h-[2.0625rem]
top-[29.6875rem]
left-[20.5625rem]
gap-[0.8125rem]
"
>
  <img src="/icons/FaceBook.svg" className="w-[2rem] h-[2rem]" />
  <img src="/icons/Instagram.svg" className="w-[2rem] h-[2rem]" />
  <img src="/icons/X.svg" className="w-[2rem] h-[2rem]" />
  <img src="/icons/Linkindin.svg" className="w-[2rem] h-[2rem]" />
</div>
</div>
</div>
</section>
);
}

