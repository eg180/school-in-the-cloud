import { SAVE_USER_DETAILS } from "../actions/index.js";




// getting info from localStorage that we set in SignUp form with handleSubmit


// let retrievedNewUserInfo = window.localStorage.getItem('newUserInfo');
// let userInfo = JSON.parse(retrievedNewUserInfo);

// // console.log(userInfo.username);

// // now this will give you the username from localStorage:
// // userInfo.username
// // set that up for the reducer



// let currentUserName = userInfo.username;
// let currentEmail = userInfo.email;
// let currentPassword = userInfo.password;
// let currentRole = userInfo.role;
// let currentID = userInfo.id;



// initialState

const stateOne = {
    id: "",
    username: "no user name yet",
    // accounttype: currentRole,
    // email: currentEmail,
    // password: currentPassword
    // role: ""
};


export const currentUserReducer = (state = stateOne, action) => {
    switch (action.type) {
        case SAVE_USER_DETAILS:
            console.log('Inside SAVE_USER_DETAILS case!')
            return {
                ...state,
                username: action.payload.username // get from window.localStorage
                // id: currentID,
                // email: currentEmail,
                // password: currentPassword
                // role: currentRole // get from window.localStorage
                // accounttype: {
                //     admin: true
                // }
            }
        default:
            return state;
    }
};
