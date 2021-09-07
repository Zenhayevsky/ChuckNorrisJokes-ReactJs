import React, { Component, Componet } from 'react';
import chuck from './Imagens/pngegg.png';
import balao1 from './Imagens/balao3d.png';
import balao2 from './Imagens/balao3d2.png';
import seatreve from './Imagens/seatreve.png';
import KKKK from './Imagens/KKKK.png';
import './App.css';
import api from './Services/api';
import { Button } from 'reactstrap';

class App extends Component {

  sendJoke = async () => {
    const response = await api.get()
  }

  constructor(props) {
    super(props);

    this.state = {
      mudaGlobo: false,
    }
    
    this.state = {
      mostraPiada: false,
    };
  }

  toggle = () => {
    if(this.state.mostraPiada == false) {
      this.setState({
        mudaGlobo: !this.state.mostraPiada,
        mostraPiada: !this.state.mostraPiada,
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
            !this.state.mudaGlobo && (
              <div>
                <img src={seatreve} className="seatreve" />
              </div>
            )
          }
          
          {
            this.state.mudaGlobo && (
        <div>
          <img src={KKKK} className="seatreve" />
        </div>
            )
          }
        <div id="inicioPiada">
          <img src={balao1} className="balao1"/>
        </div>
        <img src={chuck} className="capa" onClick={this.toggle}/>
          <p>
            Suas piadas favoritas sobre Chuck Norris aqui!
          </p>
        
          {
            this.state.mostraPiada && (
              <div id="finalPiada">
                  <img src={balao2} className="balao2"/>
              </div>
              
              /*<img src={logo} className="App-logo" onClick={this.toggle} alt="logo" />*/
            )
          }
{/*          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={this.toggle}>Entrar</button>*/}
          <Button color="success">Ir para o Site</Button>
        </header>
      </div>
    );
  }
}

export default App;
