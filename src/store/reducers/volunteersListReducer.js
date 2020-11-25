import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = [
    {
        username: "Erick",
        tasks: [
            {task: "Call Delphine"},
            {task: "Tell Delphine you love her"},
            {task: "Ask Christian how he's doing."}
        ]
    },
    {
        username: "Herp",
        tasks: [
            {task: "Derp a little"},
            {task: "Herp a bit."},
            {task: "Eat something derpily."}
        ]
    },

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