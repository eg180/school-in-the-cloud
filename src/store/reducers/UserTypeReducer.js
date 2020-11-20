import { SET_AS_ADMIN, SET_AS_STUDENT
, SET_AS_VOLUNTEER } from "../actions";

// getting info from localStorage


//

const initialUserAccessState = {
    name: ''
};

export const userTypeReducer = (state = initialUserAccessState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
