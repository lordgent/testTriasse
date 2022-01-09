import { combineReducers } from "redux";
import AddressReducer from "./address";
import PaketReducer from "./paket";
import CartReducer from "./cart";
import SearchReducer from "./lab/Index";

export default combineReducers({
  AddressReducer,
  PaketReducer,
  CartReducer,
  SearchReducer,
});
