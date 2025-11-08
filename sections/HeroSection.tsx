import React from "react";
import Nav from "@/components/Nav";
import { RxCaretRight } from "react-icons/rx";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="flex flex-col py-5 relative">
 
      <div className="padding-x">
        <Nav />
      </div>

      <div className="padding-x pt-20">
        <div className="w-full  flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#3A3A3A]/20 px-6 py-3 rounded-full flex flex-row items-center gap-2">
              <p className="font-medium text-white">Product update v1.0</p>
              <RxCaretRight size={25} />
            </div>
            <h1 className="text-6xl text-center mt-5 capitalize font-clash">
              Transform documents into <br />{" "}
              <span className="font-medium gradient-text">
                Quizes, Flashcards, Summaries
              </span>
            </h1>
            {/* <h1 className="text-7xl text-center mt-5">
              Unlock Powerful Insights <br />{" "}
              <span className="font-medium animate-text bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                AI Document Analysis
              </span>
            </h1> */}
            <p className="text-center max-w-[700px] mx-auto text-[#AAAAAA]">
              Seamlessly convert your documents into interactive quizzes, concise flashcards, and detailed summaries. Accelerate your learning, and make studying 10X more efficient.
            </p>

            <div className="flex flex-row items-center justify-center gap-4 mt-5">
              <button className="bg-green-800 text-white px-6 py-3 rounded-full font-medium">
                Get started for free
              </button>
              <button className="bg-transparent border border-[#5A5A5A] text-white px-6 py-3 rounded-full font-medium">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full relative stack mt-10">
        <div className="h-full overflow-hidden  self-end">
          <Image
            src="/images/vibesbg2.svg"
            alt="hero-section-image"
            width={1000}
            height={1000}
            className="w-full min-h-[500px] object-cover object-top z-0"
          />
        </div>

        <div className="w-full max-w-[1000px] mx-auto h-[80vh] max-h-[600px] rounded-lg p-2 z-10 bg-[#1E1E1E] self-end">
          <Image
            src="/images/dashpreview1.png"
            alt="hero-section-image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top rounded-lg"
          />
        </div>

        <div className="bg-linear-to-b from-transparent via-black/10 to-background absolute inset-0 z-10"></div>
      </div>

    </div>
  );
};

export default HeroSection;
