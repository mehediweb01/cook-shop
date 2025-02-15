"use client";
import { cn } from "@/lib/utils";
import { Neucha } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "Profile", href: "/profile" },
];
const navItemsClassName =
  "font-fredoka text-sm sm:text-base active:font-medium";
export const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex justify-between items-center gap-3 px-3 sm:px-5 pb-6 pt-5">
        <Link href="/" className="text-3xl font-bold">
          cook<span className="text-[#FF7A00]">Show</span>
        </Link>
        <div className="space-x-3 sm:space-x-5">
          {NavItems.map(({ label, href }, i) => (
            <Link
              key={i}
              href={href}
              className={cn(
                navItemsClassName,
                pathName === href &&
                  "font-medium pb-[26px] border-b-2 border-[#FF7A00]"
              )}
            >
              {label}
            </Link>
          ))}
          <button className={navItemsClassName}>Logout</button>
        </div>
      </div>
      <hr className="bg-[#D2D2D2]" />
    </div>
  );
};
