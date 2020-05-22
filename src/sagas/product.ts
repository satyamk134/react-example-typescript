import { call, put, takeEvery,all } from 'redux-saga/effects'
import {FETCH_PRODUCT_API, PRODUCTS } from '../reducers/models'
import  ProductService  from '../http/Product.service'
import { IProducts } from '../components/models';
function *fetchProducts() { 
    try {
       const data:IProducts = yield ProductService.getProducts();
    
       yield put({type:PRODUCTS,products:data.data})
       console.log("data is",data)
    } catch (error) {
       yield put({type: "FETCH_FAILED", error})
    }
}

function *fetchProductWatcher() {
       yield takeEvery(FETCH_PRODUCT_API,fetchProducts) 
}

export {
    fetchProducts,
    fetchProductWatcher
}