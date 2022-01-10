import React, { useState } from "react";
import Layouts from "../../components/layout/Layouts";
import show from "../../assets/img/img-eye-on.svg";
import hidden from "../../assets/img/img-eye.svg";
import Image from "next/image";
import Link from "next/link";
import google from "../../assets/img/img-google@2x.png";
import facebook from "../../assets/img/img-facebook@2x.png";
import { useDispatch, useSelector } from "react-redux";
import { RegisterApp } from "../../store/actions/AuthActions";

function Register() {
  const dispatch = useDispatch();
  const [form, setform] = useState({
    fullname: "",
    email: "",
    nophone: "",
    password: "",
  });
  const [pass, setpass] = useState(false);
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      fullname: form.fullname,
      email: form.email,
      nophone: form.nophone,
      password: form.password,
    };
    dispatch(RegisterApp(data));
  };

  return (
    <Layouts>
      <div className="py-8 bg-gray-100 px-4 lg:px-28">
        <div className="border-2 p-4 w-full lg:w-2/4 mx-auto bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold">Daftar</p>
            <Link href="/login">
              <a className="text-xs">
                Sudah punya Akun? <span className="text-blue-500">Masuk</span>
              </a>
            </Link>
          </div>
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="text"
              placeholder="Nama Lengkap"
              name="fullname"
              className="w-full h-10 px-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full h-10  px-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 border-2  rounded-md ">
            <input
              type="text"
              placeholder="No Handphone"
              name="nophone"
              className="w-full h-10  px-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 border-2 flex items-center px-2 rounded-md ">
            <input
              type={pass ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="w-full h-10 "
              onChange={handleChange}
            />
            <button onClick={() => setpass(!pass)}>
              <Image
                src={pass ? show : hidden}
                alt="showpassword"
                width="25"
                height="25"
              />
            </button>
          </div>
          <div className="mb-2 flex item-center border-2 px-2 mb-4 rounded-md ">
            <input
              type={pass ? "text" : "password"}
              placeholder="Konfirmasi password"
              name="passwordconfirm"
              className="w-full h-10"
              onChange={handleChange}
            />
            <button onClick={() => setpass(!pass)}>
              <Image
                src={pass ? show : hidden}
                alt="showpassword"
                width="25"
                height="25"
              />
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 mb-4 rounded-md text-white w-full py-2 "
          >
            Daftar
          </button>

          <p className="text-center text-gray-400 mb-4 text-xs">
            Atau daftar dengan
          </p>
          <div className="flex mb-4 ">
            <div className="text-blue-500 mx-auto text-xs items-center flex gap-2 shadow-lg px-4 lg:px-12 bg-blue-600 py-1">
              <Image src={facebook} alt="facebook" height="25" width="25" />
              <p className="text-white font-semibold">Facebook</p>
            </div>
            <div className="text-blue-500 mx-auto text-xs items-center flex gap-2 shadow-lg bg-white px-4 lg:px-12 py-1">
              <Image src={google} alt="facebook" height="25" width="25" />
              <p className="text-zinc-700 font-semibold">Google</p>
            </div>
          </div>
          <div className="px-8">
            <p className="text-center text-gray-500 text-xs">
              Dengan mendaftar
              <span className="text-blue-500">
                Saya setuju dengan Syarat dan Ketentuan dan Kebijakan dari
                Triasse
              </span>
              & <span className="text-blue-500">Kebijakan Privasi</span>
            </p>
          </div>
        </div>
        <div className=" block lg:flex items-center mt-4 mx-auto">
          <div className="mx-auto lg:w-auto w-2/4 flex items-center gap-2">
            <input type="checkbox" className="" />
            <p className="text-xs text-gray-500 text-center mx-auto items-center gap-2">
              Saya ingin mendapatkan penawaran eksklusif dan promosi dari
              Triasse
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </Layouts>
  );
}

export default Register;
