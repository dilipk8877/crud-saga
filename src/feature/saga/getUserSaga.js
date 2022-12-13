import axios from "axios"
import {call,put, takeEvery} from "redux-saga/effects"
import { GET_USER, GOT_USER } from "../action/types"

const ApiFetch = async()=>{
    try{
        const res = await axios.get("http://localhost:3004/users")
        return res.data
    }catch(error){
        console.log(error);
    }
}

function* getUser(){
    try{
        const userResponse = yield call(ApiFetch)
        yield put({type:GOT_USER,payload:userResponse})
    }catch(error){
        console.log(error)
    }
}

function* getUserSaga(){
    yield takeEvery(GET_USER,getUser)
}

export default getUserSaga