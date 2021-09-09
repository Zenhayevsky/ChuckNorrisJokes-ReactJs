import React, { useState, useEffect } from 'react';
import './CriandoPiada.css';
import axios from 'axios';

const CriandoPiada = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }
    
    const piadaBase = {
        "type": " ", 
        "value": [{ "id": 0, "joke": " " }]
       }

    const dados = "maria";
    const [jdPiada, setJdPiada] = useState(piadaBase);

    function onChange(ev) {
        const { name, value } = ev.target;

        console.log({name, value})

    }

    function Bora() {

        useEffect(() => {
            axios.get('http://api.icndb.com/jokes/random?firstName=John&lastName=Doe')
            .then((response) => {
                setJdPiada(response.data);
                const jdPiadaForm = jdPiada.value.joke;
                const resultado = jdPiadaForm.replace("John Doe", "Maria");

                console.log(resultado);
            
                
            });
        }, []);
    }


    return (
        <div>

            <div className="criandoPiada">
                <div>
                    <div className= "criandoPiada_Text">
                        <p>Uma Piada ChuckNorris aproved com SEU nome!!</p>
                    </div>
                    <div className= "criandoPiada_Text">  
                        <p>Seu Nome:</p>
                        <input id="firstName" name="nome" type="text" onChange={onChange}></input>
                    </div>
                    <div className= "criandoPiada_Text">
                        {/* <button onClick={Bora} onChange={onChange} type="submit">Enviar</button> */}
                        <button type="button" onClick={ refreshPage }> <span>Reload</span> </button> 
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