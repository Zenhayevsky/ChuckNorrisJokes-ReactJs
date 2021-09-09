import React, { useState } from 'react';
import chuck from './Imagens/pngegg.png';
import balao1 from './Imagens/balao3d.png';
import balao2 from './Imagens/balao3d2.png';
import seatreve from './Imagens/seatreve.png';
import KKKK from './Imagens/KKKK.png';
import './App.css';
import { Link } from 'react-router-dom';

const Apresentacao = () => {


    const [mostraPiada, setmostraPiada] = useState(false);
    const [mudaGlobo, setmudaGlobo] = useState(false);

    const toggle = () => {
        if (mostraPiada == false) {
            setmostraPiada(!mostraPiada);
            setmudaGlobo(!mudaGlobo);
        }
    }

    return (

        <div>
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
                    <img src={balao1} className="balao1" />
                </div>

                <img src={chuck} className="capa" onClick={toggle} />

                <p>
                    Suas piadas favoritas sobre Chuck Norris aqui!
                </p>

                {
                    mostraPiada && (
                        <div id="finalPiada">
                            <img src={balao2} className="balao2" />
                        </div>
                    )
                }

                <Link to='/Home' className='btnSite'>Ir para o site</Link>

            </header>
        </div>

    )

}

export default Apresentacao;