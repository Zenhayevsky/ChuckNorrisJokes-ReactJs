import React, { Component, Componet, useState, useEffect } from 'react';
import './Home.css';
import header from './Imagens/header.jpg';
import Card from './Componentes/Cards/Card';
import CriandoPiada from './Componentes/CriandoPiada/CriandoPiada';
import axios from 'axios';
import DefPiada from './DefPiada';
import selfie from './Imagens/cardfoto.png'

const Home = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }


    const [piada, setPiada] = useState(DefPiada);
    const piadaFormatada = piada.value;

    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random/16')
        .then((response) => {
            setPiada(response.data);
            // console.log(response.data);
        });
    }, []);

    const card = {
         "type": "success", 
         "value": { "id": 268, "joke": "Time waits for no man. Unless that man is John Doe." } 
        }

    return (
        <div className="page">
            <header>

                <div>

                    <section>
                      <img src={header} className='header'></img>
                    </section>
                    
                </div>

            </header>
            <main className="principal">
                <div className="esconde">
                    <div className="reinicarLista">
                            <p>Click no botão para ver mais piadas aleatórias Chuck Norris</p>
                            <button type="button" onClick={ refreshPage }> Mais Piadas </button> 
                    <div>
                </div>
            </div>
            </div>

            <div className="boxPiadasLista" style={{
                maxWidth:800,
                margin:'-15px auto',
                alignItems: 'start',
            }}>
                
                {piadaFormatada.map((piadaOk) => (
                    
                   <Card piada={piadaOk} />

                ))}

                {/* <Card piada={card} />  */}
            </div>

            <div className="boxcriando">
     
                <CriandoPiada /> 
            </div>

            {/* <div className="aproved"> 
                <img src={aproved} className='aprovedPic'></img>
            </div> */}
            
            </main>
            
        </div>
    )
}


// const first = () => {

// return (
// <div>
// <h2> Home </h2>
// </div>
// )
// }

export default Home;