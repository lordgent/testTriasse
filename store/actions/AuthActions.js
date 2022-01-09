export const AUTH = "AUTH";
import { API } from "../../pages/api/index";

export const cekAuth = (form) => {
  return (dispatch) => {
    dispatch({
      type: AUTH,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    const postAuth = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(form);
        const response = await API.post("/signin", body, config);
        localStorage.setItem("token", response.data.data.token);
        dispatch({
          type: AUTH,
          payload: {
            loading: true,
            data: response.data.data,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: AUTH,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    };
    postAuth();
  };
};
