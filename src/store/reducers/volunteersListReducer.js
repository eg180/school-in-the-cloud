import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = {
    volunteers: [
        {
            id: "1",
            username: "Erick",
            tasks: [
                {task: "Call Delphine"},
                {task: "kiss Delphine"}
            ]
        },
        {
            id: "2",
            username: "Delphine",
            tasks: [
                {task: "Make soup"},
                {task: "Hiccup"},
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
                        id: action.payload.id,
                        username: action.payload.username,
                        tasks: [
                            {task: ""}
                        ]
                    }
                ]

            }
        case ADD_TASK:

            return {
                ...state,
                volunteers: [
                    ...state.volunteers,
                    {
                        username: action.payload.username,
                        tasks: [
                            {task: action.payload.tasks}
                        ]
                    }
                ]

            }
        default:
            return state;

        };
      
}