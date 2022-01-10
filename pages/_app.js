import { useEffect } from "react";
import "../styles/globals.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { lab, address, products, diagnosa } from "../data/index";
import reducers from "../store/reducers";
import { AuthToken } from "../pages/api/index";
import Cookies from "js-cookie";

const token = Cookies.get("token");
if (token) {
  AuthToken(token);
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      AuthToken(token);
    }
  }, []);

  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  useEffect(() => {
    localStorage.setItem("Laboratorium", JSON.stringify(lab));
    localStorage.setItem("Address", JSON.stringify(address));
    localStorage.setItem("Products", JSON.stringify(products));
    localStorage.setItem("Diagnosa", JSON.stringify(diagnosa));
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
