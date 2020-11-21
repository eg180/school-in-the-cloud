import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledDiv = styled.div`
    font-family: 'Work Sans', sans-serif;
    background-color: #d8e2dc;
    min-height: 70vh;
    #title {
        font-size: 3rem;
    }
    #user-role {
        font-size: 1.75rem;
        color: #e76f51
    }
`;

const AdminPanelDiv = styled.div`
    border: solid black 2px;
    padding: 2rem;
    margin: 2rem 0rem 0rem 2rem;
    max-width: 35%;
    .div-title {
        
        background-color: salmon;
        padding: .75rem;
    }
    
`;



const Dashboard = (props) => {

    useEffect(() => {
        console.log('username updated perhaps')
    }, [props.username]);


    return (
        <StyledDiv>
            <div>
                {props.username ? <p><span id="title"> Hello, {props.username}</span> You are signed in as <span id="user-role">{props.role}</span></p> : null}
            </div>

            <AdminPanelDiv>
                <div className="div-title">Admin Panel</div>
                <Link to="/create-task">Create Task</Link>
            </AdminPanelDiv>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {

    return {
        username: state.currentUserReducer.username,
        role: state.currentUserReducer.role
    }
}

export default connect(mapStateToProps)(Dashboard);
