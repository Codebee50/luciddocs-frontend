"use client";
import React from "react";
import { UserPlus, FileUp, Sparkles, ListChecks, FileText } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { appConfig } from "@/constants";

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


const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Log In",
      short_description:
        `Create your ${appConfig.appName} account to get started—it's free and easy.`,
    },
    {
      icon: FileUp,
      title: "Upload Your Document",
      short_description:
        `Choose your PDF, Word, or text file and upload it securely to ${appConfig.appName}.`,
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

  return (
    <motion.div
      className="section-container w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full grid grid-cols-1 gap-20 items-center justify-center">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="sm:text-3xl text-2xl text-center  font-clash gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Your new study routine in 10 seconds
          </motion.h2>

          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col items-center  gap-4 h-full`}
                variants={stepVariants as Variants}
              >
   
                <motion.div
                  className="flex flex-col items-center bg-bg-primary rounded-xl p-4 gap-4 shadow-sm border border-denary/10 h-full"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.23 + index * 0.11,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >

                  <div className="self-start ">
                    <p className="font-clash text-xl font-semibold text-quaternary">0{index + 1}</p>
                  </div>
   
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-denary/70 mt-2">
                      {step.short_description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </motion.div>
  );
};

export default HowItWorks;
