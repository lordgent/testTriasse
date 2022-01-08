export const GET_CART = "GET_CART";
export const ADD_CART = "ADD_CART";

export const getAllCart = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CART,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("cart")) {
        const response = JSON.parse(localStorage.getItem("cart"));
        dispatch({
          type: GET_CART,
          payload: {
            loading: true,
            data: response,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_CART,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};

export const AddToCart = (data) => {
  console.log("masuk ke data");
  return (dispatch) => {
    dispatch({
      type: ADD_CART,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("cart")) {
        const oldcart = JSON.parse(localStorage.getItem("cart"));
        const response = localStorage.setItem(
          "cart",
          JSON.stringify([...oldcart, data])
        );
        console.log(response);
        dispatch({
          type: ADD_CART,
          payload: {
            loading: true,
            data: data,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_CART,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};
