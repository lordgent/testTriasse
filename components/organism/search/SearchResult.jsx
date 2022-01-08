import React from "react";

function SearchResult() {
  return (
    <div className="bg-gray-100 gap-2 w-full py-2 px-28">
      <div className="w-1/4">
        <p className="text-sm font-semibold mb-4 text-zinc-700">
          Filter hasil pencarian
        </p>
        <div className="bg-white  shadow-lg px-4 py-4 rounded-lg">
          <div className="mb-4">
            <p className="text-xs mb-4">Harga</p>
            <div className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="border-gray-200 border-2 rounded-0 h-5 w-5"
              />
              <p className="text-xs text-gray-500">
                Harga Terendah - Tertinggi
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="border-gray-200 border-2 h-5 w-5"
              />
              <p className="text-xs text-gray-500">
                Harga Terendah - Tertinggi
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs mb-4">Jenis Pelayanan</p>
            <div className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="border-gray-200 border-2 h-5 w-5"
              />
              <p className="text-xs text-gray-500">Home Service</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="border-gray-200 border-2 h-5 w-5"
              />
              <p className="text-xs text-gray-500">Datang Ke Lab</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white"></div>
    </div>
  );
}

export default SearchResult;
