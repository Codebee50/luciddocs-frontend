import React from "react";
import Image from "next/image";

const Marquee = ({ objectList = [] }: { objectList: React.ReactNode[] }) => {
  return (
    <div className="slider overflow-hidden w-full flex justify-start m-auto">
      <div className="slide-track">
        {objectList.map((item, index) => (
          <a
            className="slide mx-2 h-auto min-w-[250px] box-border cursor-pointer"
            key={`marquee-${index}`}
            // href={`/product/${item.id}/`}
          >
            <div className="card overflow-hidden rounded-md mb-3 shadow w-full">
              <div className="relative overflow-hidden h-auto w-full">
                {item}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
