import React from "react";
import products from "../../../data/products.json";
function ListProducts() {
  return (
    <div className="w-full px-8">
      <p className="text-2xl text-center font-semibold text-gray-700">
        Lorem Ipsum dollor sit amet
      </p>
      <p className="text-xs text-gray-600 text-center">
        here are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some
      </p>
      <div className="grid grid-cols-6 gap-2">
        {products?.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item?.name_product}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
