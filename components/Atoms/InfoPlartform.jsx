import React from "react";
import { fb, lked, tweet, ig, pinter, yt, logosmall } from "../../assets/index";
import Image from "next/image";
function InfoPlartform() {
  const icon = [fb, lked, tweet, ig, pinter, yt];
  return (
    <div className="py-2 " style={{ backgroundColor: "#192a56" }}>
      <div className="grid px-10 lg:px-28 grid-cols-1 lg:grid-cols-5 py-8 gap-4 px-4">
        <div className="mx-auto">
          <div className="mb-4 mx-auto lg:mx-0 ">
            <Image
              src={logosmall}
              alt="logosmall"
              className="mx-auto w-full h-full"
            />
          </div>
          <p className="text-white text-center lg:text-left  text-xs">
            Plartform pertama untuk tes laboratorium dan pemeriksaan kesehatan
            di indonesia yang memberikan pelanggan kemapuan untuk memberi
            keputusan yang lebih baik bagi kesehatan mereka
          </p>
        </div>
        <div className="mx-auto">
          <div className="mb-10">
            <p className="text-white text-center lg:text-left  font-semibold">
              Lainnya
            </p>
          </div>
          <p className="text-white mb-2 lg:text-md text-xs">
            Syarat & Ketentuan
          </p>
          <p className="text-white mb-2 text-center lg:text-left  lg:text-md text-xs">
            Karir
          </p>
          <p className="text-white text-center lg:text-left  mb-2 lg:text-md text-xs">
            Kebijakan Privasi
          </p>
          <p className="text-white mb-2 text-center lg:text-left  lg:text-md text-xs">
            Cara kerja
          </p>
          <p className="text-white mb-2 text-center lg:text-left  lg:text-md text-xs">
            Login
          </p>
        </div>
        <div>
          <div className="mb-10 mx-auto">
            <p className="text-white text-center lg:text-left font-semibold">
              Hubungi kami
            </p>
          </div>
          <p className="text-white mb-2 lg:text-md text-xs text-center lg:text-left ">
            cs@trissae.com
          </p>
          <p className="text-white mb-2 lg:text-md text-xs text-center lg:text-left ">
            08-939345432
          </p>
          <p className="text-white mb-2 lg:text-md text-xs text-center lg:text-left ">
            Semin - jumat
          </p>
          <p className="text-white mb-2 lg:text-md text-xs text-center lg:text-left ">
            (09.00 - 18.00 WIB)
          </p>
        </div>
        <div>
          <div className="mb-10">
            <p className="text-white font-semibold text-center lg:text-left ">
              Alamat
            </p>
          </div>
          <p className="text-white mb-2 text-center lg:text-left  lg:text-md text-xs">
            Gedung perkantoran Medison park
          </p>
          <p className="text-white text-center lg:text-left  mb-2 lg:text-md text-xs">
            Lantai 6 Unit B NO 02 jl.Letjen S.Parman
          </p>
          <p className="text-white text-center lg:text-left  mb-2 lg:text-md text-xs">
            Kav 28, Jakarta 11470
          </p>
        </div>

        <div>
          <div className="mb-6">
            <p className="text-white lg:text-left text-center font-semibold">
              Media Sosial
            </p>
          </div>
          <div className="grid mx-auto grid-cols-3 ">
            {icon?.map((item, idx) => (
              <div key={idx} className="mx-auto">
                <Image src={item} alt="icon" className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center py-2 text-white border-t-2 border-gray-300 text-xs">
        Copyright &copy; 2020 PT Digital Medika Informatik. All right reserved{" "}
      </p>
    </div>
  );
}

export default InfoPlartform;
