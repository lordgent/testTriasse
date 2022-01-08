export const GET_ADDRESS = "GET_ADDRESS";
export const GET_CITY = "GET_CITY";

export const getAllAddress = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ADDRESS,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("Address")) {
        const response = JSON.parse(localStorage.getItem("Address"));

        dispatch({
          type: GET_ADDRESS,
          payload: {
            loading: true,
            data: response,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ADDRESS,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};

export const getAllCity = (city) => {
  console.log("masuk ke city");
  return (dispatch) => {
    dispatch({
      type: GET_CITY,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("Address")) {
        const response = JSON.parse(localStorage.getItem("Address"));
        const search = response.find((item) => item?.Provinsi === city);

        dispatch({
          type: GET_CITY,
          payload: {
            loading: true,
            data: search.kota,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_CITY,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};
