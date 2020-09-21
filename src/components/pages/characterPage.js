import React, { useState} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import {Col, Row, Button} from 'reactstrap';
import RandomChar from '../randomChar';


export default function CharacterPage() {
    let gotservice = new gotService();
    const [selectedChar, setSelectedChar] = useState(null);
    const [showRandom, setShowRandom] = useState(true);


    function changeRandom(){
        setShowRandom(!showRandom);
    }

    const itemList = (
        <ItemList 
            onItemSelected={(id) => setSelectedChar(id)}
            getData={gotservice.getAllCharacters}
            renderItem={({name, gender}) => `${name} (${gender})`}/>
    )

    const itemDetails = (
        <ItemDetails
        itemId={selectedChar}
        getData={gotservice.getCharacter} >
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </ItemDetails>
    )
    const char = showRandom ? <RandomChar/> : null;

    return (
        <div>
            <Row>
                <Col 
                    lg={{size: 5, offset: 0}}>
                    {char}
                    <Button 
                    color='info'
                    className='btn'
                    onClick={changeRandom}>
                        Toggle random character
                    </Button>{' '}
                </Col>
            </Row>

            <RowBlock left={itemList} right={itemDetails} />
            </div>
    )
}