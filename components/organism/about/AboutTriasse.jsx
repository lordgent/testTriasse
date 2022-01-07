import React from "react";
import AboutInfo from "../../Atoms/AboutInfo";

function AboutTriasse() {
  return (
    <div className="py-8 bg-blue-50 px-2 lg:px-28">
      <p className="text-2xl text-zinc-800 mb-4 font-semibold text-center">
        Mengapa Harus Triasse?
      </p>
      <p className="text-sm text-zinc-600 text-center">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical
      </p>
      <AboutInfo />
    </div>
  );
}

export default AboutTriasse;
