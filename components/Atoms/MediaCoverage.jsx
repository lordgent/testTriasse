import React from "react";
import {
  mediacoverage1,
  mediacoverage2,
  mediacoverage3,
  mediacoverage4,
  mediacoverage5,
  mediacoverage6,
  mediacoverage7,
  mediacoverage8,
  mediacoverage9,
  mediacoverage10,
  mediacoverage11,
  mediacoverage12,
} from "../../assets/index";
import Image from "next/image";
function MediaCoverage() {
  const mediacoverage = [
    mediacoverage1,
    mediacoverage2,
    mediacoverage3,
    mediacoverage4,
    mediacoverage5,
    mediacoverage6,
    mediacoverage7,
    mediacoverage8,
    mediacoverage9,
    mediacoverage10,
    mediacoverage11,
    mediacoverage12,
  ];

  return (
    <div className=" mt-20 lg:mt-44 lg:px-28">
      <p className="lg:text-2xl font-semibold text-center text-zinc-700 mb-8 text-lg">
        Media Coverage
      </p>
      <div className="grid gap-2 items-center grid-cols-3 lg:grid-cols-9">
        {mediacoverage?.map((itm, idx) => (
          <div key={idx} className="mb-2 mx-auto">
            <Image src={itm} alt="imagemediacoverage" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaCoverage;
