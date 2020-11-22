import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../store/actions';
import '../index.css';
import styled from 'styled-components';

const StyledTaskContainerDiv = styled.div`
    font-family: 'Work Sans', sans-serif;
    background-color: #d8e2dc;
    background-color: red;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: 80vh;
    #title {
        font-size: 2rem;
        margin-top: 4rem;
        margin-bottom: 4rem
    }
    input {
        min-width: 30vh
    }
    ul {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-family: 'Work Sans', sans-serif;
        font-size: 1.75rem;
    }
`;

export const AdminTaskMaker = (props) => {
    const [volunteerFormState, setVolunteerFormState] = useState({username: "", task: ""});

    useEffect(() => {
        console.log('volunteers list refreshed?')
    },[props.volunteers]);

    const handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setVolunteerFormState({
            ...volunteerFormState,
            [e.target.name]: e.target.value
        })
    }
    
    const handleUpdateTask = (e) => {
        e.preventDefault();
        console.log(volunteerFormState);
        props.createTask(volunteerFormState);
    }

    return (
        <StyledTaskContainerDiv>
            <div>
                <p id="title">Create tasks for your volunteers</p>
            </div>
            <div>
                <form>
                    <input
                    name="task"
                    value={volunteerFormState.task}
                    onChange={handleChange}
                    />
                    <select name="username" id="role" onChange={handleChange}>
                        <option selected>--Select Volunteer--</option>
                        {props.volunteers.map((volunteer, indx) => {
                            return <option key={indx} value={volunteer.username}>{volunteer.username}</option>
                        })}
                    </select>
                    <button onClick={handleUpdateTask}>Add Task for selected volunteer</button>
                </form>
                <div>
                    <ul>Tasks</ul>
                        {props.volunteers.map((volunteer, indx) => {
                            return <li key={indx}>{volunteer.username}: {volunteer.task}</li>
                        })}
                </div>
            </div>
        </StyledTaskContainerDiv>
    )
}

const mapStateToProps = (state) => ({
    volunteers: state.volunteersListReducer
})


export default connect(mapStateToProps, { createTask })(AdminTaskMaker)

