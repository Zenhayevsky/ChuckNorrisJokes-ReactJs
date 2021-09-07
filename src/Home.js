import React, { Component, Componet, useState } from 'react';
import './Home.css';
import aproved from './Imagens/aproved.png';
import header from './Imagens/header.jpg';

const Home = () => {
    return (
        <div>
            <header className="head">
                <div>
                    <section>
                      <img src={header} className='header'></img>
                    </section>
                </div>

            </header>
        

            <main>
                
            <img src={aproved} className='aprovedPic'></img>
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