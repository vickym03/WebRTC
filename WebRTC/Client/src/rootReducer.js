import { combineReducers } from "redux";
import usersReducer from "./login/reducer";

const rootReducer = combineReducers({
    usersReducer:usersReducer
});

export default rootReducer