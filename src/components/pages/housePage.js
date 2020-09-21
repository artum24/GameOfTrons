import React, { useState} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import './house.css'

export default function HousePage() {
    let gotservice = new gotService();
    const [selectedHouse, setSelectedHouse] = useState(null);

    const itemList = (
        <ItemList 
            onItemSelected={(id) => setSelectedHouse(id)}
            getData={gotservice.getAllHouses}
            renderItem={({name}) => name}/>
    )

    const itemDetails = (
        <ItemDetails
            itemId={selectedHouse}
            getData={gotservice.getHouse} >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='titles'/>
                <Field field='ancestralWeapons' label='Weapons'/>
            </ItemDetails>
    )

    return (
        <>
        <h1 className='logo'>Pls click on house for short info</h1>
       <RowBlock left={itemList} right={itemDetails} />
        </>
    )
}