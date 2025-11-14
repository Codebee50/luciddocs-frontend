import React from "react";

const CallToAction = () => {
  return (
    <div className="section-container">
      <div className="w-full min-h-[300px] bg-bg-primary border border-denary/20 flex flex-col items-center justify-center rounded-xl px-5 py-10">
        <h2 className="text-2xl sm:text-3xl font-medium text-center text-white max-w-[600px]">
          Join ambitious Students and
       
          unlock your dream study journey today
        </h2>
        <p className="text-denary/70 text-center text-sm sm:text-base mt-3 mb-7 max-w-2xl">
          Let StudyBear help you study smarter and achieve more personalized study tools designed for your unique goals.
        </p>
        <form className="flex flex-row items-center gap-2 bg-quaternary border border-denary/20 rounded-full px-2 py-2 shadow-sm w-full max-w-md">
          <input type="email" placeholder="Your email" className="bg-transparent outline-none border-none px-2 text-sm flex-1" />
          <button type="submit" className="bg-senary text-bg-primary rounded-full px-6 py-2 text-sm font-medium text-nowrap shrink-0 cursor-pointer">Join <span className="hidden sm:inline">Us</span></button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
