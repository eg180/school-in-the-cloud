import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = {
    volunteers: [
        {
            username: "Erick",
            tasks: [
                {task: "Call Delphine"},
                {task: "kiss Delphine"}
            ]
        },
        {
            username: "Delphine",
            tasks: [
                {task: "Hiccup"},
                {task: "Make soup"},
                {task: "Read"}
            ]
        }
    ]
}
export const volunteersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VOLUNTEER:
            return [{
                ...state, 
                // id: action.payload.id,
                username: action.payload.username,
                task: "Does this show up?"
            }]
        case ADD_TASK:
            console.log('inside add task - nothing being returned. Still crashes?')
            return {
                ...state,
                username: action.payload.username, task: action.payload.task
            };
    default:
        return state;
    }
}