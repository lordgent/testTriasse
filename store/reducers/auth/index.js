import { AUTH } from "../../actions/AuthActions";

const initialState = {
  AuthResult: false,
  AuthLoading: false,
  AuthError: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        AuthResult: action.payload.data,
        AuthLoading: action.payload.data,
        AuthError: action.payload.data,
      };

    default:
      return state;
  }
};

export default AuthReducer;
