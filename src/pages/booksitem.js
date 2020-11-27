import React from 'react';
import gotService from '../services/gotService';
import ItemDetails, {Field} from '../components/itemDetails';

export default function BooksItem({bookId}) {
    let gotservice = new gotService();

    return (
    <ItemDetails
    itemId={bookId}
    getData={gotservice.getBook}>
        <Field field='numberOfPages' label='Pages'/>
        <Field field='publiser' label='Publiser'/>
        <Field field='released' label='Released'/>
    </ItemDetails>
    )
}