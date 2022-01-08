export const GET_CART = "GET_CART";
export const ADD_CART = "ADD_CART";
export const DELETE_CARTBYID = "DELETE_CARTBYID";

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
            loading: false,
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
        localStorage.setItem("cart", JSON.stringify([...oldcart, data]));

        dispatch({
          type: ADD_CART,
          payload: {
            loading: true,
            data: data,
            error: false,
          },
        });
      } else {
        localStorage.setItem("cart", JSON.stringify([data]));

        dispatch({
          type: ADD_CART,
          payload: {
            loading: false,
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

export const deteleCartById = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch({
      type: DELETE_CARTBYID,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    try {
      if (localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        const newData = cart.filter((x) => x.id !== id);
        localStorage.setItem("cart", JSON.stringify(newData));
        dispatch({
          type: DELETE_CARTBYID,
          payload: {
            loading: false,
            data: true,
            error: error,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_CARTBYID,
        payload: {
          loading: false,
          data: false,
          error: error,
        },
      });
    }
  };
};
