

export const SET_AS_ADMIN = "SET_AS_ADMIN";
export const SET_AS_STUDENT = "SET_AS_ADMIN";
export const SET_AS_VOLUNTEER = "SET_AS_ADMIN";

export const SAVE_USER_DETAILS = "SAVE_USER_DETAILS";
export const RESET_USER_DETAILS_STATE = "RESET_USER_DETAILS_STATE";

export const SET_AS_VIP = "SET_AS_VIP";

export const ADD_VOLUNTEER = "ADD_VOLUNTEER";

export const ADD_TASK = "ADD_TASK";

export const COMPLETE_TASK = "COMPLETE_TASK";


export const setAdmin = () => {
    return (dispatch) => {
        dispatch({ type: SET_AS_ADMIN })
        
    }
}


export const setStudent = () => {
    return (dispatch) => {
        dispatch({ type: SET_AS_STUDENT })
        
    }
}

export const setVolunteer = () => {
    return (dispatch) => {
        dispatch({ type: SET_AS_VOLUNTEER })
        
    }
}

export const setVIP = () => {
    return (dispatch) => {
        dispatch({ type: SET_AS_VIP })
        
    }
}

export const saveToLocalStorage = (newUser) => {
    console.log('newUser in line 47', newUser)
    // console.log('newUser typeå in line 43', typeof(newUser))
    console.log('currently inside actions - about to dispatch')
    return (dispatch) => {
        dispatch({ type: SAVE_USER_DETAILS, payload: newUser })
    }

}
export const addVolunteer = (newUser) => {
    console.log('newUser / volunteer in line 56', newUser)
    return (dispatch) => {
        dispatch({ type: ADD_VOLUNTEER, payload: newUser })
    }
}

export const logOutUser = () => {
    return (dispatch) => {
        dispatch({ type: RESET_USER_DETAILS_STATE })
    }
}


export const createTask = (newTask) => {
    console.log('about to dispatch ADD_TASK - LINE 70 IN INDEX.JS')
    return (dispatch) => {
        dispatch({ type:  ADD_TASK, payload: newTask })
    }
}

export const strikeTask = (subContext) => {
    console.log('inside strikeTask with subContext data of', subContext)
    return (dispatch) => {
        dispatch({ type: COMPLETE_TASK, payload: subContext })
    }
}

