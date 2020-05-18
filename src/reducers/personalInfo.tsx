import { IPersonalInfo } from './models';

let defaultPeronalvalue = {
  emailId:"",password:"",firstName:"", lastName:""
}
const PersonalInfo = (state:IPersonalInfo = defaultPeronalvalue, action:any) => {
  
      switch (action.type) {
        case 'ADD_PERSONAL_INFO':
          return {
            ...state,
            emailId:action.emailId,
            password:action.password,
            firstName:action.firstName,
            lastName:action.lastName
          }
        default:
          return state
      }
}
    
export default PersonalInfo