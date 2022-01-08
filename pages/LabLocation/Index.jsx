import React from "react";
import Layouts from "../../components/layout/Layouts";
import SelectMedic from "../../components/organism/medic/SelectMedic";
import SearchResult from "../../components/organism/search/SearchResult";

function Index() {
  return (
    <Layouts>
      <SelectMedic />
      <hr className="border-blue-500 border-2 " />
      <SearchResult />
    </Layouts>
  );
}

export default Index;
