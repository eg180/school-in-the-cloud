const initialState = {
    accounttype: {
        admin: false,
        student: false,
        volunteer: false
}};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};