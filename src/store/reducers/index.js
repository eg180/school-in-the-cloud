import { combineReducers } from 'redux';

import { userTypeReducer } from './userTypeReducer';
import { currentUserReducer } from './currentUserReducer';
import { volunteersListReducer } from './volunteersListReducer';

export default combineReducers({
    userTypeReducer,
    currentUserReducer,
    volunteersListReducer
})
