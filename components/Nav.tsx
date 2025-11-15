import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
    {
      name: "Waitlist",
      href: "/waitlist",
    },
  ];
  return (
    
    <div className="flex flex-row items-center justify-between w-[90%] max-w-[1080px] mx-auto bg-quaternary/10 border border-green-500/10 backdrop-blur-sm rounded-lg px-4 py-2 fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-row items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </div>
      </div>

      <div className="flex items-center gap-7 max-sm:hidden">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="hover:text-white transition-colors duration-300 text-denary text-sm"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="bg-bg-primary rounded-lg p-2 border border-denary/20 max-sm:block hidden text-white">
        <RxHamburgerMenu size={25} />
      </div>

      <Link
        href="/waitlist"
        className="max-sm:hidden rounded-lg px-7 py-2 overflow-hidden group bg-green-700 relative hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative text-white font-medium">Login</span>
      </Link>
    </div>
  );
};

export default Nav;
