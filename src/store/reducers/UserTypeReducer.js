import { SET_AS_ADMIN, SET_AS_STUDENT
, SET_AS_VOLUNTEER } from "../actions";


const initialUserAccessState = {
    admin: false,
    student: false,
    volunteer: false,
    name: "Erick"
};

export const userTypeReducer = (state = initialUserAccessState, action) => {
    switch (action.type) {
        case SET_AS_ADMIN:
            return {
                ...state,
                admin: true
            }
        case SET_AS_STUDENT:
            return {
                ...state,
                student: true
            }
        case SET_AS_VOLUNTEER:
            return {
                ...state,
                volunteer: true
            }

        default:
            return state;
    }
};
