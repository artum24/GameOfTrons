import React, {useState, useEffect} from 'react';

import Spinner from '../spinner';

import { ListGroup, ListGroupItem } from 'reactstrap';

export default function ItemList({getData,onItemSelected,renderItem}) {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
        .then((data) => {
            updateList(data)
        })
    }, [getData])

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);

            return (
                <ListGroupItem 
                    key={id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(id)}>
                    {label}
                </ListGroupItem>
            )
        })
    }
    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ListGroup className='lists'>
            {items}
        </ListGroup>
    );
}
