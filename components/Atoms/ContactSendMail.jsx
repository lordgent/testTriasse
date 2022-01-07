import React from "react";

function ContactSendMail() {
  return (
    <div className="lg:flex block px-4 w-full bg-blue-600 lg:px-52 items-center justify-between py-10">
      <div className=" items-center  ">
        <p className="font-semibold text-white text-md">
          Berlangganan newsletter spesial promo dan perawatan terbaik
        </p>
      </div>
      <div className="  items-center ">
        <input
          type="text"
          className="h-10 px-2 text-xs"
          placeholder="Masukan Email Anda"
        />
        <button className="bg-orange-600  py-2 h-10 text-xs px-2 text-white font-semibold">
          Berlangganan
        </button>
      </div>
    </div>
  );
}

export default ContactSendMail;
