import { boolean } from "yup";

export interface IPersonalInfo{
    emailId:string,
    password:string,
    firstName:string,
    lastName:string
}

export interface IPaymentInfo{
    accountNumber:string,
    panNumber:string,
}

export const FETCH_PRODUCT_API = 'FETCH_PRODUCT_API';

export interface  fetchProductApiAction{
    type: typeof FETCH_PRODUCT_API,
}

export const PRODUCTS = 'PRODUCTS'

export interface IProducts {
    data:Array<any>
}

export interface getProductsAction {
    type:typeof PRODUCTS,
    products: IProducts
}

export const LOGOUT = 'LOGOUT';

export interface  logoutAction {
    type:typeof LOGOUT,
   
    
}






