export const AUTH = "AUTH";
export const CEK_AUTH = "CEK_AUTH";
export const REGISTER = "REGISTER";
import Cookie from "js-cookie";
import { API } from "../../pages/api/index";
import Router from "next/router";
import swal from "sweetalert";

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

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    API.post("/signin", form, config)
      .then((response) => {
        dispatch({
          type: AUTH,
          payload: {
            loading: true,
            data: response.data.user,
            errorMessage: false,
          },
        });

        swal("Login is Success");
        Router.push("/");
        Cookie.set("token", response.data.data.token);
      })
      .catch((err) => {
        dispatch({
          type: AUTH,
          payload: {
            loading: false,
            data: false,
            errorMessage: err,
          },
        });
      });
  };
};

export const cekAuthLogin = () => {
  return (dispatch) => {
    dispatch({
      type: CEK_AUTH,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    const getAuth = async () => {
      try {
        const response = await API.get("/cekauth");

        dispatch({
          type: CEK_AUTH,
          payload: {
            loading: false,
            data: response.data.data,
            error: false,
          },
        });
      } catch (error) {
        dispatch({
          type: CEK_AUTH,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    };
    getAuth();
  };
};

export const RegisterApp = (form) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    const getRegister = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const body = JSON.stringify(form);
        const response = await API.post("/signup", body, config);

        if (response.status === 200) {
          swal("Register is Succes");

          dispatch({
            type: REGISTER,
            payload: {
              loading: false,
              data: response.data.data,
              error: false,
            },
          });
        }
      } catch (error) {
        dispatch({
          type: REGISTER,
          payload: {
            loading: false,
            data: false,
            error: error.message,
          },
        });
      }
    };
    getRegister();
  };
};
