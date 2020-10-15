import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true
})


export const addList = (listName, color, userId) => {
    return service.post('/list' , { listName, color, userId })
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}


export const updateList = (id, listName) => {
    return service.put(`/list/${id}` , { listName })
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}

export const deleteList = (id) => {
    return service.delete(`/list/${id}`)
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}