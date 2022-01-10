import React from "react";
import Image from "next/image";
import imgloc from "../../assets/img/img-dummy-48.png";
import star from "../../assets/img/img-star-yellow.svg";
import maps from "../../assets/img/img-icon-pin-blue.svg";
function DetailLabProduct() {
  return (
    <div className="w-3/12 h-1/2 py-8 rounded-lg px-4 shadow-lg bg-white">
      <p className="text-zinc-600 font-semibold text-md">
        Paket Skrining Diabetes Meletus
      </p>
      <hr />
      <div className="flex mt-2 gap-2">
        <div className="w-1/4">
          <Image src={imgloc} alt="imagelocation" sizes="100%" />
        </div>
        <div className="w-3/4">
          <p className="text-xs font-semibold text-zinc-700">Parahita Buncit</p>
          <div className="flex items-center gap-1">
            <div className="w-2">
              <Image src={star} alt="starlocation" sizes="100%" />
            </div>
            <p className="text-xs text-gray-600">4.8</p>
          </div>
          <p className="text-xs text-gray-500">
            Jl warung Buncit Raya 150 Jakarta selatan
          </p>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-2">
              <Image src={maps} alt="imagemaps" sizes="100%" />
            </div>
            <div>
              <p className="text-xs text-gray-500">lihat peta</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-2 mb-2">
        <p className="text-gray-400 text-xs">tidak bisa reschedule</p>
        <p className="text-gray-400 text-xs">tidak bisa refund</p>
      </div>
      <hr />
      <div className="mt-2 w-full mx-auto">
        <div className="flex items-center">
          <div></div>
          <div className="flex gap-1 items-center mx-auto">
            <div className="mx-auto">
              <p className=" text-xs flex text-red-500 bg-red-100">hemat 20%</p>
            </div>
            <div className="mx-auto">
              <p className="text-xs line-through  text-gray-500">Rp.270.000</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-blue-600 text-center font-bold lg:text-2xl text-md py-2">
        Rp.150.000
      </p>
      <div className="w-full bg-red-200 mx-auto">
        <button className="bg-orange-600 w-full text-white rounded-md py-1 font-semibold">
          Pesan sekarang
        </button>
      </div>
    </div>
  );
}

export default DetailLabProduct;
