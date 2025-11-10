"use client";
import React from "react";
import { UserPlus, FileUp, Sparkles, ListChecks, FileText } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Log In",
      short_description:
        "Create your LucidDocs account to get started—it's free and easy.",
    },
    {
      icon: FileUp,
      title: "Upload Your Document",
      short_description:
        "Choose your PDF, Word, or text file and upload it securely to LucidDocs.",
    },
    {
      icon: Sparkles,
      title: "AI Processes Content",
      short_description:
        "Our smart AI scans your document and extracts the key information automatically.",
    },
    {
      icon: ListChecks,
      title: "Generate Quizzes & Summaries",
      short_description:
        "Instantly get quizzes or summaries tailored to your document's content.",
    },
    {
      icon: FileText,
      title: "Study & Export",
      short_description:
        "Study interactively or export your quizzes and summaries as PDF for future use.",
    },
  ];

  const faceImages = [
    "/images/faces/face1.jpg",
    "/images/faces/face2.webp",
    "/images/faces/face3.jpeg",
  ];

  return (
    <motion.div
      className="section-container padding-x w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="text-4xl  font-clash gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            How It Works
          </motion.h2>

          <motion.div
            className="flex flex-col gap-10 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-row items-center gap-4 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
                variants={stepVariants as Variants}
              >
                <div>
                  <motion.p
                    className="text-4xl font-clash text-denary opacity-50 font-semibold"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    0{index + 1}
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-row items-center bg-grey01 rounded-xl p-4 gap-4 shadow-sm shadow-senary"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.23 + index * 0.11,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    className="bg-senary/20 text-renary rounded-full p-4"
                    initial={{ opacity: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.28 + index * 0.14,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <step.icon className="w-4 sm:w-6 h-4 sm:h-6" />
                  </motion.div>
                  <div>
                    <h3 className="sm:text-xl font-clash">{step.title}</h3>
                    <p className="text-sm text-gray-500">
                      {step.short_description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 items-start gap-4 relative">
          <motion.div
            className="relative"
            variants={imageVariants as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/girlstudy.webp"
              alt="How It Works"
              width={500}
              height={500}
              className="rounded-xl h-[200px] lg:h-[400px] object-bottom object-cover flex-1"
            />
          </motion.div>
          {/* <Image src="/images/girloutdoorstudy.webp" alt="How It Works" width={500} height={500} className="rounded-xl h-[400px] object-bottom object-cover flex-1" /> */}
          <motion.div
            variants={imageVariants as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/girloutdoorstudy.webp"
              alt="How It Works"
              width={500}
              height={500}
              className="rounded-xl h-[300px] lg:h-[600px] object-bottom object-cover flex-1"
            />
          </motion.div>

          <motion.div
            className=" px-7 py-6 bg-grey01 rounded-2xl absolute bottom-0 left-0 mb-10 flex flex-row items-center gap-5"
            variants={badgeVariants as Variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
            viewport={{ once: true, amount: 0.1 }}
          >
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
                    className="rounded-full shrink-0 w-[50px] h-[50px] object-cover border-2 border-background"
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col">
              <p className="text-senary text-xl font-medium">10k+</p>
              <p className="text-denary text-sm">Students</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
