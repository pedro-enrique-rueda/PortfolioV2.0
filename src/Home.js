import React from 'react';
import './Home.scss';
import Pedro from './pp.jpeg';

function Home() {
    return (
        <section className="home" id="home">
        
           <img src={Pedro} alt=""/>
            
            <div className="hgrup">                
                <h1> Pedro Enrique Rueda </h1>
                <h3> Front-End Developer </h3>
            </div>    
        </section>
    )
}

export default Home
