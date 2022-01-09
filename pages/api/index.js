import axios from "axios";

export const API = axios.create({
  baseURL: "https://backendtesttriasse.herokuapp.com/backend/v1",
});

export const AuthToken = (tokenKey) => {
  if (tokenKey) {
    console.log(tokenKey);
    API.defaults.headers.common["Authorization"] = `Beraer ${tokenKey}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
