import { ADD_USER, DELETE_USER, EDIT_USER, GET_REQUEST, GET_USER } from "./types"

export const getRequest = ()=>{
    return{
        type:GET_REQUEST
    }
}
export const getUser = (user)=>{
    return {
        type:GET_USER,
        payload:user
    }
}

export const addUser = (user)=>{
    return {
        type:ADD_USER,
        payload:user
    }
}

export const deleteUser = ()=>{
    return {
        type:DELETE_USER,
    }
}

export const editUser = (user)=>{
    return {
        type:EDIT_USER,
        payload:user
    }
}