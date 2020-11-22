import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = [
    {id: "", username: "Jane Derp", task: "Send welcome message to students."},
    {id: "", username: "Herpin Fart", task: "Derp all day."},
    {id: "", username: "Dude Shirt", task: "Do your thang."}
];

export const volunteersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VOLUNTEER:
            return [{
                ...state, 
                id: action.payload.id,
                username: action.payload.username,
                task: ""
            }]
        case ADD_TASK:
            return {
                ...state,
                // username: action.payload.username,
                username: action.payload.username,
                task: action.payload.task
            }
    default:
        return state;
    }
}