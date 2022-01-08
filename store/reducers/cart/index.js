import { ADD_CART, GET_CART, DELETE_CARTBYID } from "../../actions/CartActions";

const initialState = {
  AddcartResult: false,
  AddcartLoading: false,
  AddcartError: false,

  GetcartResult: false,
  GetcartLoading: false,
  GetcartError: false,

  DeletecartByIdResult: false,
  DeletecartByIdLoading: false,
  DeletecartByIdError: false,
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
    case DELETE_CARTBYID:
      console.log("masuk delete cart by id");
      console.log(action);
      return {
        ...state,
        DeletecartByIdResult: action.payload.data,
        DeletecartByIdLoading: action.payload.data,
        DeletecartByIdError: action.payload.data,
      };
    default:
      return state;
  }
};

export default CartReducer;
