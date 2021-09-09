import React, { useState, useEffect } from 'react';
import './CriandoPiada.css';
import axios from 'axios';

const CriandoPiada = () => {

    function onChange(ev) {
        const { name, value } = ev.target;

        setValor({ ...valor, [name]: value });
        console.log(valor)
    }
    
    const piadaBase = {
        "type": " ", 
        "value": [{ "id": 0, "joke": " " }]
       };

    const val = " ";

    
    const [jdPiada, setJdPiada] = useState(piadaBase);
    const [piada, setPiada] = useState(val);
    const [valor, setValor] = useState(val);


    function Bora(a) {

        useEffect(() => {
            axios.get('http://api.icndb.com/jokes/random')
            .then((response) => {
                setJdPiada(response.data);
                const Test = jdPiada.value.joke;
                setPiada(Test);

                console.log(jdPiada.value.joke);
            
            });
        }, []);
    }


    return (
        <div>

            <form className="criandoPiada" >
                
                    <div className= "criandoPiada_Text">
                        <label>Uma Piada ChuckNorris aproved com SEU nome!!</label>
                    </div>
                    <div className= "criandoPiada_Text">  
                        <label htmlfor="firstName">Seu Nome:</label>
                        <input id="firstName" name="firstName" type="text" onChange={onChange}></input>
                    </div>
                    <div className= "criandoPiada_Text">
                        {/* <button onClick={Bora} onChange={onChange} type="submit">Enviar</button> */}
                        <button  onClick={ Bora(valor.firstName) }>Enviar</button> 
                    </div>
                    <div>
                        <label> </label>
                    
                </div>
            </form>

        </div>
    )

}

export default CriandoPiada;