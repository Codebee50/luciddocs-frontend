"use client";
import React from "react";
import BenefitBlock from "@/components/landing/BenefitBlock";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import Image from "next/image";
import { motion} from "framer-motion";
import FlashcardLandingPageDemo from "@/components/landing/FlashcardLandingPageDemo";
import SummarizeContentIllustration from "@/components/landing/SummarizeContentIllustration";

const Benefits = () => {
  const quizTypes = [
    { type: "Subjective" },
    { type: "Essay" },
    { type: "Multiple choice" },
  ];

  return (
    <div className="section-container padding-x">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-2xl text-center font-clash">
          How People use LucidDocs to <br />
          <span className="gradient-text">study smarter, not harder</span>
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <BenefitBlock
          imagePath="/images/benefits/benefit4.svg"
          title="Transform documents into quizzes"
          description="Upload your PDF, Word, or any document and get a quiz based on the content. Export your quiz as pdf or take it as an exam on LucidDocs."
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
