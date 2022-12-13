import { DELETED_USER } from "../action/types"

const initialState = {
    user:[]
}

const deleteUSer = (state=initialState,action)=>{
    switch(action.type){
        case DELETED_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state 
    }
}
export default deleteUSer