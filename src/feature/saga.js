// import axios from 'axios'
// import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects'
// import { getRequest, getUser,deleteUser } from './action/Action'
// import { DELETE_USER, GET_REQUEST, GET_USER } from './action/types'
// const fetchUser = async()=>{
//   try{
//     const res = await axios.get("http://localhost:3004/users")
//     return res.data
//   }catch(error){
//     console.log(error);
//   }
// }

// const deleteUsers = async(id)=>{
//   try{
//     const res = await axios.delete(`http://localhost:3004/users/${id}`)
//     return res.data
//   }catch(error){
//     console.log(error);
//   }
// }
// function* getUsersSaga() {
//     try{
//         const data = yield call(fetchUser)
//         yield put({type:GET_USER,user:data })
//     }catch(error){
//         console.log(error)
//     }
// }

// function* deleteUsersSaga() {
//   try{
//       const data = yield call(deleteUsers)
//       yield put({type:DELETE_USER,user:data})
//   }catch(error){
//       console.log(error)
//   }
// }
// // const allSaga = yield call{}

// function* rootSaga(){
//   yield all([
//     takeLatest(GET_REQUEST,getUsersSaga),
//     takeLatest(DELETE_USER,deleteUsersSaga)
//   ])
// }
// export default rootSaga