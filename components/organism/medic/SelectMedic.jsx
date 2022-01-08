import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAddress,
  getAllCity,
} from "../../../store/actions/AddressAction";
import { getAllPaket } from "../../../store/actions/PaketActions";
import Image from "next/image";
import {
  doctor,
  selecticon1,
  selecticon2,
  selecticon3,
  banner,
} from "../../../assets/index";
import ModalProduct from "../../molecul/ModalProduct";
import ListCart from "../../Atoms/ListCart";

function SelectMedic() {
  const Dispatch = useDispatch();
  const [paketModal, setpaketModal] = useState(false);
  const { AddressResult, AddressCityResult } = useSelector(
    (state) => state.AddressReducer
  );
  const { PaketResult } = useSelector((state) => state.PaketReducer);

  const handleChange = (e) => {
    Dispatch(getAllCity(e.target.value));
  };

  useEffect(() => {
    Dispatch(getAllAddress());
    Dispatch(getAllPaket());
  }, [Dispatch]);

  return (
    <>
      <div className="image-banner"></div>
      <div className="px-4 lg:px-20">
        <div className=" -mt-10 rounded-lg py-4 rounded-lg shadow-lg">
          <div className=" px-4  lg:px-20 bg-blue-50 rounded-lg items-center lg:flex block justify-between">
            <div className=" items-center ">
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
                <select
                  onChange={handleChange}
                  className="bg-white text-gray-500 text-xs border border-0 w-full py-2"
                >
                  <option>Pilih provinsi</option>
                  {!AddressResult?.length
                    ? ""
                    : AddressResult?.map((item, idx) => {
                        return (
                          <option key={idx} value={item?.Provinsi}>
                            {item.Provinsi}
                          </option>
                        );
                      })}
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
                  {!AddressCityResult
                    ? ""
                    : AddressCityResult?.map((item) => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                </select>
              </div>
            </div>
            <div>
              <p className="text-xs  mb-2 text-gray-500">
                Paket & jenis pemeriksaan
              </p>
              <div
                className="flex border gap-2 px-2"
                onClick={() => setpaketModal(!paketModal)}
              >
                <Image src={selecticon3} alt="imageicon" />
                <p className="text-gray-600 py-2 text-xs">
                  Pilih paket atau jenis pemeriksaan
                </p>
              </div>
              <ModalProduct Show={paketModal} />
            </div>
          </div>

          <div className="block lg:flex justify-between ">
            <div>
              <ListCart />
            </div>
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
