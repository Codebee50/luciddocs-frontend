import React from "react";
import Lottie from "react-lottie";
import scanAnimation from "@/public/lottie/scanlottie.json";
const ScanLottie = () => {
  return (
    <div className="w-[100px] h-[100px]">
      <Lottie
        options={{
          animationData: scanAnimation,
          loop: true,
          autoplay: true,
        }}
      />
    </div>
  );
};

export default ScanLottie;
