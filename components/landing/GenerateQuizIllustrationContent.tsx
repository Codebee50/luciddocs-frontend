import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { div } from "framer-motion/m";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const GenerateQuizIllustrationContent = () => {
  const fileImageList = [
    "/pdf-file-format.png",
    "/txt-file.png",
    "/docx-file.png",
  ];

  const multipleChoiceQuiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: [
        "William Wordsworth",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the largest continent by area?",
      options: ["Europe", "Africa", "Asia", "South America"],
      answer: "Asia",
    },
  ];
  return (
    <div className="w-full flex flex-row items-center justify-between gap-2 bg-grey01 rounded-xl     p-5">
      <div className="flex flex-col items-center justify-center gap-4">
        {fileImageList.map((file) => (
          <Image src={file} key={file} alt="file" width={50} height={50} />
        ))}
      </div>

      <div>
        <GoArrowRight className="text-senary" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-5 max-h-[300px] overflow-y-scroll no-scrollbar">
          {multipleChoiceQuiz.map((quiz, index) => (
            <div key={quiz.question}>
              <p className="text-denary font-medium font-clash">
                Question {index + 1}:
              </p>
              <p className="text-white  font-medium font-poppins">
                {quiz.question}
              </p>
              <div>
                {quiz.options.map((option) => (
                  <div key={option} className="flex flex-row items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-denary/30">

                    </div>
                    <p className="text-white font-poppins text-sm font-stretch-condensed">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateQuizIllustrationContent;
