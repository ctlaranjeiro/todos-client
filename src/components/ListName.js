import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    margin-right: 5px;
`

function ListName(props){
    return(
        <div className="d-flex align-items-center">
            <Div bgColor={props.color}></Div>
            <span>{props.listName}</span>
        </div>
    )
}

export default ListName;