import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = [
    {username: "Jane Derp", task: "Send welcome message to students."},
    {username: "Herpin Fart", task: "Derp all day."},
    {username: "Dude Shirt", task: "Do your thang."}
];

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