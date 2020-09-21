import React from 'react';
import ItemList from '../itemList';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import './book.css';

function BookPage({history}) {
    let gotservice = new gotService();
    return (
        <div className='all'>
            <div className='books'>
            <ItemList 
            onItemSelected={(itemId) => {
                history.push(itemId)
            }}
            getData={gotservice.getAllBooks}
            renderItem={({name}) => name}/>
            </div>
            <img src={process.env.PUBLIC_URL + '/img/book.jpg'} alt='error' className='image' height='200px'/>             

        </div>
    )
}

export default withRouter(BookPage);