import React from "react";

const ContactCard = () => {
  return (
    <div className="w-full flex justify-center px-6">

      {/* MAIN OUTER CONTAINER */}
      <div className="max-w-[1257px] w-full flex flex-col items-center pt-20">

        {/* HEADER */}
        <header className="text-center mb-16 max-w-[722px] w-full">
          <h1 className="text-[36px] font-bold text-black mb-4 tracking-tight">
            Let's Build Together
          </h1>

          <p className="text-[#5D5D5D] text-[20px]">
            Tell us about your idea, product, or challenge
          </p>
        </header>

        {/* FORM CARD */}
        <div className="max-w-[1017px] w-full bg-white rounded-[20px] shadow-sm p-10 lg:p-16 flex flex-col gap-[20px]">

          <h2 className="text-2xl font-bold text-black">
            Drop us a line!
          </h2>

          {/* FORM FIELDS */}
          <div className="flex flex-col lg:flex-row gap-[20px]">

            {/* LEFT */}
            <div className="w-full lg:max-w-[446px] flex flex-col gap-[25px]">

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full h-[63px] px-4 rounded-[8px] border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <p className="text-gray-800 font-medium">
                or send us an email to{" "}
                <span className="font-bold">info@glichbrainer.com</span>
              </p>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:max-w-[446px] flex flex-col gap-[20px]">

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">
                  Your Message
                </label>

                <textarea
                  placeholder="Type something if you want..."
                  className="w-full h-[124px] px-4 py-3 rounded-lg border border-gray-200 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                />
              </div>

              <p className="text-[20px] text-gray-800 leading-snug">
                By submitting this, I confirm that I have read and understood the{" "}
                <a
                  href="#"
                  className="underline font-bold hover:text-blue-700 transition-colors"
                >
                  Privacy Policy.
                </a>
              </p>

              <button
                className="w-full h-[48px] flex items-center justify-center gap-[10px]
                px-[18px] rounded-[16px] bg-[#2F3E4E] text-white font-semibold
                hover:bg-[#1f2933] transition-all shadow-md active:scale-[0.98]"
              >
                Send Me Message
              </button>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};























export default ContactCard;

