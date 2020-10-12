import axios from 'axios';


class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            withCredentials: true,
            crossdomain: true
        })
        this.service = service;
    }

    login = (username, password) => {
        return this.service.post('/login' , { username, password, "grant_type": "password" })
            .then(responseFromAPI => {
                localStorage.setItem("loggedin", true);
                return responseFromAPI.data;
            })
        
        }

        loggedUser = () => {
            return this.service.get('/loggedin')
                .then(responseFromAPI => {
                    if (responseFromAPI.data.username) {
                        localStorage.setItem("loggedin", true);
                    }
                    return responseFromAPI.data;
                })
        }

}

export default AuthService;