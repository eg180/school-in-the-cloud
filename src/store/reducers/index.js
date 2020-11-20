import { combineReducers } from 'redux';

import { userTypeReducer } from './userTypeReducer';
import { currentUserReducer } from './currentUserReducer';

export default combineReducers({
    userTypeReducer,
    currentUserReducer
})
