import React, { useEffect } from "react";
import InfoContact from "../Atoms/InfoContact";
import FooterComp from "../organism/Footer/FooterComp";
import Navbar from "../organism/Navbar";
import Head from "next/head";
import { cekAuthLogin } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";
function Layouts({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cekAuthLogin());
  }, [dispatch]);

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
