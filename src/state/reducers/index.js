import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    amount: amountReducer,
    users:userReducer,
   
})
export default reducers;