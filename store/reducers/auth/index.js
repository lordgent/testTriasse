import { AUTH, CEK_AUTH, REGISTER } from "../../actions/AuthActions";

const initialState = {
  AuthResult: false,
  AuthLoading: false,
  AuthError: false,

  UserLoginResult: false,
  UserLoginLoading: false,
  UserLoginError: false,

  UserRegisterResult: false,
  UserRegisterLoading: false,
  UserRegisterError: false,
};

const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        AuthResult: action.payload.data,
        AuthLoading: action.payload.data,
        AuthError: action.payload.data,
      };
    case CEK_AUTH:
      return {
        ...state,
        UserLoginResult: action.payload.data,
        UserLoginLoading: action.payload.data,
        UserLoginError: action.payload.data,
      };
    case REGISTER:
      return {
        ...state,
        UserRegisterResult: action.payload.data,
        UserRegisterLoading: action.payload.data,
        UserRegisterError: action.payload.data,
      };
    default:
      return state;
  }
};

export default AuthReducer;
