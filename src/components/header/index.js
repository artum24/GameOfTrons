import React from 'react';

import {Link} from 'react-router-dom';

import styled from 'styled-components';


const HeaderBlock = styled.div`
    display: flex;
    width:100%;
    max-width: 100%;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #a8a6a6;


`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin-right: 40px;
    margin-left:40px;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    margin-right:25px;
    justify-content: space-between;
    li {
        margin-right: 20px;
        font-size: 18px;
        line-height:24px;
        
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to='/characters/'>
                        Characters
                    </Link>
                </li>
                <li>
                    <Link to='/houses/'>
                        Houses
                    </Link>
                </li>
                <li>
                    <Link to='/books/'>
                        Books
                    </Link>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;