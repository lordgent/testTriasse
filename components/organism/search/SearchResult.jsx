import React from "react";
import LabLocation from "../../Atoms/LabLocation";

function SearchResult() {
  return (
    <div className="bg-gray-100 block lg:flex w-full py-8 px-4 lg:px-28">
      <div className=" w-full lg:w-2/5 mx-auto">
        <div className="w-3/5 mx-auto">
          <p className="text-sm font-semibold mb-4 text-zinc-700">
            Filter hasil pencarian
          </p>
          <div className="bg-white mx-auto shadow-lg  py-4 rounded-lg">
            <div className="mb-4 px-4">
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
            <div className="border bg-gray-300"></div>
            <div className="px-4 mt-2">
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
      </div>
      {/* ===== */}
      <div className="w-full lg:w-3/5 py-8">
        <LabLocation />
      </div>
    </div>
  );
}

export default SearchResult;
