// import { IPersonalInfo } from './models';
import {IPersonalInfo,AddPersonalAction,ADD_PERSONAL_INFO} from '../actions/index' 
let defaultPeronalvalue = {
  emailId:"",password:"",firstName:"", lastName:""
}

let intialState:IPersonalInfo = {
  emailId:"",
  password:"",
  firstName:"",
  lastName:""
}
const PersonalInfo = (state:IPersonalInfo = intialState, action:AddPersonalAction):IPersonalInfo => {
  
      switch (action.type) {
        case ADD_PERSONAL_INFO:
          return {
            ...state,
            ...action.personalInfo
          }
        default:
          return state
      }
}
    
export default PersonalInfo