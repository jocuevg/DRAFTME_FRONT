import { parseJsonResponse } from '@/helpers/parseJsonResponse';
import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://localhost:7192/api/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});
instance.interceptors.response.use((response)=>{
  parseJsonResponse(response.data);
  return response;
},
(error) => {
  return Promise.reject(error);
})
export default instance