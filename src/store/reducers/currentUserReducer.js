import { SAVE_USER_DETAILS } from "../actions";



// getting info from localStorage that we set in SignUp form with handleSubmit

// let retrievedNewUserInfo = window.localStorage.getItem('newUserInfo');
// let userInfo = JSON.parse(retrievedNewUserInfo);

// now this will give you the username from localStorage:
// userInfo.username
// set that up for the reducer


// SETTING CONSTANTS FROM LOCALSTORAGE - see above

// let currentUserName = userInfo.username;
// let currentEmail = userInfo.email;
// let currentPassword = userInfo.password;
// let currentRole = userInfo.role;
// let currentID = userInfo.id;

// console.log("current un is", currentUserName);

// initialState

const initialUserAccessState = {
    id: "",
    username: "connected to currentUserReducer",
    // accounttype: {
    //     admin: false,
    //     student: false,
    //     volunteer: false,
    // },
    email: "",
    password: ""
    // role: ""
};


export const currentUserReducer = (state = initialUserAccessState, action) => {
    switch (action.type) {
        case SAVE_USER_DETAILS:
            return {
                ...state,
                username: "" // get from window.localStorage
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
