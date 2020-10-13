import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
    ${props => props.container && css `
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    `}

    ${props => props.profilePicture && css `
        width: 6em;
        height: 6em;
        background-image: url(${props => props.backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        border-radius: 50%;  
        margin-bottom: 20px;
    `}
`;

function UserWelcome(props){
    return(
        <Div container>
            <Div profilePicture backgroundImage={props.profilePicture}></Div>
            <span className="greeting mb-3">Welcome, {props.username}!</span>
        </Div>
    )
}

export default UserWelcome;