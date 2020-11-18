

export const SET_ACCOUNT_TYPE = "SET_ACCOUNT_TYPE"


export const createAccount = () => {
    return (dispatch) => {
        dispatch({ type: SET_ACCOUNT_TYPE })
        
    }
}