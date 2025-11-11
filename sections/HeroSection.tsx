"use client";

import React from "react";
import Nav from "@/components/Nav";
import { RxCaretRight } from "react-icons/rx";
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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const popVariant = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col py-5 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Nav animation: fade in from top */}
      <motion.div className="padding-x" variants={fadeUpVariant as Variants}>
        <Nav />
      </motion.div>

      <div className="padding-x pt-20">
        <div className="w-full flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="bg-[#3A3A3A]/20 px-6 py-3 rounded-full flex flex-row items-center gap-2"
              variants={fadeUpVariant as Variants}
            >
              <motion.p
                className="font-medium text-white max-sm:text-sm"
                variants={fadeVariant as Variants}
                transition={{ delay: 0.15 }}
              >
                Product update v1.0
              </motion.p>
              <motion.span
                variants={fadeVariant as Variants}
                transition={{ delay: 0.18 }}
              >
                <RxCaretRight size={25} />
              </motion.span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl text-center mt-5 capitalize font-clash"
              variants={fadeUpVariant as Variants}
              transition={{ delay: 0.23 }}
            >
              Transform documents into <br />{" "}
              <span className="font-medium gradient-text">
                Quizes, Flashcards, Summaries
              </span>
            </motion.h1>
            {/* <h1 className="text-7xl text-center mt-5">
              Unlock Powerful Insights <br />{" "}
              <span className="font-medium animate-text bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                AI Document Analysis
              </span>
            </h1> */}
            <motion.p
              className="text-center max-w-[700px] mx-auto text-[#AAAAAA] max-sm:text-sm"
              variants={fadeUpVariant as Variants}
              transition={{ delay: 0.34 }}
            >
              Seamlessly convert your documents into interactive quizzes,
              concise flashcards, and detailed summaries. Accelerate your
              learning, and make studying 10X more efficient.
            </motion.p>
            <motion.div
              className="flex flex-row items-center justify-center gap-4 mt-5 flex-wrap"
              variants={fadeUpVariant as Variants}
              transition={{ delay: 0.48 }}
            >
              <motion.button
                className="bg-green-800 text-white px-6 py-3 rounded-full font-medium text-nowrap max-sm:w-full"
                variants={popVariant as Variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Get started for free
              </motion.button>
              <motion.button
                className="bg-transparent border border-[#5A5A5A] text-white px-6 py-3 rounded-full font-medium text-nowrap max-sm:w-full"
                variants={popVariant as Variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.18 }}
              >
                Book a demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full relative stack mt-10">
        <motion.div
          className="h-full overflow-hidden self-end"
          // initial={{ opacity: 0, y: 40, scale: 1.03 }}
          // whileInView={{ opacity: 1, y: 0, scale: 1 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          // viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/vibesbg2.svg"
            alt="hero-section-image"
            width={1000}
            height={1000}
            className="w-full min-h-[300px] lg:min-h-[500px] object-cover object-top z-0"
          />
        </motion.div>

        <motion.div
          className="w-[95%] lg:w-full max-w-[1000px] mx-auto lg:h-[80vh] max-h-[600px] rounded-t-lg p-2 z-10 bg-[#1E1E1E] self-end "
          // initial={{ opacity: 0, y: 60, scale: 0.98 }}
          // whileInView={{ opacity: 1, y: 0, scale: 1 }}
          // transition={{ duration: 0.92, ease: "easeOut", delay: 0.2 }}
          // viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/dashpreview1.png"
            alt="hero-section-image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-top rounded-t-lg"
          />
        </motion.div>

        <motion.div className="bg-linear-to-b from-transparent via-black/10 to-background absolute inset-0 z-20"></motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
