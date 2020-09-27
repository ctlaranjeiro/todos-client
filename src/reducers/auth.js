import { LOGIN_USER, SET_LOGGED_USER } from "../actions/actionTypes";

export default function loggedUser(state = {}, action) {
    switch(action.type){
        case LOGIN_USER:
            return action.user
        case SET_LOGGED_USER:
            return action.user
        default:
            return state;
    }
}