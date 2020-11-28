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

            return {
                ...state,
                volunteers: [
                    ...state.volunteers,
                    {
                        username: action.payload.username,
                        tasks: [
                            {task: action.payload.task}
                        ]
                    }
                ]

            }
        case ADD_TASK:

            return {
                ...state,
                tasks: [action.payload.task] 
            }
        default:
            return state;

        };
      
}