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
    </Layouts>
  );
}

export default Index;
