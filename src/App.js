import React, { Component, Componet, useState } from 'react';
import './App.css';
import Home from './Home';
import Apresentacao from './Apresentacao';
import { Switch, Route } from 'react-router-dom';
import CriandoPiada from './Componentes/CriandoPiada/CriandoPiada';

const App = () => {

  return (
      <div>

        <main>
          <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/" component={Apresentacao}></Route>
            <Route path="/edit" component={CriandoPiada}></Route>
          </Switch>
        </main>

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
