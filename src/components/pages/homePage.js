import React  from 'react';
import {Button} from 'reactstrap';
import Video from './video/Video';
import './home.css';

export default function HomePage() {
    return (
        <div>
            <h1 className='title' >GAME OF TRONS</h1>
            <div className='main'>
                <div className='image'>
                    <img src={process.env.PUBLIC_URL + '/img/main.jpg'} alt='error' className='main-image'/>
                    <Button color="danger" className='buttonW'>
                        <a href='https://www.youtube.com/'>
                            <img src={process.env.PUBLIC_URL + '/img/play.svg'} className='play' alt='alt'/>
                            <span>Watch trailer</span>
                        </a>
                    </Button>{' '}                
                    </div>
                <div className='short-info'>
                    <ul className='list'>
                        <li><b>Ratings: </b> 9.5</li>
                        <li><b>Slogan: </b>Win or death</li>
                        <li><b>Date of issue: </b>17 april 2011 </li>
                        <li><b>Country: </b>USA, UK</li>
                        <li><b>Genre: </b>Fantasy, Drama, Melodramas, Adventures, Foreign.</li>
                        <li><b>Age: </b>18+ for adults only</li>
                        <li><b>Actors: </b>Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington, Sophie Turner, Maisie Williams, Nikolai Coster-Waldau, Ian Glen, Alfie Allen, John Bradley and others</li>
                    </ul>                
                </div>
            </div>
            <h2 className='about'>What's "Game of Thrones" about?</h2>
            <p>The series Game of Thrones is based on a series of novels
                by George Martin "The Song of Ice and Fire". 
                The intertwining of cruel and sophisticated intrigue, 
                great acting, exciting imaginative shooting, these are 
                the reasons for watching the series. All events unfold 
                around the Seven Kingdoms, located on the non-existent 
                continent of Westeros. In this world, a time of happiness 
                and prosperity is coming to an end, and intrigue and conspiracy 
                are weaving around the Iron Throne. There can be no other 
                way in a world where everyone is striving for power. 
                Conflict between royal families leads to war. 
                After all, no one notices the revival of the great evil 
                in the North, and so far only the Wall protects people 
                living south of it. But even here is a place of nobility 
                and compassion.</p>
            <Video/>
        </div>
    )
    
}
