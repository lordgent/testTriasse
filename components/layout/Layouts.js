import React from "react";
import InfoContact from "../Atoms/InfoContact";
import FooterComp from "../organism/Footer/FooterComp";
import Navbar from "../organism/Navbar";
import Head from "next/head";
function Layouts({ children }) {
  return (
    <>
      <InfoContact />
      <Navbar />
      <div className="">
        <div>{children}</div>
      </div>
      <br />
      <br />
      <FooterComp />
    </>
  );
}

export default Layouts;
