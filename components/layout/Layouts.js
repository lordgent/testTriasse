import React from "react";
import InfoContact from "../Atoms/InfoContact";
import Navbar from "../organism/Navbar";
function Layouts({ children }) {
  return (
    <>
      <InfoContact />
      <Navbar />
      <div className="">
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layouts;
