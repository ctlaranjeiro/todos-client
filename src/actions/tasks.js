import {
    ADD_TASK,
    REMOVE_TASK,
    TOGGLE_TASK,
    RECEIVE_TASKS,
    ADD_TASK_API,
    UPDATE_TASK_API,
    DELETE_TASK_API
} from "./actionTypes";

import { addTask, updateTask, deleteTask} from '../utils/taskAPI';


/* Actions */

//LOCAL
export function receiveTasksAction(tasks) {
    return {
        type: RECEIVE_TASKS,
        tasks
    }
}

export function addTaskAction(task) {
    return {
        type: ADD_TASK,
        task
    }
}

export function removeTaskAction(id) {
    return {
        type: REMOVE_TASK,
        id
    }
}

export function toggleTaskAction(task) {
    return {
        type: TOGGLE_TASK,
        task
    }
}

// API
export function addTaskAPIAction(task) {
    return {
        type: ADD_TASK_API,
        task
    }
}

export function deleteTaskAPIAction(id) {
    return {
        type: DELETE_TASK_API,
        id
    }
}

export function updateTaskAPIAction(task) {
    return {
        type: UPDATE_TASK_API,
        task
    }
}


/* Handlers */
export function addTaskOnAPI(task, listId, userId) {
    return dispatch => {
        return addTask(task, listId, userId).then((responseFromAPI) => {
            dispatch(addTaskAPIAction(responseFromAPI))
        })
    }
}

export function updateTaskOnAPI(task) {
    return dispatch => {
        return updateTask(task).then((responseFromAPI) => {
            dispatch(addTaskAPIAction(responseFromAPI))
        })
    }
}

export function deleteTaskOnAPI() {
    return dispatch => {
        return deleteTask().then((responseFromAPI) => {
            dispatch(addTaskAPIAction(responseFromAPI))
        })
    }
}