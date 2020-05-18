import {IPaymentInfo} from './models';

const paymentInfo = (state:IPaymentInfo = {accountNumber:"", panNumber:""}, action:any) => {
   
      switch (action.type) {
        case 'ADD_PAYMENT_INFO':
          return {
            ...state,
            accountNumber:action.accountNumber,
            panNumber:action.panNumber
        }
        default:
          return state
      }
}
    
export default paymentInfo