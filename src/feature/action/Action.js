import { ADD_USER, DELETE_USER, GET_USER,  UPDATE_USER, USER_ID } from "./types"

// export const getRequest = ()=>{
//     return{
//         type:GET_REQUEST
//     }
// }

export const getUser = () => {
    return {
        type: GET_USER,
    };
};

export const addUSER = (data) => {
    return {
        type: ADD_USER, payload: data
    };
};
export const updateUSER = (data) => {
    return {
        type: UPDATE_USER, payload: data
    };
};
export const deleteUSER = (id) => {
    return {
        type: DELETE_USER, payload: id
    };
};


