import React from "react";
import { onlinemedic } from "../../assets/index";
import Image from "next/image";
function AboutInfo() {
  const infoProducts = [
    {
      id: 1,
      title: "Jaminan Harga Terbaik",
      description:
        "words which look even slightl but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightl",
    },
    {
      id: 2,
      title: "Layanan Home Service",
      description:
        "here are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, byinjected humour, or",
    },
    {
      id: 3,
      title: "Cicilan 4x dengan Bunga 0%",
      description:
        "here are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, byinjected humour,",
    },
    {
      id: 4,
      title: "Pesan dan hasil online",
      description: "humour, or randomised words which look even slightl",
    },
  ];

  return (
    <div className="w-full mt-4 px-2 py-8">
      <div className=" block lg:flex lg:mx-auto mx-0  gap-8 w-full">
        <div className=" w-full lg:w-3/5 mx-auto lg:mx-0 mb-4">
          <div className="w-full lg:h-full h-full mx-auto lg:mx-0 rounded-lg">
            <Image
              src={onlinemedic}
              alt="onlinemedical"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* ====== */}
        <div className="w-3/5 mx-auto lg:mx-0 items-center">
          {infoProducts.map((item) => (
            <div
              key={item.id}
              className=" block lg:flex lg:mx-auto mx-0 gap-2 mb-4"
            >
              <div className="bg-gray-200 w-20 h-16 mb-1 mx-auto lg:mx-0 rounded-md"></div>
              <div className="w-full">
                <p className="text-zinc-700 lg:text-left text-center text-md font-semibold">
                  {item?.title}
                </p>
                <p className="text-xs text-gray-500 text-center lg:text-left">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}

          {/* ==== */}
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
