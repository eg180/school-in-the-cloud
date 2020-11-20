import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const StyledDiv = styled.div`
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



const Dashboard = (props) => {

    useEffect(() => {
        console.log('username updated perhaps')
    }, [props.username]);


    return (
        <StyledDiv>
            <div>
                {props.username ? <p><span id="title"> Hello, {props.username}</span> You are signed in as <span id="user-role">{props.role}</span></p> : null}
            </div>
        
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
