import React from 'react'
import styled from 'styled-components';

const FormContainerDiv = styled.div`
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



const doSomething = (e) => {
    e.preventDefault()
    console.log('I love Delphy')
}

export default function SignUp() {
    return (
        <FormContainerDiv>
            <p>Create an account</p>
            <StyledForm>
                <label> <span>Name: </span>
                    <input
                    name="username"
                    type="text"
                    />
                </label>

                <label> <span>Email: </span>
                    <input
                    name="email"
                    type="email"
                    />
                </label>

                <label><span>Password: </span>
                    <input
                    name="password"
                    type="password"
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
                <button onClick={doSomething}>Submit</button>
            </StyledForm>
            
        </FormContainerDiv>
    )
}
