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
            {props.name ? <h2> Hello, {props.name} </h2> : <h2>props.admin not reached</h2>}
            <div>
                {props.admin ? <h2>Admin Dashboard</h2> : null}
            </div>
        
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.userTypeReducer.admin,
        student: state.userTypeReducer.student,
        volunteer: state.userTypeReducer.volunteer,
        vip: state.vipReducer.vip, 
        name: state.userTypeReducer.name
    }
}

export default connect(mapStateToProps, {})(Dashboard);
