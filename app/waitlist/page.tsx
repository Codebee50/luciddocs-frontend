"use client";

import React from "react";
import Image from "next/image";
import { GiStarShuriken } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {
  const faceImages = [
    "/images/faces/face1.jpg",
    "/images/faces/face2.webp",
    "/images/faces/face3.jpeg",
  ];
  return (
    <div className="relative padding-x py-10 flex flex-col items-center min-h-screen overflow-hidden">
      {/* Grid lines background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.017) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="flex flex-row items-center justify-center gap-2 grayscale">
        <Image src="/lucidlogo.svg" alt="logo" width={30} height={30} />
        <h1 className="text-lg font-semibold text-denary">LucidDocs</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-30 max-sm:mt-20">
        <div className="bg-grey01 rounded-full py-2 pr-4 pl-4 flex flex-row items-center gap-2 border border-denary/20">
          <p className="text-denary  text-sm">LucidDocs is Launching Soon</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          <h1 className="text-white sm:text-5xl text-3xl font-clash text-center">
            Ready to start Learning <br />{" "}
            <span className="gradient-text"> Like never before?</span>
          </h1>
          <p className="text-denary text-center max-w-[350px] mt-3 max-sm:text-sm">
            Get early access to our upcoming release and secure your spot on the
            waitlist.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[700px] mx-auto mt-20  shadow-xl shadow-senary/50 bg-grey01 rounded-xl p-6">
        <div className="flex flex-row items-center -space-x-3">
          {faceImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.22 + index * 0.07,
                duration: 0.38,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={image}
                alt="Face"
                width={50}
                height={50}
                className="rounded-full shrink-0 w-[40px] h-[40px] object-cover border-2 border-white"
              />
            </motion.div>
          ))}

          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <p className="text-background text-sm">+3</p>
          </div>
        </div>

        <div className="flex flex-col mt-5 w-full">
          <p className="text-white sm:text-2xl text-xl font-clash font-medium">
            Join the Waitlist
          </p>
          <p className="text-denary max-sm:text-sm">
            Sign up to be one of the first to use LucidDocs
          </p>

          <div className="w-full mt-10 relative h-[60px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-full bg-grey01 rounded-xl py-5 px-4 text-white outline-none border border-denary/20"
            />

            <div className="absolute right-0 inset-y-0 max-sm:hidden">
              <button className="h-full bg-senary text-white flex flex-row items-center gap-2 px-3 sm:px-7 py-2 rounded-xl cursor-pointer text-sm">
                Get Notified
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>

          <button className="h-full bg-senary text-white flex flex-row items-center gap-2 px-7 py-3 rounded-xl cursor-pointer text-sm mt-5 sm:hidden justify-center">
            Get Notified
            <IoIosArrowRoundForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
