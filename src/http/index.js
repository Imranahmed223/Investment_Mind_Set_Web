import axios from 'axios'

const token = window.localStorage.getItem('token');

const api = axios.create({
    baseURL: process.env.REACT_APP_ROOT,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
        Accept: 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    //   withCredentials: true,
    credentials: "same-origin",
  });
export const register = (data)=>api.post('/auth/register',{...data})
export const login = (data)=>api.post('/auth/login',{...data})
export const latestCryptoCurrency = ()=>api.get('/coins/cryptocurrency?limit=10')