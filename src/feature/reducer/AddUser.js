import { ADDED_USER } from "../action/types";

const initialState = {
    user: []
};
 const addUser=(state = initialState, action)=> {
    switch (action.type) {
        case ADDED_USER: {
            return {
                ...state,
                user: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}

export default addUser