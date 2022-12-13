import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects";
import { ADDED_USER, ADD_USER} from "../action/types";

const ApiFetch = async(userData)=>{
    try{
        const res = await axios.post("http://localhost:3004/users",userData)
        return res.data
    }catch(error){
        console.log(error);
    }
}

function* addUser(action){
    try{
        const addResponse = yield call(ApiFetch,action.payload)
        yield put({type:ADDED_USER,payload:addResponse})
    }catch(error){
        console.log(error)
    }
}

function* addUserSaga(){
    yield takeEvery(ADD_USER,addUser)
}

export default addUserSaga