"use client";
import React from "react";
import BenefitBlock from "@/components/landing/BenefitBlock";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import FlashcardLandingPageDemo from "@/components/landing/FlashcardLandingPageDemo";
import SummarizeContentIllustration from "@/components/landing/SummarizeContentIllustration";
import GenerateQuizIllustrationContent from "@/components/landing/GenerateQuizIllustrationContent";
import Marquee from "@/components/Marquee";
import { RiFlashlightFill } from "react-icons/ri";
import { appConfig } from "@/constants";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Benefits = () => {
  const quizTypes = [
    { type: "Subjective" },
    { type: "Essay" },
    { type: "Multiple choice" },
  ];

  return (
    <div className="section-container  bg-bg-primary w-full scroll-mt-[70px]" id="about">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-2xl text-center font-clash">
          How People use {appConfig.appName} to <br />
          <span className="gradient-text">Study smarter, not harder</span>
        </h2>
      </div>

      <div className="w-full bg-bg-primary grid grid-cols-1 md:grid-cols-2 gap-0 mt-20">
        <div className="border-t md:border-r border-b border-denary/10 max-sm:py-12 sm:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white sm:text-2xl text-xl font-medium ">
              From document to quiz in seconds.
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a quiz based on the
              content. Export your quiz as pdf or take it as an exam on
              {appConfig.appName}.
            </p>
          </div>

          <div className="w-full mt-10 relative">
            <Image
              src="/images/bgroup/mcqs.svg"
              alt="quiz"
              width={500}
              height={500}
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bg-primary z-20"></div>
          </div>
        </div>

        <div className="border-t border-b border-denary/10 max-sm:py-12 sm:p-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-white sm:text-2xl text-xl font-medium">
              Summarize documents with ease
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a summary based on
              the content. Export your summary as pdf or take it as an exam on
              {appConfig.appName}.
            </p>
          </div>

          <div className="w-full mt-10 relative">
            <Image
              src="/images/bgroup/summary.svg"
              alt="quiz"
              width={500}
              height={500}
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bg-primary z-20"></div>
          </div>
        </div>
      </div>

      <div className="w-full bg-bg-primary grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div className="border-t md:border-r border-b border-denary/10 max-sm:py-12 sm:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white sm:text-2xl text-xl font-medium">
              Have conversations with your documents{" "}
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a quiz based on the
              content. Export your quiz as pdf or take it as an exam on
              {appConfig.appName}.
            </p>
          </div>

          <div className="w-full mt-10 relative">
            <Image
              src="/images/bgroup/askanything.svg"
              alt="quiz"
              width={500}
              height={500}
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bg-primary z-20"></div>
          </div>
        </div>

        <div className="border-t border-b border-denary/10 max-sm:py-12 sm:p-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-white sm:text-2xl text-xl font-medium">
              Generate flashcards from your documents
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a summary based on
              the content. Export your summary as pdf or take it as an exam on
              {appConfig.appName}.
            </p>
          </div>

          <div className="relative mt-14 w-full stack">
            <div className="w-[80%] bg-quaternary h-[200px] flex flex-row items-center justify-center -mt-6 mx-auto rounded-2xl"></div>
            <div className="w-[90%] bg-card-gray h-[200px] flex flex-row items-center justify-center -mt-3 mx-auto rounded-2xl"></div>

            <div className="w-full h-[200px] bg-card-gray rounded-lg flex flex-col p-5 justify-between">
              <div className="flex flex-row items-center gap-5">
                <div className="bg-senary/20 rounded-full p-2">
                  <RiFlashlightFill className="text-senary" />
                </div>
                <p className="text-senary font-medium">Card - 10118</p>
              </div>

              <div>
                <p className="text-white text-center font-medium">
                  When was the first version of React released?
                </p>
              </div>

              <div className="flex flex-row items-center justify-center gap-2 font-light text-sm">
                <p>See answer </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bg-primary z-20"></div>
          </div>

          {/* <div className="w-full mt-10 relative flashcards-container">
            <Image
              src="/images/bgroup/summary.svg"
              alt="quiz"
              width={500}
              height={500}
              className="flashcard-card"
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bg-primary z-20"></div>
          </div> */}
        </div>
      </div>

   
    </div>
  );
};

export default Benefits;
