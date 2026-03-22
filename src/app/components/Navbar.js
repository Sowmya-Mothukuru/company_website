"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `px-4 py-1 rounded-full text-[15px] md:text-[16px] font-medium whitespace-nowrap transition-all duration-300
    ${
      pathname === path
        ? "bg-[#334155] text-white"
        : variant === "hero"
        ? "text-[#2F3E4E] hover:bg-[#334155] hover:text-white"
        : "text-black hover:bg-[#334155] hover:text-white"
    }`;

  return (
   // <nav className="relative w-full z-50">
   <nav className={`w-full z-50 ${variant !== "hero" ? "sticky top-0" : "relative"}`}>

      {/* BACKGROUND (only for inner pages) */}
      {variant !== "hero" && (
        <img
          src="/images/nav-bag.svg"
          alt="nav bg"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
        />
      )}

      {/* CONTENT */}
      <div className="
        relative
        max-w-[1440px]
        mx-auto
        flex items-center justify-between
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
        pt-4 md:pt-6 pb-6
      ">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-[36px] md:w-[44px]" />
            <span className={`font-semibold tracking-wide hidden sm:block ${
              variant === "hero" ? "text-white" : "text-white"
            }`}>
              GLITCH BRAINER
            </span>
          </div>
        </Link>

        {/* MENU */}
        <div className="
          flex items-center
          gap-2 md:gap-4 lg:gap-6
          px-4 md:px-6 lg:px-8
          py-1
          h-[40px] md:h-[48px]
          bg-white/90
          backdrop-blur-md
          rounded-full
          shadow-sm
          flex-shrink-0
        ">
          <Link href="/ai-services" className={linkStyle("/ai-services")}>AI</Link>
          <Link href="/services" className={linkStyle("/services")}>Services</Link>
          <Link href="/our-work" className={linkStyle("/our-work")}>Our Work</Link>
          <Link href="/team" className={linkStyle("/team")}>Team</Link>
        </div>

        {/* BUTTON */}
        <Link
          href="/contact-us"
          className={`
            px-4 md:px-6 lg:px-[28px]
            h-[40px] md:h-[48px]
            text-sm md:text-base
            rounded-[12px] md:rounded-[16px]
            flex items-center justify-center
            font-medium
            ${
              variant === "hero"
                ? "bg-white text-[#2F3E4E]"
                : "bg-white text-[#2F3E4E]"
            }
          `}
        >
          Contact Us
        </Link>

      </div>
    </nav>
  );
}