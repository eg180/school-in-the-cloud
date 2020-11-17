import { SET_ACCOUNT_TYPE } from "../actions";

const initialState = {
    student: false,
    volunteer: false,
    admin: false,
    isLoading: false,
    testing: "works"
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_TYPE:
            return {
                ...state,
                admin: true,
                isLoading: true
            }
        default:
            return state;
    }
};