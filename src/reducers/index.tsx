import { combineReducers } from 'redux'

import userStatus from './userStatus';
import registerStep from './registerStep'
import personalInfo from'./personalInfo'
import paymentInfo  from './paymentInfo'
import products from'./products'
export default combineReducers({
  userStatus,
  registerStep,
  personalInfo,
  paymentInfo,
  products
})