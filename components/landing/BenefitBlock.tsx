"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.93, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const blurBGVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.18 },
  },
};

const BenefitBlock = ({
  imagePath,
  title,
  description,
  extraInfo,
  direction,
  illustrationContent,
}: {
  imagePath?: string;
  title: string;
  description: string;
  extraInfo?: React.ReactNode;
  direction: "left" | "right";
  illustrationContent?: React.ReactNode;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-5 mt-[100px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
          direction === "right" ? "flex-col md:flex-row-reverse" : ""
        }`}
      >
        {illustrationContent ? (
          <div className="w-full flex-1">{illustrationContent}</div>
        ) : (
          <motion.div
            className="relative w-full flex-1"
            variants={imageVariant}
          >
            <motion.div
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
            </motion.div>
            <motion.div
              className="relative z-10 overflow-hidden"
              variants={imageVariant}
            >
              <Image
                src={imagePath || ""}
                alt="quiz"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="flex flex-col gap-3 flex-1"
          variants={fadeUpVariant}
        >
          <motion.h2
            className="sm:text-3xl text-2xl font-medium font-clash"
            variants={fadeUpVariant}
            transition={{ delay: 0.14 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-denary font-poppins max-sm:text-sm"
            variants={fadeUpVariant}
            transition={{ delay: 0.22 }}
          >
            {description}
          </motion.p>

          {extraInfo && (
            <motion.div variants={fadeUpVariant} transition={{ delay: 0.33 }}>
              {extraInfo}
            </motion.div>
          )}

          <motion.button
            className="bg-[#1A1A1A] px-6 py-2 mt-5 rounded-md font-medium capitalize w-max flex flex-row items-center gap-2"
            variants={fadeUpVariant}
            whileHover={{
              scale: 1.045,
              boxShadow: "0 2px 24px 0 rgba(34,197,94,0.11)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 140, damping: 9 }}
          >
            Learn more <IoIosArrowRoundForward />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitBlock;
