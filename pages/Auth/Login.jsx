import React, { useState } from "react";
import Layouts from "../../components/layout/Layouts";
import show from "../../assets/img/img-eye-on.svg";
import hidden from "../../assets/img/img-eye.svg";
import Image from "next/image";
import Link from "next/link";
import google from "../../assets/img/img-google@2x.png";
import facebook from "../../assets/img/img-facebook@2x.png";
import { useDispatch, useSelector } from "react-redux";
import { cekAuth, cekAuthLogin } from "../../store/actions/AuthActions";

export const getServerSideProps = async function ({ req, res }) {
  if (req.cookies.token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

function Login() {
  const dispatch = useDispatch();
  const [pass, setpass] = useState(false);
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    dispatch(cekAuth(form));
    dispatch(cekAuthLogin());
  };
  return (
    <Layouts>
      <div className="py-8 px-8 lg:px-28 bg-gray-100">
        <div className="border p-4 w-full lg:w-2/4 mx-auto bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <p className="font-semibold">Masuk</p>
            <Link href="/register">
              <a className="text-xs">
                Belum punya Akun? <span className="text-blue-500">Daftar</span>
              </a>
            </Link>
          </div>
          <div className="mb-2 border  rounded-md ">
            <input
              type="email"
              placeholder="Email"
              name="email"
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

          <button
            onClick={handleLogin}
            className="bg-orange-500 rounded-md text-white mb-4 w-full py-2 "
          >
            Masuk
          </button>
          <div className="flex mb-4 justify-between">
            <p className="text-blue-500 text-xs">Lupa Password?</p>
            <p className="text-blue-500 text-xs">Masuk dengan sms</p>
          </div>
          <p className="text-center text-gray-400 mb-4 text-xs">
            Atau masuk dengan
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
        </div>
      </div>
    </Layouts>
  );
}

export default Login;
