import { getRequest, getUser } from "../action/Action"

const initialState = {
    user :[],
    loading:"loading",
    error:null
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case getRequest:{
            return state.loading
        }
        case getUser:{
            return {
                ...state,
                user:action.payload 
            }
        }
        default:{
            return state
        }
    }
}