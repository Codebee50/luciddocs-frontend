import React, { useEffect, useRef, useState } from "react";
import ScanLottie from "../lottie/ScanLottie";
import { TypeAnimation } from "react-type-animation";

const LONG_TEXT = (
  <p className="text-denary/90 font-poppins text-sm">
    Artificial Intelligence (AI) is a rapidly evolving field of computer science
    focused on building machines that can perform tasks which normally require
    human intelligence. These tasks include reasoning, learning from experience,
    making decisions, understanding natural language, and recognizing patterns.
    <br />
    <br />
    Over the past decade, breakthroughs in AI research and development have
    transformed various sectors, including healthcare, finance, education, and
    transportation. For example, AI technologies now power self-driving cars,
    assist doctors in diagnosing diseases, and provide personalized
    recommendations in digital platforms.
    <br />
    <br />
    Despite these advances, AI also presents significant challenges and ethical
    concerns, such as bias in algorithms, loss of jobs due to automation, and
    the need for transparent decision-making processes. Therefore, continued
    collaboration between technologists, policymakers, and society is crucial to
    ensure AI is developed and deployed responsibly for the benefit of all.
  </p>
);

const SHORT_TEXT_SEQUENCE = [
  "Artificial Intelligence (AI) enables machines to perform tasks that require human-like intelligence. AI has transformed sectors such as healthcare, transportation, and education with applications like self-driving cars and diagnostic tools. However, AI also poses ethical challenges, including bias, job automation, and transparency concerns. Responsible development and collaboration are essential for maximizing AI's benefits and minimizing its risks.",
];

const SummarizeContentIllustration = () => {
  const [step, setStep] = useState(0); // 0: long, 1: scanning, 2: short
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer: triggers once on scroll into view
  useEffect(() => {
    if (!containerRef.current) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
      }
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.35,
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [started]);

  // Animation step effect (starts only after "started" is true)
  useEffect(() => {
    if (!started) return;
    const timers: NodeJS.Timeout[] = [];
    if (step === 0) {
      timers.push(
        setTimeout(() => {
          setStep(1);
        }, 1500)
      );
    }
    if (step === 1) {
      timers.push(
        setTimeout(() => {
          setStep(2);
        }, 4000)
      );
    }
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [step, started]);

  return (
    <div
      className="w-full relative min-h-[300px] flex items-center justify-center"
      ref={containerRef}
    >
      <div className="sm:w-full w-[90%] mx-auto min-h-[250px] max-h-[500px] max-sm:overflow-y-hidden no-scrollbar overflow-hidden  bg-bg-primary rounded-lg border p-4 border-denary/30 flex flex-col items-start justify-start relative">
        {/* Show Long Content */}
        {/* {(!started || step === 0 || step === 1) && ( */}
        <div className="w-full font-light">{LONG_TEXT}</div>
        {/* )} */}

        {/* Show ScanLottie */}
        {/* {started && (step === 1 || step === 2) && (
          <div className="flex w-full items-center justify-center absolute inset-0">
            <ScanLottie />
          </div>
        )} */}
      </div>

      <div className="w-full absolute sm:bottom-0 sm:right-10 bg-bg-primary p-4 border border-senary/30 rounded-lg shadow-2xl shadow-senary/10">
        <TypeAnimation
          sequence={SHORT_TEXT_SEQUENCE}
          wrapper="span"
          speed={2}
          className="text-denary/90 font-poppins text-sm font-light"
          repeat={0}
        />
      </div>

      <div className="absolute inset-0 max-sm:hidden bg-linear-to-r from-transparent to-background z-20"></div>
    </div>
  );
};

export default SummarizeContentIllustration;
