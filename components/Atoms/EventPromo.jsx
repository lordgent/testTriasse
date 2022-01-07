import React from "react";
import { banner2, banner3 } from "../../assets/index";
import Image from "next/image";
function EventPromo() {
  return (
    <div className="flex gap-4 px-2 mt-10">
      <div>
        <Image src={banner2} alt="imagepromo" />
      </div>
      <div>
        <Image src={banner3} alt="imagepromo" />
      </div>
    </div>
  );
}

export default EventPromo;
