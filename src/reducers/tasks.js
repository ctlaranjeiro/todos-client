import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, RECEIVE_TASKS } from "../actions/actionTypes";

const initialState = [
    {id: 'zcejlds6zpkebjjvjr', task: 'Walk the dog', completed: false},
    {id: 'ums8j0t5559kebjkoho', task: 'Buy groceries', completed: false},
    {id: 'Whosdy0tsyebjuhsEho', task: 'Pour myself a drink', completed: false},
    {id: 's6z0t5zpkebj948iyf9', task: 'Be awesome', completed: true}
]

export default function tasks(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_TASKS: 
            return action.tasks;
        case ADD_TASK:
            return state.concat(action.task);
        case REMOVE_TASK:
            return state.filter((task) => task.id !== action.id);
        case TOGGLE_TASK:
            return state.map(task => 
                task.id === action.task.id ? { ...task, completed: task.completed } : task
                );
        default:
            return state;
    }
}