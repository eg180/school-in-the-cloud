import React from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
    background-color: #d8e2dc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    div {
        margin-top: 3rem;
        min-height: 5vh;
        max-width: 65vh;
    }
    img {
        max-width: 35%;
        border-radius: 10px;
    }
`;

export default function LandingPage() {
    return (
        <StyledHeroSection>
            <div>Welcome to School in the Cloud!</div>
            
        </StyledHeroSection>
    )
}
