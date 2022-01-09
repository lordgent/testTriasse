export const GET_LAB = "GET_LAB";

export const getSearchLab = (search) => {
  return (dispatch) => {
    dispatch({
      type: GET_LAB,
      payload: {
        loading: true,
        data: null,
        error: false,
      },
    });

    try {
      if (localStorage.getItem("Laboratorium")) {
        const response = JSON.parse(localStorage.getItem("Laboratorium"));

        const searchdata = response.filter((item) => {
          return (
            item?.address?.toLowerCase().includes(search) ||
            item?.address?.includes(search)
          );
        });

        dispatch({
          type: GET_LAB,
          payload: {
            loading: true,
            data: searchdata,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LAB,
        payload: {
          loading: false,
          data: null,
          error: error,
        },
      });
    }
  };
};
