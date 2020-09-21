import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import {CharacterPage,BookPage,HousePage, BooksItem, HomePage} from '../pages';
import ErrorMessage from '../errorMessage';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends React.Component {

    state = {error: false}

    componentDidCatch() {
        this.setState({
            error: true
        })    
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Router>
            <div className='app'> 
                <Header />
                <Container className='container'>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/houses' component={HousePage}/>
                    <Route path='/books' exact component={BookPage}/>
                    <Route path='/books/:id' render={
                        ({match}) => {
                             const {id} = match.params;
                             return <BooksItem bookId={id}/>}
                        }/>
                </Container>
                <div className='footer'>
                <h2><a href='https://www.hbo.com/game-of-thrones'>Offical site</a></h2>
                <ul className='icons'>
                    <li className='icon'><ion-icon name="logo-instagram"></ion-icon> Instagram</li>
                    <li className='icon'><ion-icon name="logo-youtube"></ion-icon> Youtube</li>
                    <li className='icon'><ion-icon name="logo-twitter"></ion-icon> Twitter</li>
                    <li className='icon'><ion-icon name="logo-facebook"></ion-icon> Facebook</li>
                </ul>
            </div>
            </div>
            </Router>
        );
    }
    
};

