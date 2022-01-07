import React from "react";
import Image from "next/image";
import { banner } from "../../../assets/index";
import { doctor } from "../../../assets/index";
function SelectMedic() {
  return (
    <>
      <div className="h-64 bg-gray-300"></div>
      <div className="px-20 ">
        <div className=" -mt-10 rounded-lg py-4 rounded-lg shadow-lg">
          <div className="px-20 bg-blue-50 rounded-lg z-40 items-center flex justify-between">
            <div className=" items-center">
              <p className="text-gray-600 font-semibold text-2xl">
                Pilih Jenis Pemerikasaan
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Lorem ipsum dollor sit amet constructorr Letter spacing
              </p>
            </div>
            <div>
              <Image src={doctor} alt="imagedocotor" />
            </div>
          </div>
          <div className="px-20 gap-4 grid py-4 grid-cols-3 bg-white">
            <div>
              <p className="text-xs mb-2 text-gray-500">Provinsi</p>
              <select className="bg-white text-gray-500 text-xs border w-full py-2">
                <option>pilih Provinsi</option>
              </select>
            </div>
            <div>
              <p className="text-xs  mb-2  text-gray-500">Kota/Kabupaten</p>
              <select className="bg-white text-gray-500 text-xs border w-full py-2">
                <option>Kota/Kabupaten</option>
              </select>
            </div>
            <div>
              <p className="text-xs  mb-2  text-gray-500">
                Paket & Pemeriksaan
              </p>
              <select className="bg-white text-gray-500 text-xs border w-full py-2">
                <option>pilih Provinsi</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between px-20">
            <div></div>
            <div className="">
              <button className="px-8 py-1 rounded-sm bg-orange-500 text-white">
                Cari lab
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default SelectMedic;
