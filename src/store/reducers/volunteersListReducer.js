import { ADD_VOLUNTEER, ADD_TASK } from '../actions';
const initialState = [{id: "0", username: "Jane Derp", task: "Teach"}];

export const volunteersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VOLUNTEER:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username
            }
    default:
        return state;
    }
}