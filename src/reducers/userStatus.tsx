import { LoginAction,TloginStatus,SET_LOGIN_STATUS } from '../actions/index';

let initialState:TloginStatus = {
  loginStatus:false
}
const userLogin = (state:TloginStatus = initialState, action:LoginAction):TloginStatus => {
  
      switch (action.type) {
        case SET_LOGIN_STATUS:
          return action.login
        
        default:
          return state
      }
}
    
export default userLogin
    