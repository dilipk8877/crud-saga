import { combineReducers } from "redux";
import addUser from "../AddUser";
import deleteUSer from "../DeleteUser";
import getList from "../GetUser";
import updatedUser from "../UpdateUser";


const rootReducer = combineReducers({
  addUser,
  deleteUSer,
  getList,
  updatedUser,
});

export default rootReducer