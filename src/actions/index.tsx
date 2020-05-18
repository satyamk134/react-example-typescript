let nextTodoId = 0
export const  addTodo = (text:any) =>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter:any) =>{
   
    return({
    type: 'SET_VISIBILITY_FILTER',
    filter
})}

export const toggleTodo = (id:any) =>({
    type: 'TOGGLE_TODO',
    id
})

export const setUserLoginStatus = (loginStatus:any) =>{
   
    return ({
    type: 'SET_LOGIN_STATUS',
    loginStatus
})}

export const setRegisterStep = (registerStep:any) =>{
   
    return ({
    type: 'SET_REGISTER_STEP',
    registerStep
})}

export const addPersonalInfo = ({emailId, password,firstName,lastName}:any) => {
   
    return ({
        type: 'ADD_PERSONAL_INFO',
        password,
        emailId,
        firstName,
        lastName
})}

export const addPaymentInfo = ({accountNumber, panNumber}:any) => {  
    return ({
        type: 'ADD_PAYMENT_INFO',
        accountNumber,
        panNumber
})}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}