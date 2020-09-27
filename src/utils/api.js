import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL;

export const login = (username, password) => {
    return axios.post(`${backendUrl}/api/login`, { username, password })
        .then(responseFromAPI => {
            localStorage.setItem("loggedin", true);
            return responseFromAPI.data;
        })
}

export const loggedUser = () => {
    return axios.get(`${backendUrl}/api/loggedin`)
        .then(responseFromAPI => {
            localStorage.setItem("loggedin", true);
            return responseFromAPI.data;
        })
}