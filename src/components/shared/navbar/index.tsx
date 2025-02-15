import Link from "next/link";
import React from "react";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Favorite", href: "/favorite" },
  { label: "Profile", href: "/profile" },
];
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-3 px-5 pb-6 pt-5">
        <Link href="">cookShow</Link>
        <div className="space-x-5">
          {NavItems.map(({ label, href }, i) => (
            <Link key={i} href={href}>
              {label}
            </Link>
          ))}
          <button>Logout</button>
        </div>
      </div>
      <hr className="w-full bg-black" />
    </div>
  );
};

export default Navbar;
