import {currencyConstant,authConstant} from './../constants';

const initialState = {
  cryptoCurrency: [],
  hotNews:[],
  errors: [],
  loading: false,
  totalPages:1
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
      case currencyConstant.CURRENCY_GET_REQUEST:
      case currencyConstant.WEEK_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
      case currencyConstant.CURRENCY_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptoCurrency: action.payload,
      };
      break;
      case currencyConstant.WEEK_NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          hotNews: action.payload.result,
          totalPages:action.payload.totalPages
        };
        break;
    case currencyConstant.CURRENCY_GET_FAILURE:
    case currencyConstant.WEEK_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
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

export default currencyReducer;
