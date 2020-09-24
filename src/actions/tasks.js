import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, RECEIVE_TASKS } from "./actionTypes";

/* Actions */
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