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
          How People use LucidDocs to <br />
          <span className="gradient-text">Study smarter, not harder</span>
        </h2>
      </div>

      <div className="w-full bg-bg-primary grid grid-cols-1 md:grid-cols-2 gap-0 mt-20">
        <div className="border-t md:border-r border-b border-denary/10 max-sm:py-7 sm:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-medium font-clash">
              From document to quiz in seconds.
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a quiz based on the
              content. Export your quiz as pdf or take it as an exam on
              LucidDocs.
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

        <div className="border-t border-b border-denary/10 max-sm:py-7 sm:p-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-medium font-clash">
              Summarize documents with ease
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a summary based on
              the content. Export your summary as pdf or take it as an exam on
              LucidDocs.
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
        <div className="border-t md:border-r border-b border-denary/10 max-sm:py-7 sm:p-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-medium font-clash">
              Have conversations with your documents{" "}
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a quiz based on the
              content. Export your quiz as pdf or take it as an exam on
              LucidDocs.
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

        <div className="border-t border-b border-denary/10 max-sm:py-7 sm:p-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-medium font-clash">
              Generate flashcards from your documents
            </h1>
            <p className="text-denary/70 font-poppins text-sm">
              Upload your PDF, Word, or any document and get a summary based on
              the content. Export your summary as pdf or take it as an exam on
              LucidDocs.
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

      <div className="flex-col gap-10 hidden">
        <BenefitBlock
          imagePath="/images/benefits/benefit3.svg"
          title="Summarize documents with ease"
          description="Upload your PDF, Word, or any document and get a summary based on the content. Export your summary as pdf or take it as an exam on LucidDocs."
          direction="right"
          illustrationContent={<SummarizeContentIllustration />}
        />
        <BenefitBlock
          illustrationContent={<FlashcardLandingPageDemo />}
          title="Generate flashcards from your documents"
          description="Upload your PDF, Word, or any document and get a flashcard based on the content. Export your flashcard as pdf or take it as an exam on LucidDocs."
          direction="left"
        />

        <BenefitBlock
          imagePath="/images/benefits/benefit4.svg"
          title="From document to quiz in seconds."
          description="Upload your PDF, Word, or any document and get a quiz based on the content. Export your quiz as pdf or take it as an exam on LucidDocs."
          // illustrationContent={<GenerateQuizIllustrationContent />}
          extraInfo={
            <div className="flex flex-col gap-4">
              {quizTypes.map((quiz) => (
                <div
                  key={quiz.type}
                  className="flex flex-row items-center gap-2"
                >
                  <IoIosCheckmarkCircleOutline className="text-green-500" />
                  <p className="text-white font-poppins">{quiz.type}</p>
                </div>
              ))}
            </div>
          }
          direction="left"
        />

        <motion.div
          className="flex flex-row items-center justify-between gap-5 mt-[100px]"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            className="flex flex-3 min-h-[400px] bg-[#101011] rounded-lg flex-col md:flex-row items-center gap-4 pl-8"
            initial={{ opacity: 0, scale: 0.97, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="flex flex-col flex-1 gap-6 py-7"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex flex-row items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  src="/lucidlogowhite.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
                <motion.p
                  className="text-white  font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.32 }}
                >
                  LucidDocs AI Chat
                </motion.p>
              </motion.div>

              <motion.h1
                className="text-white text-2xl sm:text-4xl font-clash gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.34 }}
              >
                Have conversations <br /> with your documents
              </motion.h1>

              <motion.p
                className="text-white font-poppins text-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
              >
                Talk to your documents like a human. Our AI agent will generate
                responses based on the content of the documents you provide.
              </motion.p>
              <motion.button
                className="bg-[#1A1A1A] px-6 py-2 text-sm rounded-md font-medium capitalize w-max flex flex-row items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#242424" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.55 }}
              >
                Get started <IoIosArrowRoundForward />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-col flex-1 gap-4"
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true, amount: 0.38 }}
            >
              <motion.div
                className="w-full h-full bg-grey01 overflow-hidden"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.68, delay: 0.35, ease: "easeOut" }}
              >
                <motion.div
                  className="w-full bg-radial from-senary to-background overflow-hidden h-[400px] pl-9 pt-9"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
                >
                  <Image
                    src="/images/chatpreview.png"
                    alt="LucidDocs AI Chat"
                    className="w-full h-full object-cover object-top-left rounded-tl-lg"
                    width={500}
                    height={500}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
