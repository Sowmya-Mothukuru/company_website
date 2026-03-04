export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-20 py-6">

        {/* ================= LOGO ================= */}
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            src="/logo.png"
            alt="Glitch Brainer Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= CENTER MENU ================= */}
        <div
          className="
            w-[470px] 
            h-[48px] 
            bg-[#D4D4D4] 
            rounded-[50px] 
            flex 
            items-center 
            justify-center 
            gap-[44px] 
            px-[45px] 
            py-[8px]
          "
        >
          <span className="text-[16px] font-medium text-black">AI</span>
          <span className="text-[16px] font-medium text-black">Services</span>
          <span className="text-[16px] font-medium text-black">Our Work</span>
          <span className="text-[16px] font-medium text-black">Team</span>
        </div>

        {/* ================= CONTACT BUTTON ================= */}
        <button
          className="
            w-[224px] 
            h-[48px] 
            bg-[#334155] 
            text-white 
            rounded-[16px] 
            flex 
            items-center 
            justify-center 
            text-[16px] 
            font-medium
          "
        >
          Contact Us
        </button>

      </div>
    </nav>
  );
}