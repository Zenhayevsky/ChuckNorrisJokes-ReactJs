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
                    <p className= "card_piada"> {piada.value[0].joke} </p>
                </div>
            </div>

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[1].joke} </p>
                </div>
            </div>
            

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[2].joke} </p>
                </div>
            </div>
            

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[3].joke} </p>
                </div>
            </div>
            

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[4].joke} </p>
                </div>
            </div>
            </section>

            <section className="right"> 
            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p> {piada.value[5].joke} </p>
                </div>
            </div>

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[6].joke} </p>
                </div>
            </div>

            

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[7].joke} </p>
                </div>
            </div>

            

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[8].joke} </p>
                </div>
            </div>

            <div className="card">
                <img src={selfie} className="card_image"/>
                <div className="card_conteudo">
                    <p className= "card_piada"> {piada.value[9].joke} </p>
                </div>
            </div>

            </section>
        </div>
    )
}

export default Card;