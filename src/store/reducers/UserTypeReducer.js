import { SET_AS_ADMIN, SET_AS_STUDENT
, SET_AS_VOLUNTEER } from "../actions";


const initialUserAccessState = {
    admin: false,
    student: "hardcoded this as 'student' in state",
    volunteer: false
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
