
import {ADD_PAYMENT_INFO, IPaymentInfo,AddPaymentAction} from '../actions/index'

const initialState = {
  accountNumber:"",
  panNumber:""
}

const paymentInfo = (state:IPaymentInfo = initialState, action:AddPaymentAction):IPaymentInfo => {
   
      switch (action.type) {
        case ADD_PAYMENT_INFO:
          return {
            ...state,
            ...action.paymentInfo
        }
        default:
          return state
      }
}
    
export default paymentInfo