import { combineReducers } from "redux";
import tasks from "./tasks";
import auth from "./auth";
import { LOGOUT_USER } from "../actions/actionTypes";


//Combine all reducers
const appReducer = combineReducers({
    tasks,
    loggedUser: auth
});

const rootReducer = (state, action) => {
    //Clear all data in redux store to initial
    if(action.type === LOGOUT_USER){
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;


// export default combineReducers({
//     tasks,
//     loggedUser: auth
// });
