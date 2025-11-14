"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GiStarShuriken } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { appConfig } from "@/constants";
import CircleSpinner from "@/components/loaders/CircleSpinner";
import { addToWaitList } from "@/firebase/services";
import Link from "next/link";
const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faceImages = [
    "/images/faces/face1.jpg",
    "/images/faces/face2.webp",
    "/images/faces/face3.jpeg",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");

    setIsLoading(true);
    const result = await addToWaitList({ email: email as string });
    if (result.success) {
      setError(null);
      setIsSubmitted(true);
    } else {
      setError(result.message || "Something went wrong");
      setIsSubmitted(false);
    }
    setIsLoading(false);
  };
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

      <Link href="/">
        <div className="flex flex-row items-center justify-center gap-2 grayscale">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <h1 className="text-lg font-semibold text-denary">
            {appConfig.appName}
          </h1>
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center gap-5 mt-30 max-sm:mt-20">
        <div className="bg-grey01 rounded-full py-2 pr-4 pl-4 flex flex-row items-center gap-2 border border-denary/20">
          <p className="text-denary  text-sm">
            {appConfig.appName} is Launching Soon
          </p>
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

      <div className="w-full max-w-[700px] mx-auto mt-20  shadow-xl shadow-senary/50 bg-grey01 rounded-xl px-6 py-14">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-2 my-5">
            <p className="text-white sm:text-2xl text-xl font-clash">
              Thank you for joining the waitlist!
            </p>
            <p className="text-denary max-sm:text-sm">
              We will notify you when {appConfig.appName} is released.
            </p>
            <Link
              href="/"
              className="text-bg-primary font-medium text-sm px-4 py-2 rounded-lg bg-senary mt-5"
            >
              Back To Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col  w-full">
            <p className="text-white sm:text-2xl text-xl font-clash font-medium">
              Join the Waitlist
            </p>
            <p className="text-denary max-sm:text-sm">
              Sign up to be one of the first to use {appConfig.appName}
            </p>

            <div className="w-full mt-10 relative h-[45px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-full bg-grey01 rounded-xl py-5 px-4 text-white outline-none border border-denary/20"
                required
                name="email"
              />

              <div className="absolute right-0 inset-y-0 max-sm:hidden">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-full bg-senary text-white flex flex-row items-center gap-2 px-3 sm:px-7 py-2 rounded-lg cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <CircleSpinner size={20} />
                  ) : (
                    <>
                      Get Notified
                      <IoIosArrowRoundForward size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="h-full bg-senary text-white flex flex-row items-center gap-2 px-7 py-3 rounded-xl cursor-pointer text-sm mt-5 sm:hidden justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <CircleSpinner size={20} />
              ) : (
                <>
                  Get Notified
                  <IoIosArrowRoundForward size={20} />
                </>
              )}
            </button>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Page;
