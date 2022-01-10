/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchLab } from "../../store/actions/LabActions";
import { useRouter } from "next/router";
import Image from "next/image";
import { location, star } from "../../assets/index";
function LabLocation() {
  const router = useRouter();
  const { SearchLocationResult } = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchLab(router.query.address));
  }, [dispatch]);
  console.log(SearchLocationResult);
  return (
    <div className="">
      {!SearchLocationResult || !SearchLocationResult.length
        ? ""
        : SearchLocationResult?.map((item) => (
            <div
              key={item.id}
              className="flex h-44 lg:h-36 w-full  rounded-lg shadow-lg mb-4 bg-white w-full"
            >
              <div className="w-2/12	h-full">
                <div className="w-full h-44 lg:h-36 p-4 relative">
                  <Image
                    src={location}
                    alt="imagessize"
                    sizes="100%"
                    className="rounded-lg"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="w-7/12 px-2 py-2 h-full">
                <div className="flex gap-2 items-center">
                  {item.service.map((itm, i) => (
                    <p
                      className={`text-xs  px-2 text-white rounded-lg  ${
                        i % 2 == 0 ? "bg-blue-500" : "bg-green-500"
                      }`}
                      key={i}
                    >
                      {itm}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <p className=" text-xs lg:text-sm text-zinc-700 font-semibold">
                    {item?.name_lab}
                  </p>
                  <p className="text-xs  lg:text-sm text-zinc-500">
                    {item?.address}
                  </p>
                </div>

                <div className="flex gap-2 items-center mt-6">
                  <div className="">
                    <div className=" gap-1 flex items-center">
                      <div className="h-4 w-4">
                        <Image src={star} sizes="100%" alt="imagestar" />
                      </div>
                      <p className="text-xs text-zinc-700">rating 4.7</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {item?.info?.map((inpo) => (
                      <p className="text-xs text-gray-400" key={inpo.id}>
                        {inpo?.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-3/12	h-full 	py-4">
                <p className="text-red-600 w-6/12   bg-red-100 text-xs text-center mx-auto">
                  Hemat 20%
                </p>
                <p className="line-through py-2 text-gray-400 text-sm text-center mx-auto">
                  Rp.500.000
                </p>
                <p className="text-orange-600 font-semibold text-md lg:text-2xl text-center mx-auto">
                  Rp.300.000
                </p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default LabLocation;
