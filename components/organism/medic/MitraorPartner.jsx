import React from "react";
import { mitra1, mitra2, mitra3, mitra4, mitra5 } from "../../../assets/index";
import Image from "next/image";
function MitraorPartner() {
  const mitra = [
    {
      id: 1,
      mitralogo: mitra1,
    },
    {
      id: 2,
      mitralogo: mitra2,
    },
    {
      id: 3,
      mitralogo: mitra3,
    },
    {
      id: 4,
      mitralogo: mitra4,
    },
    {
      id: 5,
      mitralogo: mitra5,
    },
  ];
  return (
    <div className="py-10 px-8 lg:px-20 bg-blue-50">
      <p className="text-2xl text-center mb-10 text-zinc-700 font-semibold">
        Mitra Laboratorium Terbaik di Indonesia
      </p>
      <p className="text-sm text-zinc-500  mb-10 text-center">
        Triasse Tersedia 44 cabang seluruh Indonesia,dengan sebaran di 16 kota
        yang bisa di pesan secara online.
      </p>
      <div className="grid grid-cols-5 items-center gap-4">
        {mitra.map((item) => (
          <div key={item.id} className="mx-auto">
            <Image src={item.mitralogo} alt="mitratriasse" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MitraorPartner;
