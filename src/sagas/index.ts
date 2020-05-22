import { call, put, takeEvery,all } from 'redux-saga/effects'
import {fetchProductWatcher} from './product'
import { loginWatcher } from './auth'
export function* plusCount(action:any) {
   try {
       const yes = yield 'yes'
       console.log("yes i am called",yes);
      const data = yield fetch("https://flowers.free.beeceptor.com");
      console.log("data is",data)
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export function *wathPlusCount(){
    console.log("came inside count plus");
     const mock = yield 'mocking';
     console.log("mock",mock)
    yield takeEvery('COUNT_PLUS',plusCount);
    
}


export default function* rootSaga() {
    yield all([
        wathPlusCount(),
        fetchProductWatcher(),
        loginWatcher()
    ]);
 }

