import React from "react";
import Layouts from "../../components/layout/Layouts";
import AboutTriasse from "../../components/organism/about/AboutTriasse";
import SelectMedic from "../../components/organism/medic/SelectMedic";
import ListProducts from "../../components/organism/Products/ListProducts";

function index() {
  return (
    <Layouts>
      <SelectMedic />
      <AboutTriasse />
      <ListProducts />
    </Layouts>
  );
}

export default index;
