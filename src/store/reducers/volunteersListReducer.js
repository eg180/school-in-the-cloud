import { ADD_VOLUNTEER, ADD_TASK, COMPLETE_TASK } from '../actions';
const initialState = {
    volunteers: [
        {
            id: "1",
            username: "Erick",
            tasks: [
                {task: "Call Delphine", complete: false},
                {task: "kiss Delphine", complete: false}
            ]
        },
        {
            id: "2",
            username: "Delphine",
            tasks: [
                {task: "Make soup", complete: false},
                {task: "Hiccup", complete: false},
                {task: "Read", complete: false}
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
                            {task: "", complete: false}
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
            case COMPLETE_TASK:

            return {
                ...state,
                volunteers: [
                    ...state.volunteers,
                    {

                        tasks: this.state.tasks.map((currentTask, indx) => {
                            if (action.payload.taskDescription === currentTask) {
                                return [
                            {...this.task, complete: true}
                        ]
                            }
                        })
                    }
                ]

            }
        default:
            return state;

        };
      
}