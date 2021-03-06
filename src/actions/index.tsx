import { IProducts, getProductsAction,PRODUCTS, FETCH_PRODUCT_API,fetchProductApiAction, LOGOUT,
    logoutAction} from '../reducers/models'
import { IProduct } from '../components/models'
import registerStep from '../reducers/registerStep'
let nextTodoId = 0
export const addTodo = (text: any) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter: any) => {

    return ({
        type: 'SET_VISIBILITY_FILTER',
        filter
    })
}

export const toggleTodo = (id: any) => ({
    type: 'TOGGLE_TODO',
    id
})

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

/**
 * state 
 */
export type TloginStatus = {
    loginStatus: boolean
}

/**
 * action
 */
export interface LoginAction {
    type: typeof SET_LOGIN_STATUS,
    login: TloginStatus
}
export const setUserLoginStatus = (loginStatus: TloginStatus): LoginAction => {

    return ({
        type: SET_LOGIN_STATUS,
        login: loginStatus
    })
}



export const SET_REGISTER_STEP = 'SET_REGISTER_STEP'

export interface IregisterStep {
    activeStep:number
}

export interface setRegisterAction{
    type: typeof SET_REGISTER_STEP,
    registerStep:number

}


export const setRegisterStep = (registerStep: number):setRegisterAction => {

    return ({
        type: SET_REGISTER_STEP,
        registerStep: registerStep
    })
}




export const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO';
export interface IPersonalInfo {
    emailId: string,
    password: string,
    firstName: string,
    lastName: string
}

export interface AddPersonalAction {
    type: typeof ADD_PERSONAL_INFO,
    personalInfo: IPersonalInfo

}



export const addPersonalInfo = ({ emailId, password, firstName, lastName }: IPersonalInfo): AddPersonalAction => {

    console.log("personal info",({
        type: ADD_PERSONAL_INFO,
        personalInfo: {
            emailId,
            password,
            firstName,
            lastName
        }
    }))
    return ({
        type: ADD_PERSONAL_INFO,
        personalInfo: {
            emailId,
            password,
            firstName,
            lastName
        }
    })
}
export const ADD_PAYMENT_INFO = 'ADD_PAYMENT_INFO';

export interface IPaymentInfo {
    accountNumber: string
    panNumber: string,
}

export interface AddPaymentAction {
    type: typeof ADD_PAYMENT_INFO,
    paymentInfo:IPaymentInfo
}

export const addPaymentInfo = ({ accountNumber, panNumber }: IPaymentInfo):AddPaymentAction => {
    return ({
        type: ADD_PAYMENT_INFO,
        paymentInfo:{
            accountNumber,
            panNumber
        }
    })
}

export const getProdcuts = ():fetchProductApiAction=>({
    type: FETCH_PRODUCT_API,
})

export const fetchedProducts = ({data}:IProducts) => ({
    type:PRODUCTS,
    data
})


export const logout = ():logoutAction=>({
    type:LOGOUT,
   

})


export const getCount = () => ({
    type: 'FETCH_PRODUCT'
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}