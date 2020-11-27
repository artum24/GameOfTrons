import React, {useState, useEffect} from 'react';

import styled from 'styled-components';

import { ListGroup, ListGroupItem } from 'reactstrap';

//Style
const Details = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border: 1px solid #a8a6a6;
    margin-top: 20px;
`

const H4 = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`

const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
};

export default function ItemDetails({itemId, getData,children}) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {setItem(item)})
    }, [itemId,getData])


    if (!item) {
        return <span className='select-error'>Please select item in the list</span>
    }
    const {name} = item;
    return (
        <Details>
            <H4>{name}</H4>
            <ListGroup flush className='det'>
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ListGroup>
        </Details>
    );
}
