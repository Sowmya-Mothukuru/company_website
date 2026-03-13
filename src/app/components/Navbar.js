"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
  `px-4 py-1 rounded-full text-[16px] font-medium whitespace-nowrap transition-all duration-300
  ${
    pathname === path
      ? "bg-[#334155] text-white"
      : "text-black hover:bg-[#334155] hover:text-white"
  }`;
  return (
    <nav className="w-full bg-white sticky top-0 z-50">

      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 py-6">

        {/* ================= LOGO ================= */}
        {/* ================= LOGO ================= */}
<Link href="/">
  <div className="w-[50px] h-[50px] rounded-full overflow-hidden shrink-0 cursor-pointer">
    <img
      src="/logo.png"
      alt="Glitch Brainer Logo"
      className="w-full h-full object-cover"
    />
  </div>
</Link>


        {/* ================= CENTER MENU ================= */}
        <div
          className="
          flex
          items-center
          justify-center
          gap-[32px] lg:gap-[44px]
          px-[30px] lg:px-[45px]
          py-[8px]
          h-[48px]
          bg-[#D4D4D4]
          rounded-[50px]
          max-w-[470px]
          w-full
        "
>
  <Link href="/ai-services" className={linkStyle("/ai-services")}>
  AI
</Link>

<Link href="/services" className={linkStyle("/services")}>
  Services
</Link>

<Link href="/our-work" className={linkStyle("/our-work")}>
  Our Work
</Link>

<Link href="/team" className={linkStyle("/team")}>
  Team
</Link>

        </div>


        {/* ================= CONTACT BUTTON ================= */}
        <Link
          href="/contact-us"
          className="px-[28px] h-[48px] bg-[#334155] text-white rounded-[16px] flex items-center justify-center text-[16px] font-medium whitespace-nowrap"
        >
          Contact Us
        </Link>

      </div>

    </nav>
  );
}