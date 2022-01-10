import React, { useEffect } from "react";
import { getAllPaket, getAllDiagnosa } from "../../store/actions/PaketActions";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { AddToCart, getAllCart } from "../../store/actions/CartActions";

function ModalProduct(props) {
  const dispatch = useDispatch();

  const { PaketResult, DiagnosaResult } = useSelector(
    (state) => state.PaketReducer
  );
  const {} = useSelector((state) => state.CartReducer);

  useEffect(() => {
    dispatch(getAllPaket());
    dispatch(getAllDiagnosa());
  }, [dispatch]);

  const handleAddCart = (data) => {
    dispatch(AddToCart(data));
    dispatch(getAllCart());
  };

  return (
    props.Show && (
      <div className="h-52 bg-white w-full z-60 overflow-y-scroll rounded-lg full">
        <p className="text-gray-500 text-xs font-semibold">Jenis Paket</p>

        {!PaketResult
          ? ""
          : PaketResult?.map((item) => (
              <div
                key={item?.id}
                className="border z-50 py-2 px-2 flex justify-between"
              >
                <div className="flex gap-2">
                  <Image
                    src={require(`../../assets/img/${item?.image}`)}
                    alt="imageicon"
                  />
                  <p className="text-xs text-zinc-800 ">{item?.name}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleAddCart(item)}
                    className="bg-blue-100 text-xs text-blue-400 px-2 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        <p className="text-gray-500 text-xs font-semibold">Dioagnosa</p>
        {!DiagnosaResult
          ? ""
          : DiagnosaResult?.map((item) => (
              <div
                key={item?.id}
                className="border z-50 py-2 px-2 flex justify-between"
              >
                <div className="flex gap-2">
                  <p className="text-xs text-zinc-800 ">{item?.name}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleAddCart(item)}
                    className="bg-blue-100 text-xs text-blue-400 px-2 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
      </div>
    )
  );
}

export default ModalProduct;
