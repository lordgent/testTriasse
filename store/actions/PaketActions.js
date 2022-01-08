export const GET_PAKETLAB = "GET_PAKETLAB";

export const getAllPaket = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PAKETLAB,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("Products")) {
        const response = JSON.parse(localStorage.getItem("Products"));
        dispatch({
          type: GET_PAKETLAB,
          payload: {
            loading: true,
            data: response,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_PAKETLAB,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};
