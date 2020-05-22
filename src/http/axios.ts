
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../store/redux-store';
import {logout} from '../actions';

const axios = require('axios');


const instance = axios.create({
    baseURL:'http://localhost:4545/'
});

interface config {
    headers:{Authorization:string}
    params:any,
    data:any,
    timeout:number
 }

instance.interceptors.request.use((config:config) => {
    // perform a task before the request is sent
    
    let token = localStorage.getItem('token');
    config.headers['Authorization'] = 'Bearer '+token
    return config;
  }, (error:any) => {
    // handle the error
    console.log("Error in http ",error)
    return Promise.reject(error);
});

interface IResponse {
     // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}

instance.interceptors.response.use((apiResponse:IResponse) => {
    // perform a task before the request is sent
   
    
    return apiResponse;
  }, (error:any) => {
    // handle the error
    store.dispatch(logout())
    if(error.response.status === 403) {
       console.log("ERror is",error.response.data)
       toast.error(error.response.data.err.msg)      
    }
    return Promise.reject(error);
});

class Api {

    constructor(){

    }
    getRequest({path,data}:any) {
      
        let params = data
        return instance.get(path,{params});
    }

    postRequest({path,data}:any) {
        return instance.post(path,data);
    }
}

export { Api }



