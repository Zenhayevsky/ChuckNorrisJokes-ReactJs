import React, { Component, Componet, useState } from 'react';
import chuck from './Imagens/pngegg.png';
import balao1 from './Imagens/balao3d.png';
import balao2 from './Imagens/balao3d2.png';
import seatreve from './Imagens/seatreve.png';
import KKKK from './Imagens/KKKK.png';
import './App.css';
import api from './Services/api';
import { Button } from 'reactstrap';

const App = () => {

  const sendJoke = async () => {
    const response = await api.get()
  }

  const [mostraPiada, setmostraPiada] = useState(false);
  const [mudaGlobo, setmudaGlobo] = useState(false);

  const toggle = () => {
    if(mostraPiada == false) {
      setmostraPiada(!mostraPiada);
      setmudaGlobo(!mudaGlobo);
    }
  }

  return (
      <div className="App">
        <header className="App-header">

        {
            !mudaGlobo && (
              <div>
                <img src={seatreve} className="seatreve" />
              </div>
            )
          }
          
          {
            mudaGlobo && (
        <div>
          <img src={KKKK} className="seatreve" />
        </div>
            )
          }

        <div id="inicioPiada">
          <img src={balao1} className="balao1"/>
        </div>

        <img src={chuck} className="capa" onClick={toggle}/>

        <p>
         Suas piadas favoritas sobre Chuck Norris aqui!
        </p>
        
        {
          mostraPiada && (
            <div id="finalPiada">
                <img src={balao2} className="balao2"/>
            </div>
              
            /*<img src={logo} className="App-logo" onClick={this.toggle} alt="logo" />*/
          )
        }

          <Button color="success">Ir para o Site</Button>

        </header>
      </div>
    );
}

export default App;


{/*          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={this.toggle}>Entrar</button>*/}
