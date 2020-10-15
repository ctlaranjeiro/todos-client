import { SIGNUP_USER,LOGIN_USER, SET_LOGGED_USER, LOGOUT_USER } from "../actions/actionTypes";

export default function loggedUser(state = {}, action) {
    switch(action.type){
        case SIGNUP_USER:
            return action.user
        case LOGIN_USER:
            return action.user
        case SET_LOGGED_USER:
            return action.user
        case LOGOUT_USER:
            return {...state, loggedUser: action.user };
        default:
            return state;
    }
}