// import { getError, getRequest, getUser } from "../action/Action"
// import { GET_ERROR, GET_REQUEST, GET_USER } from "../action/types"

// const initialState = {
//     user :[],
//     loading:false,
//     error:""
// }

// export const userReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case GET_REQUEST:{
//             return {
//                 ...state,
//                 loading: true,
//                 error:''
//             }
//         }
//         case GET_USER:{
//             return {
//                 ...state,
//                 user: action.user,
//                 loading: false
//             }
//         }
//         case GET_ERROR:{
//             return{
//                 loading: false,
//                error: action.error
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }