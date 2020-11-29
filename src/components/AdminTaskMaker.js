import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createTask, strikeTask } from '../store/actions';
import '../index.css';
import styled, { css } from 'styled-components';

const StyledTaskContainerDiv = styled.div`
    font-family: 'Work Sans', sans-serif;
    color: white;
    background-color: #d8e2dc;
    background-color: #6d6875;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: 80vh;
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 2.5rem
    }
    h3 {
        font-size: 1.75rem
    }
    .delete {
        margin-left: .60rem;
        font-size: 1rem;
    }
    #title {
        font-size: 3.5rem;
        margin-top: 4rem;
        margin-bottom: 4rem
    }
    #tasks-title {
        margin-top: 3rem;
        margin-bottom: 2rem
    }
    #tasks {
        font-size: 5rem;
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
        font-size: 4rem;
    }
    li {
        font-size: 1.25rem
    }
    .delete {
        font-size: .75rem;
        cursor: pointer
    }
    .volunteer-card {
        border: 5px solid black;
        padding: 2rem;
        margin-bottom: 3rem
    }

`;



export const AdminTaskMaker = (props) => {
    const [volunteerFormState, setVolunteerFormState] = useState({username: "", tasks: [{task: "", complete: false}]});
    const [taskObjects, setTaskObjects] = useState([{task: ""}]);
    const [xClicked, setXClicked] = useState(false);

    useEffect(() => {
        console.log('item was cleared')
    },[xClicked]);

    useEffect(() => {
        console.log('volunteer task changed')
    },[props.volunteers]);

  



    const handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        if (e.target.name === "username") {
            setVolunteerFormState({
                ...volunteerFormState,
                [e.target.name]: e.target.value
            })
        } else {
            setVolunteerFormState({
                ...volunteerFormState,
                tasks: [e.target.value]
            })
        }
    }
    
    const handleUpdateTask = (e) => {
        e.preventDefault();
        console.log("this is what gets submitted", volunteerFormState);
        props.createTask(volunteerFormState);

    }

    const handleDelete = (subtask) => {
        // props.volunteers.map((volunteer, indx) => {
        //     console.log(volunteer.username)
        // })
        console.log(subtask)

        setXClicked(!xClicked);
        strikeTask(subtask)

    };

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
                        {props.volunteers ? props.volunteers.map((volunteer, indx) => {
                            return <option key={indx} value={volunteer.username}>{volunteer.username}</option>
                        }) : <p>Add task</p>}
                    </select>
                    <button onClick={handleUpdateTask}>Add Task for selected volunteer</button>
                </form>
                <div>
                    <h2 id="tasks-title">Tasks</h2>
                        {props.volunteers ? props.volunteers.map((volunteer, indx) => {
                            return (
                            <div className="volunteer-card">
                                <div>
                                    <h3>{volunteer.username}</h3>
                                </div>
                                <div>
                                    {volunteer.tasks.map((sub) => {
                                        return (
                                            
                                            <li style={{textDecoration: xClicked ? "line-through" : ""}}>{sub.task}<span className="delete" onClick={() => handleDelete(sub.task)}>❌</span></li>
                                        )
                                    })}
                                </div>
                            </div>

                            )
                        }) : <p>No Tasks yet</p>}
                    
                </div>
            </div>
        </StyledTaskContainerDiv>
    )
}

const mapStateToProps = (state) => ({
    volunteers: state.volunteersListReducer.volunteers
})


export default connect(mapStateToProps, { createTask, strikeTask })(AdminTaskMaker)

