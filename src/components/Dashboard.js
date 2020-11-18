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
            {props.admin ? <h2> not a student </h2> : <h2>props.admin not reached</h2>}
            {props.vip ? <h2>hey</h2> : ''}
        
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        student: state.student,
        volunteer: state.volunteer,
        vip: state.vip
    }
}

export default connect(mapStateToProps, {})(Dashboard);
