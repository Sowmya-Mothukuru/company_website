"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    <>
      {/* NAVBAR */}
      <nav
        className={`
          w-full z-50 h-[110px] xl:h-[200px]
          ${
            variant === "hero"
              ? scrolled
                ? "fixed top-0 left-0"
                : "absolute top-0 left-0"
              : "fixed top-0 left-0"
          }
          bg-transparent
          overflow-hidden
        `}
      >
        {/* ✅ SVG BACKGROUND (FIXED + FIGMA MATCH) */}
        {(!isHome || scrolled) && (
          <img
            src="/images/nav-bag.svg"
            alt="nav bg"
            className="
              absolute 
              -top-[2px] left-0 
              w-full h-[110%] xl:h-[120%] 
              object-cover 
              object-top
              pointer-events-none 
              select-none
            "
            draggable={false}
          />
        )}

        {/* CONTENT */}
        <div className="relative max-w-[1440px] mx-auto h-full flex items-start justify-between px-4 sm:px-6 lg:px-10 xl:px-16 pt-4">

          {/* LOGO */}
          <Link href="/">
            <img
              src="/icons/Logo.svg"
              alt="logo"
              className="h-[32px] xl:h-[44px]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center bg-white rounded-[50px] px-4 py-2 shadow-sm gap-4">
            <Link href="/ai-services" className={navItemClass("/ai-services")}>AI</Link>
            <Link href="/services" className={navItemClass("/services")}>Services</Link>
            <Link href="/our-work" className={navItemClass("/our-work")}>Our Work</Link>
            <Link href="/team" className={navItemClass("/team")}>Team</Link>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact-us"
            className="hidden lg:flex items-center justify-center bg-white px-4 py-2 rounded-lg shadow-sm"
          >
            Contact Us
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <img src="/icons/sidebar.svg" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white z-[9999] transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 text-[#1E293B]">
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col gap-5 px-6 mt-4 text-[#1E293B]">
          <Link href="/ai-services" onClick={() => setSidebarOpen(false)}>AI</Link>
          <Link href="/services" onClick={() => setSidebarOpen(false)}>Services</Link>
          <Link href="/our-work" onClick={() => setSidebarOpen(false)}>Our Work</Link>
          <Link href="/team" onClick={() => setSidebarOpen(false)}>Team</Link>

          <Link
            href="/contact-us"
            onClick={() => setSidebarOpen(false)}
            className="bg-[#334155] text-white px-4 py-2 rounded-lg text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[9998]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}