

export const SET_AS_ADMIN = "SET_AS_ADMIN"
export const SET_AS_STUDENT = "SET_AS_ADMIN"
export const SET_AS_VOLUNTEER = "SET_AS_ADMIN"

export const SAVE_USER_DETAILS = "SAVE_USER_DETAILS"

export const SET_AS_VIP = "SET_AS_VIP"


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
    console.log('newUser in line 42', newUser)
    console.log('newUser type in line 43', typeof(newUser))
    return (dispatch) => {
        dispatch({ type: SAVE_USER_DETAILS, payload: newUser })
    }
}

