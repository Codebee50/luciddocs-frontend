import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  return (
    <div className="flex flex-row justify-between w-full max-w-[1000px] mx-auto bg-background-500/10 border border-green-500/20 backdrop-blur-sm rounded-lg px-4 py-2">
      <div className="flex flex-row items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/lucidlogo.svg" alt="logo" width={30} height={30} />
        </div>
      </div>

      <div className="flex items-center gap-5">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="font-clash hover:text-green-500 transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* <Link
        href="/login"
        className="font-clash bg-green-500 px-6 py-2 rounded-lg text-background font-medium"
      >
        Login
      </Link> */}

      {/* <Link
        href="/login"
        className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-600/30 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Login</span>
      </Link> */}

      <Link
        href="/login"
        className="relative rounded px-7 py-2 overflow-hidden group bg-green-800 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative text-white font-medium">Login</span>
      </Link>
    </div>
  );
};

export default Nav;
