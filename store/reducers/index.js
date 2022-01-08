import { combineReducers } from "redux";
import AddressReducer from "./address";
import PaketReducer from "./paket";
import CartReducer from "./cart";
export default combineReducers({
  AddressReducer,
  PaketReducer,
  CartReducer,
});
