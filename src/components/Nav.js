import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const StyledNav = styled.nav`
    background-color: #212f45;
    max-height: 20rem;
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <p><Link to="/signup">Create an Account</Link></p>
                <p>Link placeholder</p>
            </ul>
        </StyledNav>
    )
}
