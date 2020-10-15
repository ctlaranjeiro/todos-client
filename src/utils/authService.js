import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true
})

export const signup = (username, password) => {
    return service.post('/signup' , { username, password })
        .then(responseFromAPI => {
            localStorage.setItem("loggedin", true);
            return responseFromAPI.data;
        })
}

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

export const logout = () => {
    return service.post('/logout')
        .then(responseFromAPI => {
            localStorage.clear();
            return responseFromAPI.data;
        })
}