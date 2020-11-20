import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #d8e2dc;
    min-height: 70vh;
`;



const Dashboard = (props) => {


    return (
        <StyledDiv>
            {props.username ? <h2> Hello, {props.username} </h2> : <h2>No name provided</h2>}
            <div>
                {props.admin ? <h2>Admin Dashboard</h2> : null}
            </div>
        
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.currentUserReducer.username
    }
}

export default connect(mapStateToProps, {})(Dashboard);
