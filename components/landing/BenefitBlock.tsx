import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const BenefitBlock = ({
  imagePath,
  title,
  description,
  extraInfo,
  direction
}: {
  imagePath: string;
  title: string;
  description: string;
  extraInfo: React.ReactNode;
  direction: "left" | "right";
}) => {
  return (
    <div className="flex flex-col gap-5 mt-[100px]">
      <div className={`flex flex-row items-center justify-between gap-10 ${direction === "right" ? "flex-row-reverse" : ""}`}>
        <div className="relative w-full flex-1">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 0 }}
          >
            <div
              className="rounded-full w-[300px] h-[300px]"
              style={{
                filter: "blur(70px)",
                background: "rgba(34,197,94,0.21)",
              }}
            />
          </div>
          <div className="relative z-10 overflow-hidden">
            <Image
              src={imagePath}
              alt="quiz"
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <h2 className="text-3xl font-medium font-clash">{title}</h2>
          <p className="text-denary font-poppins">{description}</p>

          {extraInfo}

          <button className="bg-[#1A1A1A] px-6 py-2 mt-5 rounded-md font-medium capitalize w-max flex flex-row items-center gap-2">
            Learn more <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitBlock;
