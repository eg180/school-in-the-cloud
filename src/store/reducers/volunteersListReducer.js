import { ADD_VOLUNTEER, ADD_TASK, COMPLETE_TASK } from '../actions';
const initialState = {
    volunteers: [
        {
            id: "1",
            username: "Erick",
            tasks: [
                {task: "Call Delphine", task_id: "3223", complete: false},
                {task: "kiss Delphine", task_id: "232", complete: false}
            ]
        },
        {
            id: "2",
            username: "Delphine",
            tasks: [
                {task: "Make soup", task_id: "2366", complete: false},
                {task: "Hiccup", task_id: "23463", complete: false},
                {task: "Read", task_id: "23467", complete: false}
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
                            {task: "", complete: false, task_id: ""}
                        ]
                    }
                ]

            }
        case ADD_TASK:
            console.log('inside ADD_TASK')
            return {
                ...state,
                volunteers: [
                    ...state.volunteers,
                    {
                        username: action.payload.username,
                        id: action.payload.id,
                        tasks: [
                            {task: action.payload.task, task_id: action.payload.task_id, complete: false}
                        ]
                    }
                ]

            }
        case COMPLETE_TASK:
            console.log('inside COMPLETE_TASK')
            return{
                
            }
        default:
            return state;

        };
      
}