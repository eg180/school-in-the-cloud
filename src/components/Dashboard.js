import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledDiv = styled.div`
    font-family: 'Work Sans', sans-serif;
    background-color: #d8e2dc;
    min-height: 80vh;
    #title {
        font-size: 3rem;
    }
    #user-role {
        font-size: 1.75rem;
        color: #e76f51
    }
`;

const AdminPanelDiv = styled.div`
    padding: 2rem;
    background-color: #ffe5d9;
    border: solid black 2px;
    padding: 2rem;
    margin: 2rem 0rem 0rem 2rem;
    max-width: 35%;
    #admin-panel-label {
        font-size: 1.5rem;
        font-weight: 600
    }
    .div-title {
        font-size: 1.75rem;
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
            {/* BELOW IS CONDITIONAL FORMATTING TO SHOW AdminPanelDiv IF ADMIN SIGNED IN */}
            {props.role === 'admin' ?
            <AdminPanelDiv>
                <div className="admin-panel">
                    <ul><p id="admin-panel-label">Admin Panel</p>
                        <li><Link to="/create-task">Create Task</Link></li>
                    </ul>    
                </div>
            </AdminPanelDiv>
            : null }


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
