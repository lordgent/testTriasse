import React from "react";

function AboutInfo() {
  return (
    <div className="w-full mt-4 px-2 py-8">
      <div className="flex gap-6 w-full">
        <div className="w-3/5">
          <div className="bg-gray-200 w-full h-full rounded-lg"></div>
        </div>

        {/* ====== */}
        <div className="w-3/5 items-center">
          <div className="flex gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 text-md font-semibold">
                Jaminan Harga Terbaik
              </p>
              <p className="text-xs text-gray-500">
                words which look even slightl but the majority have suffered
                alteration in some form, by injected humour, or randomised words
                which look even slightl
              </p>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 text-md font-semibold">
                Layanan Home Service
              </p>
              <p className="text-xs text-gray-500">
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or
              </p>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 text-md font-semibold">
                Cicilan 4x dengan Bunga 0%
              </p>
              <p className="text-xs text-gray-500">
                here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </p>
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="bg-gray-200 w-28 h-20 rounded-md"></div>
            <div className="w-full">
              <p className="text-zinc-700 text-md font-semibold">
                Pesan dan hasil online
              </p>
              <p className="text-sm text-gray-500">
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
