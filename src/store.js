import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./feature/reducer/combineReducer/combineReducer"
import getUserSaga from './feature/saga/getUserSaga'
import deleteUserSaga from './feature/saga/deleteUserSaga'
import updatedUserSaga from './feature/saga/updateUserSaga'
import addUserSaga from './feature/saga/addUserSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store

sagaMiddleware.run(getUserSaga)
sagaMiddleware.run(deleteUserSaga)
sagaMiddleware.run(updatedUserSaga)
sagaMiddleware.run(addUserSaga)
