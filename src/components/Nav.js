import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #212f45;
    min-height: 7rem;
    p {
        margin-left: 1rem;
        margin-right: 3rem;

    }
`;

export default function Nav() {
    return (
        <StyledNav>
                <p><Link to="/signup">Create an Account</Link></p>
                <p><Link to="/">Home</Link></p>

        </StyledNav>
    )
}
