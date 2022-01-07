import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../assets/index";
function index() {
  return (
    <div className="bg-white px-28 w-full py-2 items-center justify-between flex">
      <div className="flex justify-between">
        <div className="items-center">
          <Image src={logo} alt="logotriassee" />
        </div>
        <div>
          <button className="lg:hidden block">icon</button>
        </div>
      </div>
      <div className="flex gap-6 justify-between">
        <div>
          <Link href="/">
            <a className="text-zinc-600 text-sm">Paket Test Darah</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-zinc-600 text-sm">Laboratorium</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-zinc-600 text-sm">Artikel</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-blue-500 rounded-sm bg-blue-100 py-2 px-4 text-sm">
              Masuk
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-white bg-blue-500  rounded-sm py-2 px-4 text-md">
              Daftar
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
