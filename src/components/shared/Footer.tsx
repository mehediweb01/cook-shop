import { IChildrenClassName } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

const Item: FC<IChildrenClassName> = ({ className, children }) => (
  <div className={cn("flex flex-col items-end gap-3", className)}>
    <h2 className="text-sm font-medium">{children}</h2>
    <hr className="w-[183px] bg-slate-400" />
  </div>
);

export const Footer = () => {
  return (
    <footer>
      <hr className="bg-slate-500" />
      <div className="max-w-[650px] sm:mx-auto mx-5 font-poppins text-slate-400 my-5">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-start sm:items-center justify-between">
          <Item className="sm:items-end items-start">@2023 cook-show</Item>
          <p className="sm:-mb-5 mb-0">cook your way</p>
          <Item className="items-start">All Rights Reserved</Item>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 justify-between items-start sm:items-center mt-8 sm:mt-4">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="hover:text-slate-600 hover:font-semibold transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const items = [
  {
    label: "Who are you",
    link: "/",
  },
  {
    label: "Terms",
    link: "/",
  },
  {
    label: "Privacy",
    link: "/",
  },
  {
    label: "Contact us",
    link: "/",
  },
];
