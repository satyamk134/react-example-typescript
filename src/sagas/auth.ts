import { call, put, takeEvery,all } from 'redux-saga/effects'
import {FETCH_PRODUCT_API, PRODUCTS,LOGOUT,logoutAction } from '../reducers/models'
import  ProductService  from '../http/Product.service'
import { IProducts } from '../components/models';
import {SET_LOGIN_STATUS,LoginAction } from  '../actions'
function *logout() { 
    try {
        console.log("data is")
       const action:LoginAction = {type:SET_LOGIN_STATUS,login:{loginStatus:false}}
       yield put(action)
      
    } catch (error) {
       yield put({type: "FETCH_FAILED", error})
    }
}

function *loginWatcher() {
       yield takeEvery(LOGOUT,logout) 
}

export {
    loginWatcher,
}