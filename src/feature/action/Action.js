import { ADD_USER, DELETE_USER, GET_USER,  UPDATE_USER } from "./types"

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


