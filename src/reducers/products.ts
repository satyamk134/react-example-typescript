import { IProducts,FETCH_PRODUCT_API,getProductsAction,PRODUCTS } from './models';
import {IPersonalInfo,AddPersonalAction,ADD_PERSONAL_INFO} from '../actions/index' 
let defaultPeronalvalue = {
  emailId:"",password:"",firstName:"", lastName:""
}

let intialState:IProducts = {
  data:[]
}
const products = (state:IProducts = intialState, action:getProductsAction) => {
  
      switch (action.type) {
        case PRODUCTS:
          return {
            ...state,
            ...action.products
          }
        default:
          return state
      }
}
    
export default products