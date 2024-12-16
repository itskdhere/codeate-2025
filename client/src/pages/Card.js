import React from 'react';
import "./Card.css";
import learnCard from "../assets/learnRef.png";
import buildCard from "../assets/buildRef.png"
import comCard from "../assets/communityRef.png";

function Card() {
    return(
        <div className='fullCard'>
            <div className='learn'>
            <div className='left'>
                <img src={learnCard} alt='Card'/>
            </div>
            <div className='right'>
                <h2 >Learn</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Velit <br/> nunc elementum porta vitae porta. Neque <br/>non fermentum egestas sit nunc. Laoreet <br/>lacus tempus mollis ultrices amet viverra sit <br/>ultrices massa. At turpis a sit nulla id diam. <br/>Quam amet morbi a risus eget.</p>
                <h3>Learn More</h3>
            </div>
            </div>

            <div className='learn'>
                <div className='left'>
                <h2>Build</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Velit <br/> nunc elementum porta vitae porta. Neque <br/>non fermentum egestas sit nunc. Laoreet <br/>lacus tempus mollis ultrices amet viverra sit <br/>ultrices massa. At turpis a sit nulla id diam. <br/>Quam amet morbi a risus eget.</p>
                <h3>Learn More</h3>
                </div>
                <div className='right'>
                    <img src={buildCard} alt='card'/>
                </div>
            </div>

            <div className='learn'>
            <div className='left'>
                <img src={comCard} alt='Card'/>
            </div>
            <div className='right'>
                <h2>Community</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Velit <br/> nunc elementum porta vitae porta. Neque <br/>non fermentum egestas sit nunc. Laoreet <br/>lacus tempus mollis ultrices amet viverra sit <br/>ultrices massa. At turpis a sit nulla id diam. <br/>Quam amet morbi a risus eget.</p>
                <h3>Learn More</h3>
            </div>
            </div>
        </div>
    );
}

export default Card;