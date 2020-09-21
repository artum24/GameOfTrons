import React from 'react';
import styled from 'styled-components';


const Img = styled.div`
    width: 100%;
`
const Span = styled.span`
    font-size:24px;
    color: black;
    text-align: center;

`
const ErrorMessage = () => {
    return (
        <>
            <Img>
                <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>
            </Img>
            <Span>Something goes wrong</Span>
        </>
    )
}

export default ErrorMessage;