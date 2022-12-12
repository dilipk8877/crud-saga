import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './feature/reducer/Reducer'
import rootSaga from './feature/saga'
import { createStore, applyMiddleware } from 'redux'
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    userList:userReducer
})
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
export default store
sagaMiddleware.run(rootSaga)