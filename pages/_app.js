import { useEffect } from "react";
import "../styles/globals.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { lab, address, products } from "../data/index";
import reducers from "../store/reducers";
function MyApp({ Component, pageProps }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  useEffect(() => {
    localStorage.setItem("Laboratorium", JSON.stringify(lab));
    localStorage.setItem("Address", JSON.stringify(address));
    localStorage.setItem("Products", JSON.stringify(products));
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
