import React, { useState } from "react";
import products from "../../../data/products.json";
import Image from "next/image";
import EventPromo from "../../Atoms/EventPromo";
import { useRouter } from "next/router";

function ListProducts() {
  const rp = require("rupiah-format");

  const router = useRouter();

  const handleredirect = () => {
    router.push("/infopaket");
  };

  return (
    <div className="w-full px-2 lg:px-20 mb-10 mt-10">
      <p className="text-2xl mb-8 text-center font-semibold text-gray-700">
        Lorem Ipsum dollor sit amet
      </p>
      <p className="text-sm text-gray-600 text-center mb-8">
        here are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some
      </p>
      <div className="loverflow-x-scroll flex w-full gap-4 lg:gap-6 mt-4 px-2">
        {products?.map((item) => (
          <div
            onClick={handleredirect}
            key={item.id}
            className="mx-auto mb-4 lg:mb-0 w-42 bg-gray-50 w-full rounded-lg shadow-lg"
          >
            <div className="w-40  mx-auto h-36 bg-gray-300 rounded-lg"></div>
            <div className=" px-4 lg:px-2 py-2">
              <p className="font-semibold text-center lg:text-left text-sm text-gray-800">
                {item?.name_product}
              </p>
              <div className="">
                <p className="text-xs text-center lg:text-left  text-gray-400">
                  Harga mulai dari
                </p>
                <p className="text-xs text-center lg:text-left  line-through text-gray-700 mb-2">
                  {rp.convert(item?.price)}
                </p>
                <p className="text-xs text-center lg:text-left  text-blue-600 font-semibold">
                  {rp.convert(item.price / 2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EventPromo />
    </div>
  );
}

export default ListProducts;
