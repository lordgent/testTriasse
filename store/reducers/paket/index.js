import { GET_PAKETLAB } from "../../actions/PaketActions";
const initialState = {
  PaketResult: false,
  PaketLoading: false,
  PaketError: false,
};

const PaketLab = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAKETLAB:
      return {
        ...state,
        PaketResult: action.payload.data,
        PaketLoading: action.payload.data,
        PaketError: action.payload.data,
      };

    default:
      return state;
  }
};

export default PaketLab;
