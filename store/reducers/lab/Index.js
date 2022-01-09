import { GET_LAB } from "../../actions/LabActions";

const initialState = {
  SearchLocationResult: false,
  SearchLocationLoading: false,
  SearchLocationError: false,
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAB:
      return {
        ...state,
        SearchLocationResult: action.payload.data,
        SearchLocationLoading: action.payload.data,
        SearchLocationError: action.payload.data,
      };

    default:
      return state;
  }
};

export default LocationReducer;
