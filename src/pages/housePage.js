import React, { useState} from 'react';
import gotService from '../services/gotService';

import ItemList from '../components/itemList';
import ItemDetails, {Field} from '../components/itemDetails';
import RowBlock from '../components/rowBlock';

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