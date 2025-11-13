import React from "react";
import Image from "next/image";
import { div } from "framer-motion/m";

const SchoolsMarquee = () => {
  const schoolImages = [
    "/images/schools/school1.png",
    "/images/schools/school2.png",
    "/images/schools/school3.png",
    "/images/schools/school4.png",
    "/images/schools/school5.png",
    "/images/schools/school6.png",
    "/images/schools/school7.png",
    "/images/schools/school8.png",
    "/images/schools/school9.png",
    "/images/schools/school10.png",
    "/images/schools/school11.png",
    "/images/schools/school12.png",
    "/images/schools/school13.png",
    "/images/schools/school14.png",
    "/images/schools/school15.png",
    "/images/schools/school16.png",
    "/images/schools/school17.png",
    "/images/schools/school18.png",
    "/images/schools/school19.png",
    "/images/schools/school20.png",
  ];
  return (
    <div className="section-container">
      <div className="flex flex-col gap-4 overflow-hidden w-full">
        <p className="text-denary text-center capitalize mb-10 max-sm:text-sm">
          Designed for ambitious learners everywhere.
        </p>

        <div className="w-full relative">
          <div className="slider overflow-hidden w-full flex justify-start">
            <div className="slide-track gap-10">
              {[...schoolImages, ...schoolImages].map((image, index) => (
                <a
                  className="slide shrink-0 cursor-pointer"
                  key={`marquee-${index}`}
                  // href={`/product/${item.id}/`}
                >
                  <Image
                    src={image}
                    alt="school"
                    width={100}
                    height={100}
                    className="invert grayscale w-[100px]"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-bg-primary via-transparent to-bg-primary z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsMarquee;
