/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchLab } from "../../store/actions/LabActions";
import { useRouter } from "next/router";
import Image from "next/image";
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
            <div key={item.id} className="flex mb-4 bg-white w-full">
              <div className="w-1/4  bg-gray-200"></div>
              <div className="w-full px-2 flex justify-between py-2">
                <div className="">
                  <div className="flex mb-6 gap-2">
                    {item?.service?.map((itm) => (
                      <p
                        className={`${
                          itm.length % 2 ? "bg-blue-500 " : "bg-green-500 "
                        } text-xs text-white px-1 lg:px-2 lg:font-semibold rounded-lg`}
                        key={itm}
                      >
                        {itm}
                      </p>
                    ))}
                  </div>
                  <p className=" text-xs lg:text-md text-zinc-700">
                    {item?.name_lab}
                  </p>
                  <p className="text-gray-500 text-xs">{item?.address}</p>
                  <div className="flex gap-4 mt-6 items-center">
                    <div>
                      <p className="flex text-xs text-zinc-600 font-semibold items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        4.8
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {item?.info.map((inf, idx) => (
                        <p className="text-xs text-zinc-600" key={idx}>
                          {inf.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className=" px-2 lg:px-8 py-8">
                  <p
                    style={{ fontSize: "9px" }}
                    className="text-center bg-red-200 text-red-500 w-3/5"
                  >
                    Hemat 20%
                  </p>
                  <p className="line-through text-xs lg:text-sm text-gray-500">
                    Rp.500.000
                  </p>
                  <p className=" text-xs lg:text-2xl font-semibold text-orange-500">
                    Rp 300.000
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default LabLocation;
