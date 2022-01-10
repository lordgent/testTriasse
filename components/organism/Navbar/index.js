import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../assets/index";
import { useDispatch, useSelector } from "react-redux";
function Index() {
  const dispatch = useDispatch();
  const { UserLoginResult } = useSelector((state) => state.AuthReducer);
  const [toogle, setToogle] = useState(false);

  return (
    <div className="bg-white px-4 lg:px-28 z-100 w-full py-2 items-center justify-between block lg:flex">
      <div className=" flex justify-between items-center">
        <div className="items-center">
          <Image src={logo} alt="logotriassee" className="lg:h-full h-8" />
        </div>
        <div>
          <button
            className="lg:hidden block"
            onClick={() => setToogle(!toogle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {toogle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          toogle ? "block" : "hidden"
        } lg:flex gap-2 lg:gap-6 justify-between`}
      >
        <div className="py-2">
          <Link href="/">
            <a className="text-zinc-600 text-sm">Paket Test Darah</a>
          </Link>
        </div>
        <div className="py-2">
          <Link href="/">
            <a className="text-zinc-600 text-sm">Laboratorium</a>
          </Link>
        </div>
        <div className="py-2">
          <Link href="/">
            <a className="text-zinc-600 text-sm">Artikel</a>
          </Link>
        </div>
        {/* == */}

        {UserLoginResult ? (
          <div className="py-2 ">
            <Link href="/login">
              <a className="text-gray-500 w-full rounded-sm  bg-gray-100 py-2 px-4 text-sm">
                {UserLoginResult?.fullname}
              </a>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="py-2 ">
              <Link href="/login">
                <a className="text-blue-500 w-full rounded-sm  bg-blue-100 py-2 px-4 text-sm">
                  Masuk
                </a>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/register">
                <a className="text-white bg-blue-500  rounded-sm py-2 px-4 text-sm">
                  Daftar
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
