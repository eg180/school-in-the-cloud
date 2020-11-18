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
            {props.admin ? <h1>Admin Dashboard</h1> : null}
            {props.student ? <h1>Student Dashboard</h1> : null}
            {props.volunteer ? <h1>Volunteer Dashboard</h1> : null}

            classes shown here. Does this show?
            <h2>{props.testing? props.testing : null}</h2>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        student: state.student,
        volunteer: state.volunteer,
        testing: state.testing
    }
}

export default connect(mapStateToProps, {})(Dashboard);
