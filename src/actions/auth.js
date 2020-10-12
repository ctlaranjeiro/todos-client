import { LOGIN_USER, SET_LOGGED_USER } from "./actionTypes";
import { login, loggedUser } from '../utils/api';

/* Actions */
export function loginUserAction(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

export function setLoggedUserAction(user) {
    return {
        type: SET_LOGGED_USER,
        user
    }
}

/* Handlers */
export function loginOnAPI(username, password) {
    return dispatch => {
        return login(username, password).then((responseFromAPI) => {
            // console.log('responseFormAPI:', responseFromAPI);
            dispatch(loginUserAction(responseFromAPI))
        })
    }
}

export function loggedUserOnAPI() {
    return dispatch => {
        return loggedUser().then((responseFromAPI) => {
            // console.log('responseFormAPI:', responseFromAPI);
            dispatch(setLoggedUserAction(responseFromAPI))
        })
    }
}