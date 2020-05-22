import {Api} from './axios';

const api = new Api();

interface Access_token  {
   access_token:string
}
interface Data{
   emailId:string,
   password:string
}

const loginService = {
   getGoogleConsent: ()=>api.getRequest({path:'/auth/google',data:{}}),
   getAccessToken: ({access_token}:Access_token)=>api.getRequest({path:'/auth/token', data:{code:access_token }}),
   authorizeUser:({access_token}:Access_token)=>api.postRequest({path:'auth/authorizeUser', data: {access_token: access_token}}),
   login:(param:Data)=> api.postRequest({path:'auth/login', data: {...param}}),
   createUser:(param:Data)=>api.postRequest({path:'auth/user', data: {...param}})
 }

// loginService.getGoogleConsent = ()=> {
//    return  api.getRequest({path:'/auth/google',data:{}})
// }

// loginService.getAccessToken = ({access_token}) => {
//    return api.getRequest({path:'/auth/token', data:{code:access_token }})
// }

// loginService.authorizeUser = ({access_token}) =>{
   
//    return api.postRequest({path:'auth/authorizeUser', data: {access_token: access_token}})
// }

// loginService.login = (data)=>{
//    return api.postRequest({path:'auth/login', data: {...data}})
// } 

// loginService.createUser = (data)=>{
//    return api.postRequest({path:'auth/user', data: {...data}})

// }


export default loginService
