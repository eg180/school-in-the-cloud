import { SAVE_USER_DETAILS } from "../actions";



// getting info from localStorage that we set in SignUp form with handleSubmit

let retrievedNewUserInfo = window.localStorage.getItem('newUserInfo');
let userInfo = JSON.parse(retrievedNewUserInfo);

// console.log(userInfo.username);

// now this will give you the username from localStorage:
// userInfo.username
// set that up for the reducer


// SETTING CONSTANTS FROM LOCALSTORAGE - see above

let currentUserName = userInfo.username;
let currentEmail = userInfo.email;
let currentPassword = userInfo.password;
let currentRole = userInfo.role;
let currentID = userInfo.id;

console.log("current un is", currentUserName);

// initialState

const initialUserAccessState = {
    id: "",
    username: currentUserName,
    accounttype: currentRole,
    email: currentEmail,
    password: currentPassword
    // role: ""
};


export const currentUserReducer = (state = initialUserAccessState, action) => {
    console.log('reducer action to the right - in currentUserReducer line 44: ', action.type)
    switch (action.type) {
        case SAVE_USER_DETAILS:
            console.log('action.payload.username to the right: ', action.payload)
            return {
                ...state,
                username: currentUserName // get from window.localStorage
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
