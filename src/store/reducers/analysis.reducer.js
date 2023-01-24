import {analysisConstant,authConstant} from './../constants';

const initialState = {
  todayAnalysis: [],
  analysisErrors: [],
  stockAnalysis:[],
  videos:[],
  totalPages:0,
  loading: false,
  message:"",
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
      case analysisConstant.ANALYSIS_GET_REQUEST:
        case analysisConstant.STOCK_ANALYSIS_GET_REQUEST:
          case analysisConstant.GET_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
      break;
      case analysisConstant.ANALYSIS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        todayAnalysis: action.payload,
      };
      break;
      case analysisConstant.STOCK_ANALYSIS_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          stockAnalysis: action.payload,
        };
        break;

        case analysisConstant.CHECKOUT_ADD_SUCCESS:
          return {
            ...state,
            loading: false,
            message: action.payload,
          };
          break;
          case analysisConstant.GET_VIDEO_SUCCESS:
          return {
            ...state,
            loading: false,
            videos: action.payload.videos,
            totalPages:action.payload.totalPages
          };
          break;
    case analysisConstant.ANALYSIS_GET_FAILURE:
      case analysisConstant.STOCK_ANALYSIS_GET_FAILURE:
        case analysisConstant.CHECKOUT_ADD_FAILURE:
          case analysisConstant.GET_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        analysisErrors: action.payload.err,
      };
      break;
      case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        analysisErrors: [],
      };
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
