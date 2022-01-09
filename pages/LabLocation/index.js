import React from "react";
import Layouts from "../../components/layout/Layouts";
import SelectMedic from "../../components/organism/medic/SelectMedic";
import SearchResult from "../../components/organism/search/SearchResult";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();

  return (
    <Layouts>
      <SelectMedic />
      <hr className="border-blue-500 border-2 " />
      <SearchResult />
    </Layouts>
  );
}

export default Index;
