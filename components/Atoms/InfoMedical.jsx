import React from "react";

function InfoMedical() {
  const infoMedic = [
    {
      id: 1,
      title: "Rapidtest covid 19 Sekarang bisa di cicil 4x",
      description: `DescritionThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
      by injected humour, or randomised words which dont look even
      slightly believable.`,
    },
    {
      id: 2,
      title: "Apa itu meningtis? Semua yang anda wajib tahu",
      description: `DescritionThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
      by injected humour, or randomised words which dont look even
      slightly believable.`,
    },
    {
      id: 3,
      title: "Telat haid: penyebab,gejala dan cara mengatasinya",
      description: `DescritionThere are many variations of passages of Lorem Ipsum
      available, but the majority have suffered alteration in some form,
      by injected humour, or randomised words which dont look even
      slightly believable.`,
    },
    {
      id: 5,
      title: "Ingin sukses? ketahui 6 tips malam pertama ini",
      description: `DescritionThere are many variations of passages of Lorem Ipsum
      available, but the majority have suffered alteration in some form,
      by injected humour, or randomised words which dont look even
      slightly believable.`,
    },
  ];

  return (
    <div className="w-full mt-2 gap-8 block lg:flex px-8 lg:px-24 mb-20">
      {infoMedic?.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 w-full h-full lg:h-52 mx-auto rounded-lg"
        >
          <div className="w-full bg-purple-600 h-36 lg:mt-0 mt-2 lg:h-28 rounded-lg"></div>
          <div className="px-2 mt-2">
            <p className="text-sm font-semibold text-gray-800">{item?.title}</p>
            <p className="text-xs text-gray-600 mt-2">{item?.description}</p>
          </div>
        </div>
      ))}

      {/* ==== */}
    </div>
  );
}

export default InfoMedical;
