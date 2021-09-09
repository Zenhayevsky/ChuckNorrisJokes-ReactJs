import React from 'react';
import selfie from '../../Imagens/cardfoto.png'
import './Card.css';

const Card = ({piada}) => {
    return (
        <div>
            <section className="left"> 
            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.joke} </p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Card;