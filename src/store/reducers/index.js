import { combineReducers } from 'redux';

import { userTypeReducer } from './UserTypeReducer';
import vipReducer from './vipReducer';

export default combineReducers({
    userTypeReducer,
    vipReducer
})
