import React, { Component, Componet, useState, useEffect } from 'react';
import './Home.css';
import header from './Imagens/header.jpg';
import Card from './Componentes/Cards/Card';
import CriandoPiada from './Componentes/CriandoPiada/CriandoPiada';
import axios from 'axios';

const Home = () => {

    const [piada, setPiada] = useState([]);

    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random/10')
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

            <div className="boxPiadasLista" style={{
                maxWidth:800,
                margin:'-15px auto',
                alignItems: 'start',
            }}>
                <Card piada= {piada} />
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