import { GET_ADDRESS, GET_CITY } from "../../actions/AddressAction";

const initialState = {
  AddressResult: false,
  AddressLoading: false,
  AddressError: false,
  // ====
  AddressCityResult: false,
  AddressCityLoading: false,
  AddressCityError: false,
};

const Address = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        AddressResult: action.payload.data,
        AddressLoading: action.payload.data,
        AddressError: action.payload.data,
      };
    case GET_CITY:
      return {
        ...state,
        AddressCityResult: action.payload.data,
        AddressCityLoading: action.payload.data,
        AddressCityError: action.payload.data,
      };

    default:
      return state;
  }
};

export default Address;
