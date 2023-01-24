import {authConstant} from './../constants';
import {register,login} from './../../http'
import {auth,GoogleAuthProvider,FacebookAuthProvider} from '../../firebase'




export const Register=(user)=>{
    return async(dispatch)=>{
        dispatch({type:authConstant.USER_REGISTER_REQUEST})
        try{
          await register(user)
          dispatch({type:authConstant.USER_REGISTER_SUCCESS,payload:"User Created Successfully"})
        }
        catch(error){
          dispatch({type:authConstant.USER_REGISTER_FAILURE,payload:{err:error.response.data.message}})
        }
    }
}

export const Login=(admin)=>{
  return async(dispatch)=>{
    dispatch({type:authConstant.USER_LOGIN_REQUEST})
      try{
        const result=await login(admin)
        const {data} = result
          dispatch({type:authConstant.USER_LOGIN_SUCCESS,payload:{user:data.user,message:"Login Successfully!"}})
          localStorage.setItem('token',data.tokens.access.token)
      }
      catch(error){
        dispatch({type:authConstant.USER_LOGIN_FAILURE,payload:{err:error.response.data.message}})
      }
  }
}

// export const LogOut=(admin)=>{
//   return async(dispatch)=>{
//     dispatch({type:authConstant.USER_LOGIN_REQUEST})
//       try{
//         const result=await login(admin)
//         const {data} = result
//           dispatch({type:authConstant.USER_LOGIN_SUCCESS,payload:{user:data.user,message:"Login Successfully!"}})
//           localStorage.setItem('token',data.tokens.access.token)
//       }
//       catch(error){
//         dispatch({type:authConstant.USER_LOGIN_FAILURE,payload:{err:error.response.data.message}})
//       }
//   }
// }
export const googleInitiate=()=>{
  return async function(dispatch){
      // dispatch({type:authConstant.Google_SIGNIN_REQUEST})
      try{
          const result = await auth.signInWithPopup(GoogleAuthProvider)
          console.log('result is',result)
          // dispatch({type:authConstant.Google_SIGNIN_SUCESS,payload:"Social Login Successfully"})
          // localStorage.setItem('authenticate','true')
      }
      catch(err){
          // dispatch({type:authConstant.Google_SIGNIN_FAILURE,payload:err}) 
      }
  }
}


export const facebookInitiate=()=>{
  return async function(dispatch){
      // dispatch({type:authConstant.Facebook_SIGNIN_REQUEST})
      try{
         const result = await auth.signInWithPopup(FacebookAuthProvider.addScope("user_birthday, email"))
         console.log('result is',result)
          // dispatch({type:authConstant.Facebook_SIGNIN_SUCESS,payload:"Social Login Successfully"})
          // localStorage.setItem('authenticate','true')
      }
      catch(err){
          // dispatch({type:authConstant.Facebook_SIGNIN_FAILURE,payload:err}) 
      }
  }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_MESSAGES });
};