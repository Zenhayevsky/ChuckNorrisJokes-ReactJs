import React, { Component, Componet, useState, useEffect } from 'react';
import './Home.css';
import header from './Imagens/header.jpg';
import Card from './Componentes/Cards/Card';
import CriandoPiada from './Componentes/CriandoPiada/CriandoPiada';
import axios from 'axios';

const Home = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    const inicioPiada = {
        "type": " ", 
        "value": [{ "id": 0, "joke": " " }]
       }


    const [piada, setPiada] = useState(inicioPiada);
    const piadaFormatada = piada.value;

    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random/30')
        .then((response) => {
            setPiada(response.data);
            // console.log(response.data);
        });
    }, []);

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

            </div>

            {/* <div className="boxcriando">
     
                <CriandoPiada /> 
            </div> */}
            </main>
            
        </div>
    )
}

export default Home;