import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATED_USER, UPDATE_USER } from "../action/types";

const ApiFetch = async({userID,userData})=>{
    console.log(userID,userData)
    try{
        const res = await axios.put(`http://localhost:3004/users/${userID}`,userData)
        console.log(res);
        return res.data
    }catch(error){
        console.log(error);
    }
}

function* updateUser(action){
    console.log(action);
    try{
        const updateResponse = yield call(ApiFetch,action)
        console.log(updateResponse)
        yield put({type:UPDATED_USER,payload:updateResponse})
    }catch(error){
        console.log("sfgd",error)
    }
}

function* updatedUserSaga(){
    yield takeEvery(UPDATE_USER,updateUser)
}

export default updatedUserSaga