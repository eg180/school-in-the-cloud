import React, { useState } from 'react'
import { saveToLocalStorage } from '../store/actions';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


const FormContainerDiv = styled.div`
    color: #f4f3ee;
    padding: 2rem;
    background-color: #144552;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    min-width: 35vh;
    max-width: 45vh;
    min-height: 70vh;
    border-radius: 10px;
    margin: 5rem 35rem 5rem 35rem;
    p {
        font-size: 2rem;
    }
`;

const SelectContainerDiv = styled.div`
    display: flex;
`;


const StyledForm = styled.form`
    .label-tag {
        margin-right: 2rem;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    input {
        /* background-color: #f0efeb; */
        outline: 0;
        border-width: 0 0 2px;
        border-color: #80ffdb;
    }
    span {
        margin-right: 2rem;
    }
`;


const SignUp = (props) => {
    const [formState, setFormState] = useState({id: uuidv4(), username: "", email: "", password: "", role: ""});

    const history = useHistory();

    const handleHistory = () => {
        history.push("/dashboard");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // mimic database using localStorage
        const newUserInfo = formState;
        // console.log(newUserInfo)
        // Put object into localStorage


        // THIS IS WHERE YOU LEFT OFF!!!!

        // window.localStorage.setItem('newUserInfo', JSON.stringify(newUserInfo));

        // let retrievedNewUserInfo = window.localStorage.getItem('newUserInfo');
        // let userInfo = JSON.parse(retrievedNewUserInfo);

        // let currentUserName = userInfo.username;
        // let currentEmail = userInfo.email;
        // let currentPassword = userInfo.password;
        // let currentRole = userInfo.role;
        // let currentID = userInfo.id;
        

        props.saveToLocalStorage(formState);
        handleHistory();
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <FormContainerDiv>
            {props.isLoading? <p>Loading...</p> : ''}
            <p>Create an account</p>
            <StyledForm onSubmit={handleSubmit}>
                <label> <span>Name: </span>
                    <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    />
                </label>

                <label> <span>Email: </span>
                    <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    />
                </label>

                <label><span>Password: </span>
                    <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    />
                </label>
                <SelectContainerDiv>
                    <span>Acount type: </span>
                        <div>
                            <label htmlFor="acctype">Select a role:</label>
                            <select name="role" id="role" onChange={handleChange}>
                                <option value="">--Select a role--</option>
                                <option value="student">student</option>
                                <option value="volunteer">volunteer</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>
                </SelectContainerDiv>
                <button>Submit</button>
            </StyledForm>
            
        </FormContainerDiv>
    )

}


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}



export default connect(mapStateToProps, { saveToLocalStorage })(SignUp);
