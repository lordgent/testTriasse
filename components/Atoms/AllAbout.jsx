import React, { useState } from "react";

function AllAbout() {
  const info = [
    {
      id: 1,
      title: "Toko furniture Online Terpecaya di Indonesia",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ontrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. L
    `,
    },
    {
      id: 2,
      title: "Belanja Mebel custom Terlengkap di Bramble Furniture",
      description: `ontrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source. L
      `,
    },
    {
      id: 3,
      title: "situs jual beli furniture Custom Terbaik di Indoneisa",
      description: `ontrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making
      it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the
      undoubtable source. L
      `,
    },
    {
      id: 4,
      title: "Online store dengan Produk Furniture Berkualitas Premium",
      description: `ontrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites 
      `,
    },
    {
      id: 5,
      title: "Gratis Ongkir Furniture Seluruh Jabodetabek",
      description: `ontrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          
        `,
    },
  ];
  return (
    <div className="lg:px-16">
      {info?.map((item) => (
        <div key={item.id} className="mb-4 mt-10">
          <p className="text-zinc-500 mb-2 font-semibold text-md">
            {item?.title}
          </p>
          <p className="text-xs text-gray-500">{item?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AllAbout;
