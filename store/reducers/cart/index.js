import { ADD_CART, GET_CART } from "../../actions/CartActions";

const initialState = {
  AddcartResult: false,
  AddcartLoading: false,
  AddcartError: false,

  GetcartResult: false,
  GetcartLoading: false,
  GetcartError: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        AddcartResult: action.payload.data,
        AddcartLoading: action.payload.data,
        AddcartError: action.payload.data,
      };
    case GET_CART:
      return {
        ...state,
        GetcartResult: action.payload.data,
        GetcartLoading: action.payload.data,
        GetcartError: action.payload.data,
      };

    default:
      return state;
  }
};

export default CartReducer;
