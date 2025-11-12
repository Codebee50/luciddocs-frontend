"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const blurBGVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.18 },
  },
};

const flipCardVariants: Variants = {
  front: {
    rotateY: 0,
    transition: { duration: 0.42, ease: "easeInOut" },
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.42, ease: "easeInOut" },
  },
};

const ArrowButton = ({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="w-10 h-10 bg-grey01 border border-denary/30 shrink-0 rounded-full flex items-center justify-center cursor-pointer hover:bg-senary/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {icon}
    </motion.div>
  );
};

const FlashcardLandingPageDemo = () => {
  const [selectedFlashcard, setSelectedFlashcard] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H₂O",
    },
    {
      question: "What year did the World War II end?",
      answer: "1945",
    },
    {
      question: "What is the fastest land animal?",
      answer: "Cheetah",
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the square root of 64?",
      answer: "8",
    },
    {
      question: "What language is primarily spoken in Brazil?",
      answer: "Portuguese",
    },
    {
      question: "What is the process of plants making food called?",
      answer: "Photosynthesis",
    },
  ];

  const handleNextFlashcard = (): void => {
    if (selectedFlashcard < flashcards.length - 1) {
      setSelectedFlashcard(selectedFlashcard + 1);
      setIsFlipped(false);
    }
  };

  const handlePreviousFlashcard = (): void => {
    if (selectedFlashcard > 0) {
      setSelectedFlashcard(selectedFlashcard - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped((f) => !f);
  };

  return (
    <div className="w-full">
      <div className="w-full relative bg-background border border-denary/10 p-4 sm:p-10 to-transparent rounded-lg">
        {/* <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 0 }}
          variants={blurBGVariant}
        >
          <div
            className="rounded-full w-[300px] h-[300px]"
            style={{
              filter: "blur(70px)",
              background: "rgba(34,197,94,0.21)",
            }}
          />
        </motion.div> */}

        <div className="w-full flex flex-row items-center justify-between z-20 gap-4 sm:gap-10">
          <ArrowButton
            icon={<GoArrowLeft />}
            onClick={handlePreviousFlashcard}
          />

          <div className="w-full stack">
            <div className="w-[80%] bg-gray-600 h-[200px] flex flex-row items-center justify-center mt-6 mx-auto rounded-b-2xl"></div>
            <div className="w-[90%] bg-gray-900 h-[200px] flex flex-row items-center justify-center mt-3 mx-auto rounded-b-2xl"></div>

            <motion.div
              className="w-full h-[200px] bg-black flex flex-col items-center justify-between py-10 px-4 rounded-3xl"
              variants={flipCardVariants}
              initial={false}
              animate={isFlipped ? "back" : "front"}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                willChange: "transform",
                position: "relative",
              }}
            >
              {/* Card front */}
              <div
                className="absolute w-full h-full top-0 left-0 flex flex-col items-center px-4 justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  zIndex: 2,
                }}
              >
                <p className="text-xl sm:text-2xl font-medium text-center font-clash text-denary">
                  {flashcards[selectedFlashcard].question}
                </p>
                <p
                  className="mt-5 text-sm text-denary/70 cursor-pointer font-light"
                  onClick={handleFlip}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isFlipped}
                >
                  See answer
                </p>
              </div>
              {/* Card back */}
              <div
                className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  zIndex: 3,
                }}
              >
                <p className="text-white text-2xl font-medium text-center font-clash gradient-text">
                  {flashcards[selectedFlashcard].answer}
                </p>
                <p
                  className="mt-5 text-sm text-denary cursor-pointer font-light"
                  onClick={handleFlip}
                  tabIndex={0}
                  role="button"
                  aria-pressed={!isFlipped}
                >
                  See question
                </p>
              </div>
            </motion.div>
          </div>
          <ArrowButton icon={<GoArrowRight />} onClick={handleNextFlashcard} />
        </div>
      </div>
    </div>
  );
};

export default FlashcardLandingPageDemo;
