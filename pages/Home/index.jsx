import React from "react";
import InfoMedical from "../../components/Atoms/InfoMedical";
import Layouts from "../../components/layout/Layouts";
import AboutTriasse from "../../components/organism/about/AboutTriasse";
import MitraorPartner from "../../components/organism/medic/MitraorPartner";
import SelectMedic from "../../components/organism/medic/SelectMedic";
import ListProducts from "../../components/organism/Products/ListProducts";

function index() {
  return (
    <Layouts>
      <SelectMedic />
      <AboutTriasse />
      <ListProducts />
      <MitraorPartner />
      <InfoMedical />
    </Layouts>
  );
}

export default index;
