import Image from "next/image";
import React from "react";
import { appConfig } from "@/constants";
const Footer = () => {
  return (
    <footer className="w-full bg-[#101011] py-6 mt-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-4">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${appConfig.appName} Logo`}
            width={40}
            height={40}
          />
          <span className="text-white font-clash text-lg font-medium">
            {appConfig.appName}
          </span>
        </div>
        <div className="text-gray-400 text-sm font-poppins text-center md:text-right">
          &copy; {new Date().getFullYear()} {appConfig.appName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
