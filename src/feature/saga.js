import axios from 'axios'
import { put, call, takeEvery } from 'redux-saga/effects'
import { getRequest, getUser,deleteUser } from './action/Action'
const fetchUser = async()=>{
  try{
    const res = await axios.get("http://localhost:3004/users")
    return res.data
  }catch(error){
    console.log(error);
  }
}

const deleteUsers = async(id)=>{
  try{
    const res = await axios.delete(`http://localhost:3004/users/${id}`)
    return res.data
  }catch(error){
    console.log(error);
  }
}
function* getUsersSaga() {
    try{
        const data = yield call(deleteUsers)
        yield put({type:getUser, payload: data })
    }catch(error){
        console.log(error)
    }
}

function* deleteUsersSaga() {
  try{
      const data = yield call(deleteUser)
      yield put({type:deleteUser, payload: data })
  }catch(error){
      console.log(error)
  }
}

function* rootSaga(){
  yield takeEvery(getRequest,getUsersSaga)
}
export default rootSaga