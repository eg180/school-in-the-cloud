import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { logOutUser } from '../store/actions';
import styled from 'styled-components';



const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffffff;
    min-height: 7rem;
    p {
        margin-left: 1rem;
        margin-right: 3rem;

    }
`;



const Nav = (props) => {

    const handleLogOut = (e) => {
        e.preventDefault();
        props.logOutUser();
        // window.localStorage.clear();
    }

    return (
        <StyledNav>

        {props.username ? <p><Link to="/dashboard">Dashboard</Link></p> : null }
        
        
        
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        {!props.username ? <p><Link to="/signup">Create an Account</Link></p> : <p><Link to="/signout" onClick={handleLogOut}>Logout</Link></p>}

        </StyledNav>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.currentUserReducer.username
    }
}

export default connect(mapStateToProps, { logOutUser })(Nav);
