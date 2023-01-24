import {currencyConstant,authConstant} from './../constants';
import axios from 'axios'


export const LatestCryptoCurrency=()=>{
    return async(dispatch)=>{
        dispatch({type:currencyConstant.CURRENCY_GET_REQUEST})
        try{
            const token =localStorage.getItem('token')
            const result = await axios.get(`${process.env.REACT_APP_ROOT}/coins/cryptocurrency?limit=10`,
         {
           headers: {
             Authorization: token ? `Bearer ${token}` : ''
           }
         })
         const {data} = result
          dispatch({type:currencyConstant.CURRENCY_GET_SUCCESS,payload:data})
        }
        catch(error){
          dispatch({type:currencyConstant.CURRENCY_GET_FAILURE,payload:{err:error.response.data.message}})
        }
    }
}

export const WeekHotNews=(page)=>{
  return async(dispatch)=>{
      dispatch({type:currencyConstant.WEEK_NEWS_REQUEST})
      try{
          const token =localStorage.getItem('token')
          const result = await axios.get(`${process.env.REACT_APP_ROOT}/news?page=${page}&limit=3`,
       {
         headers: {
           Authorization: token ? `Bearer ${token}` : ''
         }
       })
       const {data} = result
        dispatch({type:currencyConstant.WEEK_NEWS_SUCCESS,payload:{result:data.results,totalPages:data.totalPages}})
      }
      catch(error){
        dispatch({type:currencyConstant.WEEK_NEWS_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}
// Clearing Errors
export const clearCurrencyErrors = () => async (dispatch) => {
    dispatch({ type: authConstant.CLEAR_ERRORS });
  };