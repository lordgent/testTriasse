import React, { useState } from "react";
import Layouts from "../../components/layout/Layouts";
import show from "../../assets/img/img-eye-on.svg";
import hidden from "../../assets/img/img-eye.svg";
import Image from "next/image";
function Register() {
  const [pass, setpass] = useState(false);

  return (
    <Layouts>
      <div className="py-8 px-8 lg:px-28">
        <div className="border-2 p-4 w-full lg:w-3/5 mx-auto bg-white shadow-lg rounded-lg">
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="text"
              placeholder="Nama Lengkap"
              name="fullname"
              className="w-full h-10 px-2"
            />
          </div>
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full h-10  px-2"
            />
          </div>
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="text"
              placeholder="No Handphone"
              name="nophone"
              className="w-full h-10  px-2"
            />
          </div>
          <div className="mb-2 border-2 flex items-center px-2 rounded-md ">
            <input
              type={pass ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="w-full h-10 "
            />
            <button onClick={() => setpass(!pass)}>
              <Image
                src={pass ? hidden : show}
                alt="showpassword"
                width="25"
                height="25"
              />
            </button>
          </div>
          <div className="mb-2 flex item-center border-2 px-2 rounded-md ">
            <input
              type={pass ? "text" : "password"}
              placeholder="Konfirmasi password"
              name="passwordconfirm"
              className="w-full h-10"
            />
            <button onClick={() => setpass(!pass)}>
              <Image
                src={pass ? hidden : show}
                alt="showpassword"
                width="25"
                height="25"
              />
            </button>
          </div>
          <button className="bg-blue-500 rounded-md text-white w-full py-2 ">
            Daftar
          </button>
        </div>
      </div>
    </Layouts>
  );
}

export default Register;
