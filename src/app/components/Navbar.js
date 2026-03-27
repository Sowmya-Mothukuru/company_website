"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (variant === "hero") {
        const triggerHeight = window.innerHeight * 0.8;
        setScrolled(window.scrollY > triggerHeight);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);
 const navItemClass = (path) => `
  flex items-center justify-center
  h-[32px] xl:h-[36px]
  px-[16px]
  rounded-[24px]
  text-[13px] xl:text-[14px]
  font-[500]
  whitespace-nowrap
  transition-all duration-300
  ${
    pathname === path
      ? "bg-[#334155] text-white"
      : "text-[#2F3E4E]"
  }
`;
  return (
<nav
 className={`
  w-full h-[180px] xl:h-[213px] z-50 
  ${
   variant === "hero"
    ? scrolled
     ? "fixed top-0 left-0"
     : "absolute top-0 left-0"
    : "fixed top-0 left-0"
  }
 ${isHome && !scrolled ? "bg-transparent" : scrolled ? "bg-transparent" : "bg-[#F8FBFF]"}
 `}
>
   {(!isHome || scrolled) && (
    <img
     src="/images/nav-bag.svg"
     alt="nav bg"
     className="absolute top-0 left-0 w-full h-[120%] object-cover z-0"
    />
   )}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="absolute top-[28px] xl:top-[32px] left-[20px] xl:left-[37px] z-20"
        >
          <img
            src="/icons/Logo.svg"
            alt="logo"
            className="w-[150px] xl:w-[196px] h-auto"
          />
        </Link>
        <div className="absolute top-[30px] xl:top-[33px] left-1/2 -translate-x-1/2 z-10">
     <div
  className="
    flex items-center
    h-[44px] xl:h-[48px]
    px-[8px]
    gap-[8px] xl:gap-[12px]
    bg-white
    rounded-[50px]
    shadow-sm
    w-fit
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
        </div>
        <Link
          href="/contact-us"
          className="
            absolute top-[30px] xl:top-[33px] right-[20px] xl:right-[37px]
            w-[150px] lg:w-[180px] xl:w-[224px]
            h-[44px] xl:h-[48px]
            flex items-center justify-center
            bg-white text-[#334155]
            rounded-[14px] xl:rounded-[16px]
            text-[13px] lg:text-[14px] xl:text-[16px]
            font-[600]
          "
        >
          Contact Us
        </Link>

      </div>
    </nav>
  );
}
