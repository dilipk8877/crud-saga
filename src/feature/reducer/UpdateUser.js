import { UPDATED_USER } from "../action/types"

const initialState = {
    user:[]
}

 const updatedUser = (state=initialState,action)=>{

    switch(action.type){
        case UPDATED_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return {...state}
    }
}

export default updatedUser