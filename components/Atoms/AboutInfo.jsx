import React from "react";

function AboutInfo() {
  return (
    <div className="w-full mt-4 px-2 py-8">
      <div className=" block lg:flex lg:mx-auto mx-0  gap-8 w-full">
        <div className=" w-full lg:w-3/5 mx-auto lg:mx-0 mb-4">
          <div className="bg-gray-200 w-full lg:h-full h-52 mx-auto lg:mx-0 rounded-lg"></div>
        </div>

        {/* ====== */}
        <div className="w-3/5 mx-auto lg:mx-0 items-center">
          <div className=" block lg:flex lg:mx-auto mx-0  gap-8 mb-4">
            <div className="bg-gray-200 w-28 h-20 mx-auto lg:mx-0 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 lg:text-left text-center text-md font-semibold">
                Jaminan Harga Terbaik
              </p>
              <p className="text-xs text-gray-500 text-center lg:text-left">
                words which look even slightl but the majority have suffered
                alteration in some form, by injected humour, or randomised words
                which look even slightl
              </p>
            </div>
          </div>
          <div className=" block lg:flex lg:mx-auto mx-0  gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 mx-auto lg:mx-0 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 lg:text-left text-center text-md font-semibold">
                Layanan Home Service
              </p>
              <p className="text-xs text-gray-500 text-center lg:text-left">
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or
              </p>
            </div>
          </div>
          <div className=" block lg:flex lg:mx-auto mx-0  gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 mx-auto lg:mx-0 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 lg:text-left text-center text-md font-semibold">
                Cicilan 4x dengan Bunga 0%
              </p>
              <p className="text-xs text-gray-500 text-center lg:text-left">
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </p>
            </div>
          </div>
          <div className=" block lg:flex lg:mx-auto mx-0  gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 mx-auto lg:mx-0 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 lg:text-left text-center text-md font-semibold">
                Pesan dan hasil online
              </p>
              <p className="text-sm text-gray-500 text-center lg:text-left">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which look even slightl
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
