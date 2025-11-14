import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#101011] py-6 mt-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-4">
        <div className="flex flex-row items-center gap-2">
          <Image src="/bearcap.svg" alt="LucidDocs Logo" width={40} height={40} />
          <span className="text-white font-clash text-lg font-medium">LucidDocs</span>
        </div>
        <div className="text-gray-400 text-sm font-poppins text-center md:text-right">
          &copy; {new Date().getFullYear()} LucidDocs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
