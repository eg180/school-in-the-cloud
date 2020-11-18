import React, { useState } from 'react'
import { createAccount } from '../store/actions';
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
    min-height: 35vh;
    border-radius: 10px;
    margin: 5rem 35rem 5rem 35rem;
    p {
        font-size: 2rem;
    }
`;

const RadioContainerDiv = styled.div`
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
    const [formState, setFormState] = useState({userid: uuidv4(), username: "", email: "", password: "", accounttype: ""});

    const history = useHistory();

    const handleHistory = () => {
        history.push("/dashboard");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
        // set up account here:
        createAccount();
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
                <RadioContainerDiv>
                    <span>Acount type: </span>
                        <div>
                            <label> Student
                                <input
                                name="accounttype"
                                type="radio"
                                id="student"
                                value="student"
                                />
                            </label>
                        </div>
                        <div>
                            <label> Volunteer
                                <input
                                name="accounttype"
                                type="radio"
                                id="volunteer"
                                value="volunteer"
                                />
                            </label>
                        </div>
                        <div>
                            <label> Admin
                                <input
                                name="accounttype"
                                type="radio"
                                id="admin"
                                value="admin"
                                />
                            </label>
                        </div>
                </RadioContainerDiv>
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

export default connect(mapStateToProps, {createAccount})(SignUp);
