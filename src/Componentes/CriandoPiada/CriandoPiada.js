import React, { Component, Componet, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CriandoPiada.css';
import axios from 'axios';

const CriandoPiada = () => {
    
    function onChange(ev) {
        const { name, value } = ev.target;

        console.log({name, value})

    }

    const onSubmit = ({firstName},{lastName}) => {

        axios.get('http://api.icndb.com/jokes/random?firstName={firstName}&lastName={lastName}')
            .then((response) => {
                console.log(response.data)
            });
    }


    return (
        <div>

            <div className="criandoPiada" onSubmit={onSubmit}>
                <div>
                    <div className= "criandoPiada_Text">
                        <p>Uma Piada ChuckNorris aproved com SEU nome!!</p>
                    </div>
                    <div className= "criandoPiada_Text">  
                        <p>Seu Nome:</p>
                        <input id="firstName" name="firstName" type="text" onChange={onChange}></input>
                    </div>
                    <div className= "criandoPiada_Text">  
                        <p>Seu Sobrenome:</p>
                        <input id="lastName" name="lastName" type="text" onChange={onChange}></input>
                    </div>
                    <div className= "criandoPiada_Text">
                        <button onClick={onSubmit("firstName","lastName")} type="submit">Enviar</button>
                    </div>
                    <div>
                        <label> </label>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default CriandoPiada;