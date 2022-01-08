import React, { useEffect, useState } from "react";
import { getAllCart, deteleCartById } from "../../store/actions/CartActions";
import { useDispatch, useSelector } from "react-redux";
function ListCart() {
  const dispatch = useDispatch();
  const { GetcartResult, DeletecartByIdResult } = useSelector(
    (state) => state.CartReducer
  );
  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deteleCartById(id));
    dispatch(getAllCart());
  };
  const removeCart = () => {
    localStorage.removeItem("cart");
    dispatch(getAllCart());
  };
  return !GetcartResult || !GetcartResult.length ? (
    ""
  ) : (
    <div className=" block lg:flex gap-2 w-full px-4">
      {GetcartResult?.map((item) => (
        <div
          key={item?.id}
          className="flex gap-2 lg:mt-0 mt-2 items-center bg-green-200 py-2 px-2"
        >
          <p className="text-xs text-green-700"> {item?.name_product}</p>
          <svg
            onClick={() => handleDelete(item?.id)}
            xmlns="http://www.w3.org/2000/svg "
            className="h-3 w-3 text-white bg-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ))}
      <button
        onClick={removeCart}
        className="text-gray-600 bg-gray-200 py-2 px-4 text-xs"
      >
        Hapus Semua
      </button>
    </div>
  );
}

export default ListCart;
