import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL;

const service = axios.create({
    baseURL: `${backendUrl}/api`,
    withCredentials: true
})


export const addTask = (task, userId, listId) => {
    return service.post('/task' , { task, userId, listId })
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}


export const updateTask = (id, task, completed) => {
    return service.put(`/task/${id}` , { task, completed })
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}

export const deleteTask = (id) => {
    return service.delete(`/task/${id}`)
        .then(responseFromAPI => {
            return responseFromAPI.data;
        })
}