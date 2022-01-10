import React, { useEffect } from "react";
import InfoMedical from "../../components/Atoms/InfoMedical";
import MediaCoverage from "../../components/Atoms/MediaCoverage";
import Layouts from "../../components/layout/Layouts";
import AboutTriasse from "../../components/organism/about/AboutTriasse";
import MitraorPartner from "../../components/organism/medic/MitraorPartner";
import SelectMedic from "../../components/organism/medic/SelectMedic";
import ListProducts from "../../components/organism/Products/ListProducts";
import { cekAuthLogin } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";
import AllAbout from "../../components/Atoms/AllAbout";

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cekAuthLogin());
  }, [dispatch]);
  return (
    <Layouts>
      <SelectMedic />
      <AboutTriasse />
      <ListProducts />
      <MitraorPartner />
      <InfoMedical />
      <MediaCoverage />

      <div className="px-8 lg:px-20  mt-10 lg:mt-20">
        <hr className="border-gray-200 border" />
        <AllAbout />
      </div>
    </Layouts>
  );
}

export default Index;
