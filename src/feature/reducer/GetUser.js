import { GOT_USER } from "../action/types"

const initialState = {
    user:[]
}

 const getList = (state=initialState,action)=>{
    switch(action.type){
        case GOT_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}

export default getList