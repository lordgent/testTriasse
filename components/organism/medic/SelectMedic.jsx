import React from "react";
import Image from "next/image";
import {
  doctor,
  selecticon1,
  selecticon2,
  selecticon3,
  banner,
} from "../../../assets/index";

function SelectMedic() {
  return (
    <>
      <div className="image-banner"></div>
      <div className="px-4 lg:px-20 ">
        <div className=" -mt-10 rounded-lg py-4 rounded-lg shadow-lg">
          <div className=" px-4  lg:px-20 bg-blue-50 rounded-lg z-40 items-center lg:flex block justify-between">
            <div className=" items-center">
              <p className="text-gray-600 font-semibold text-md lg:text-2xl">
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
          <div className=" px-2 lg:px-20 gap-4 grid py-4 grid-cols-1 lg:grid-cols-3 bg-white">
            <div>
              <p className="text-xs mb-2 text-gray-500">Provinsi</p>
              <div className="flex border gap-2 px-2">
                <Image src={selecticon1} alt="imageicon" />
                <select className="bg-white text-gray-500 text-xs border border-0 w-full py-2">
                  <option>Pilih provinsi</option>
                </select>
              </div>
            </div>
            <div>
              <p className="text-xs  mb-2  text-gray-500">Kota/Kabupaten</p>
              <div className="flex border gap-2 px-2">
                <Image src={selecticon2} alt="imageicon" />
                <select className="bg-white text-gray-500 text-xs border border-0 w-full py-2">
                  <option className="bg-white text-gray-500 text-xs border-gray-300 py-2">
                    Pilih kota/kabupaten
                  </option>
                </select>
              </div>
            </div>
            <div>
              <p className="text-xs  mb-2 text-gray-500">
                Paket & jenis pemeriksaan
              </p>
              <div className="flex border gap-2 px-2">
                <Image src={selecticon3} alt="imageicon" />
                <select className="bg-white text-gray-500 text-xs border border-0 w-full py-2">
                  <option>Pilih paket atau jenis pemeriksaan</option>
                </select>
              </div>
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
