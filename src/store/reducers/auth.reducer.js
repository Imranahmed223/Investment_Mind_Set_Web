import { authConstant } from "./../constants/auth.constants";

const initialState = {
  users: [],
  errors: [],
  loading: false,
  loginMessage:"",
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case authConstant.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
      case authConstant.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
      break;
    case authConstant.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
      break;
      case authConstant.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
    case authConstant.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.user,
        loginMessage:action.payload.message
      };
      break;
    case authConstant.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
      break;
      case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        message: "",
        loginMessage:""
      };
      break;
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
      };
      break;
      default:
      return state;
  }
};

export default authReducer;
