import React from 'react'
import { connect } from 'react-redux'
import '../index.css';
import styled from 'styled-components';

const StyledTaskContainerDiv = styled.div`
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
`;

export const AdminTaskMaker = () => {
    return (
        <StyledTaskContainerDiv>
            <div>
                <p id="title">Create tasks for your volunteers</p>
            </div>
            <div>
                <form>
                    <input
                    name="task"
                    />
                    <select name="role" id="role">
                        <option value="">--Select Volunteer--</option>
                        <option value="student">student</option>
                        <option value="volunteer">volunteer</option>
                        <option value="admin">admin</option>
                    </select>
                </form>
            </div>
        </StyledTaskContainerDiv>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps, {})(AdminTaskMaker)

