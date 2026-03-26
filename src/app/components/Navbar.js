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
import { useState } from "react";

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className="
          w-full max-w-full overflow-x-hidden
          z-50 h-[120px] xl:h-[213px]
          fixed top-0 left-0
          bg-[#F8FBFF]
        "
      >
        {/* BG IMAGE (ALWAYS VISIBLE) */}
        <img
          src="/images/nav-bag.svg"
          alt="nav bg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* CONTAINER */}
        <div
          className="
            relative max-w-[1440px] w-full mx-auto h-full
            flex items-start justify-between
            px-4 sm:px-6 lg:px-10 xl:px-16
            pt-2 xl:pt-[32px]
            overflow-x-hidden
          "
        >
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center gap-[6px] h-[50px] xl:h-[55px]">
              <img
                src="/icons/Logo.svg"
                alt="logo"
                className="h-[28px] sm:h-[32px] xl:h-[44px] w-auto"
              />
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div
            className="
              hidden lg:flex items-center
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

          {/* CONTACT (DESKTOP ONLY) */}
          <Link
            href="/contact-us"
            className="
              hidden lg:flex items-center justify-center
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

          {/* ================= MOBILE ICON ================= */}
          <button
            className="lg:hidden mt-1"
            onClick={() => setSidebarOpen(true)}
          >
            <img
              src="/icons/sidebar.svg"
              alt="menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[75%] max-w-[300px]
          bg-white z-[9999]
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-4 text-[#1E293B]">
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-5 px-6 mt-4 text-[16px] font-medium text-[#1E293B]">
          <Link href="/ai-services" onClick={() => setSidebarOpen(false)}>AI</Link>
          <Link href="/services" onClick={() => setSidebarOpen(false)}>Services</Link>
          <Link href="/our-work" onClick={() => setSidebarOpen(false)}>Our Work</Link>
          <Link href="/team" onClick={() => setSidebarOpen(false)}>Team</Link>

          <Link
            href="/contact-us"
            onClick={() => setSidebarOpen(false)}
            className="mt-4 bg-[#2F3E4E] text-white px-4 py-2 rounded-lg text-center"
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