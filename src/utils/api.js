import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: `https://todos-app-server.herokuapp.com/api`,
    withCredentials: true
})

export const login = (username, password) => {
    return service.post('/login' , { username, password })
        .then(responseFromAPI => {
            localStorage.setItem("loggedin", true);
            return responseFromAPI.data;
        })
}

export const loggedUser = () => {
    return service.get('/isloggedin')
        .then(responseFromAPI => {
            if (responseFromAPI.data.username) {
                localStorage.setItem("loggedin", true);
            }
            return responseFromAPI.data;
        })
}