import { ADD_VOLUNTEER } from '../actions';
const initialState = [{username: "Erick"}];

export const volunteersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VOLUNTEER:
            return {
                ...state,
                username: action.payload.username
                
            }
    default:
        return state;
    }
}