import { GET_PAKETLAB, GET_DIAGNOSA } from "../../actions/PaketActions";
const initialState = {
  PaketResult: false,
  PaketLoading: false,
  PaketError: false,

  DiagnosaResult: false,
  DiagnosaLoading: false,
  DiagnosaError: false,
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
    case GET_DIAGNOSA:
      return {
        ...state,
        DiagnosaResult: action.payload.data,
        DiagnosaLoading: action.payload.data,
        DiagnosaError: action.payload.data,
      };

    default:
      return state;
  }
};

export default PaketLab;
