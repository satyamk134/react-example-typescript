import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import { logger } from 'redux-logger';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
export {
    store
}