

export const SET_AS_ADMIN = "SET_AS_ADMIN"
export const SET_AS_STUDENT = "SET_AS_ADMIN"
export const SET_AS_VOLUNTEER = "SET_AS_ADMIN"

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