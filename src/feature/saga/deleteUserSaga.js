import axios from "axios"
import {call, put, takeEvery} from "redux-saga/effects"
import { DELETED_USER, DELETE_USER } from "../action/types"

const ApiFetch = async(id)=>{
    try{
        const res = await axios.delete(`http://localhost:3004/users/${id}`)
        return res.data
    }catch(error){
        console.log(error);
    }
}

function* deleteUser (action){
    try{
        const deleteResponse = yield call(ApiFetch,action.payload)
        yield put({type:DELETED_USER,payload:deleteResponse})
    }catch(error){
        console.log(error)
    }
}

function* deleteUserSaga(){
    yield takeEvery(DELETE_USER,deleteUser)
}

export default deleteUserSaga