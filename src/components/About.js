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

export default function About() {
    return (
        <StyledHeroSection>
            <img src="/Assets/images/School in the Cloud Logo.jpg" />
            <div><p>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting. This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time. The platform also connects volunteers with the students. 

The aim is to help close the achievement gap by connecting students with available, qualified volunteer mentors. The first piece of this app will be creating the three main user types, and allowing an admin to create a training checklist for new volunteers.</p></div>
            
        </StyledHeroSection>
    )
}
