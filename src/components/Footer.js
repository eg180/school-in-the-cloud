import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #463f3a;
    min-height: 15vh;
`;


export default function Footer() {

    return(
        <StyledFooter>
            <p>Erick Gonzalez 2020</p>
        </StyledFooter>
    )
}