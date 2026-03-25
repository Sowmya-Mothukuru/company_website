"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar variant={isHome ? "hero" : "default"} />

      <div className={`${!isHome ? "pt-[180px] xl:pt-[213px]" : ""}`}>
        {children}
      </div>
    </>
  );
}