import React from "react";
import DetailLabProduct from "../../components/Atoms/DetailLabProduct";
import Layouts from "../../components/layout/Layouts";
import InfoDetailProduct from "../../components/organism/infodetailproduct/InfoDetailProduct";

function DetailPaket() {
  return (
    <Layouts>
      <div className="block py-8 bg-gray-100 lg:flex gap-8 px-6 lg:px-28">
        <InfoDetailProduct />
        <DetailLabProduct />
      </div>
    </Layouts>
  );
}

export default DetailPaket;
