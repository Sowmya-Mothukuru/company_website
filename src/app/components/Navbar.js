/*"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();

  // ✅ Responsive nav item
  const navItemClass = (path) => `
    flex items-center justify-center
    h-[34px] xl:h-[38px]
    px-[12px] xl:px-[18px]
    rounded-[24px]
    text-[14px] xl:text-[15px]
    font-[500]
    whitespace-nowrap
    transition-all duration-300
    ${
      pathname === path
        ? "bg-[#334155] text-white px-[20px] xl:px-[48px]"
        : "text-[#2F3E4E] hover:bg-gray-200"
    }
  `;
return (
  <nav
  className={`
    w-full z-50 h-[120px] xl:h-[213px]
    
    ${variant !== "hero" ? "fixed top-0 left-0" : "relative"}
  `}
  >
      {variant !== "hero" && (
        <img
          src="/images/nav-bag.svg"
          alt="nav bg"
          className="absolute top-0 left-0 w-full h-[120%] object-cover"
        />
      )}
      <div className="
        relative max-w-[1440px] mx-auto h-full
        flex items-start justify-between
        px-4 sm:px-6 lg:px-10 xl:px-16
        pt-[24px] xl:pt-[32px]
      ">
        <Link href="/">
          <div className="flex items-center gap-[6px] h-[50px] xl:h-[55px]">

            <img
              src="/icons/Logo.svg"
              alt="logo icon"
              className="h-[36px] xl:h-[44px] w-auto"
            />

          </div>
        </Link>
       <div className="
  flex items-center
  w-auto
  min-w-[380px] xl:min-w-[498px]
  h-[44px] xl:h-[48px]
  px-[12px] xl:px-[18px]
  gap-[16px] lg:gap-[24px] xl:gap-[42px]
  bg-white backdrop-blur-md
  rounded-[50px]
  shadow-sm
">

          <Link href="/ai-services" className={navItemClass("/ai-services")}>
            AI
          </Link>

          <Link href="/services" className={navItemClass("/services")}>
            Services
          </Link>

          <Link href="/our-work" className={navItemClass("/our-work")}>
            Our Work
          </Link>

          <Link href="/team" className={navItemClass("/team")}>
            Team
          </Link>

        </div>
        <Link
          href="/contact-us"
          className="
            flex items-center justify-center
            w-[140px] lg:w-[180px] xl:w-[224px]
            h-[44px] xl:h-[48px]
            px-[12px] xl:px-[18px]
            rounded-[14px] xl:rounded-[16px]
            bg-white text-[#2F3E4E]
            font-[500]
            text-[14px] xl:text-[15px]
            shadow-sm
            hover:bg-gray-100
            transition-all
          "
        >
          Contact Us
        </Link>

      </div>
    </nav>
  );
}*/ 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/"; // ✅ check homepage

  useEffect(() => {
  const handleScroll = () => {
    if (variant === "hero") {
      const triggerHeight = window.innerHeight * 0.8; 
      // 🔥 adjust this (0.7, 0.8, 0.9)

      setScrolled(window.scrollY > triggerHeight);
    } else {
      setScrolled(true); // other pages always show bg
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [variant]);

  const navItemClass = (path) => `
    flex items-center justify-center
    h-[34px] xl:h-[38px]
    px-[10px] xl:px-[15px]
    rounded-[24px]
    text-[14px] xl:text-[15px]
    font-[500]
    whitespace-nowrap
    transition-all duration-300
    ${
      pathname === path
        ? "bg-[#334155] text-white px-[20px] xl:px-[48px]"
        : "text-[#2F3E4E] hover:bg-gray-200"
    }
  `;

  return (
    <nav
      className={`
        w-full z-50 h-[120px] xl:h-[213px] 
       
       ${isHome
  ? scrolled
    ? "fixed top-0 left-0 bg-[#F8FBFF]"
      : "fixed top-0 left-0"
  : "fixed top-0 left-0 bg-[#F8FBFF]"}
      `}
    >
      {/* ✅ Homepage → show bg only after scroll */}
      {isHome && scrolled && (
        <img
          src="/images/nav-bag.svg"
          alt="nav bg"
         className="absolute top-0 left-0 w-full h-[120%] object-cover bg-[#F8FBFF]"
        />
      )}

      {/* ✅ Other pages → always show bg (OLD behavior) */}
      {!isHome && (
        <img
          src="/images/nav-bag.svg"
          alt="nav bg"
          className="absolute top-0 left-0 w-full h-[120%] object-cover"
          
        />
      )}

      <div
        className="
          relative max-w-[1440px] mx-auto h-full
          flex items-start justify-between
          px-4 sm:px-6 lg:px-10 xl:px-16
          pt-[24px] xl:pt-[32px]
        "
      >
        <Link href="/">
          <div className="flex items-center gap-[6px] h-[50px] xl:h-[55px]">
            <img
              src="/icons/Logo.svg"
              alt="logo icon"
              className="h-[36px] xl:h-[44px] w-auto"
            />
          </div>
        </Link>

        {/* MENU */}
        <div
          className="
            flex items-center
            w-auto
            min-w-[380px] xl:min-w-[498px]
            h-[44px] xl:h-[48px]
            px-[12px] xl:px-[18px]
            gap-[16px] lg:gap-[24px] xl:gap-[42px]
            bg-white backdrop-blur-md
            rounded-[50px]
            shadow-sm
          "
        >
          <Link href="/ai-services" className={navItemClass("/ai-services")}>
            AI
          </Link>

          <Link href="/services" className={navItemClass("/services")}>
            Services
          </Link>

          <Link href="/our-work" className={navItemClass("/our-work")}>
            Our Work
          </Link>

          <Link href="/team" className={navItemClass("/team")}>
            Team
          </Link>
        </div>

        {/* CONTACT */}
        <Link
          href="/contact-us"
          className="
            flex items-center justify-center
            w-[140px] lg:w-[180px] xl:w-[224px]
            h-[44px] xl:h-[48px]
            px-[12px] xl:px-[18px]
            rounded-[14px] xl:rounded-[16px]
            bg-white text-[#2F3E4E]
            font-[500]
            text-[14px] xl:text-[15px]
            shadow-sm
            hover:bg-gray-100
            transition-all
          "
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}