import React from "react";
import BenefitBlock from "@/components/landing/BenefitBlock";
import { IoIosCheckmarkCircleOutline, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const Benefits = () => {
  const quizTypes = [
    { type: "Subjective" },
    { type: "Essay" },
    { type: "Multiple choice" },
  ];

  return (
    <div className="section-container padding-x">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center font-clash">
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
        />

        <BenefitBlock
          imagePath="/images/benefits/benefit3.svg"
          title="Summarize documents with ease"
          description="Upload your PDF, Word, or any document and get a summary based on the content. Export your summary as pdf or take it as an exam on LucidDocs."
          // extraInfo={
          //   <div className="flex flex-col gap-4">
          //     <p className="text-white">Summarize your documents with ease. Our AI will generate a summary of your document based on the content. You can export your summary as a pdf or take it as an exam on LucidDocs.</p>
          //   </div>
          // }
          direction="right"
        />

        <div className="flex flex-row items-center justify-between gap-5 mt-[100px]">
          <div className="flex flex-3 min-h-[400px] bg-green-700 rounded-lg  flex-row items-center gap-4 pl-4 py-6">
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src="/lucidlogowhite.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />

                <p className="text-white  font-medium">LucidDocs AI Chat</p>
              </div>

              <h1 className="text-white text-4xl  font-clash">
                Have conversations <br /> with your documents
              </h1>

              <p className="text-white font-poppins text-sm">Talk to your documents like a human. Our AI agent will generate responses based on the content of the documents you provide.</p>
              <button className="bg-[#1A1A1A] px-6 py-2 text-sm rounded-md font-medium capitalize w-max flex flex-row items-center gap-2">
                Get started <IoIosArrowRoundForward />
              </button>
            </div>

            <div className="flex flex-col flex-1 gap-4">
              <div className="w-full bg-denary rounded-l-lg overflow-hidden h-[300px]">
                <Image
                  src="/images/chatpreview.png"
                  alt="LucidDocs AI Chat"
                  className="w-full h-full object-cover object-left"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 h-[400px]">
            <div className="w-full bg-[#101011] h-full rounded-md"></div>
            <div className="w-full bg-[#101011] h-full rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
