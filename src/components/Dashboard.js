import React from 'react';
import { connect } from 'react-redux';

const Dashboard = (props) => {
    return (
        <div>
            <h1>This is your dashboard</h1>
            classes shown here. Does this show tsrue?!
            <h2>{props.testing}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        testing: state.testing
    }
}

export default connect(mapStateToProps, {})(Dashboard);
