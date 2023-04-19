import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import casco from '../images/sombrero-militar2.png';
import '../components/MemoMain.css';
const Main = () => {
  const [correct, setCorrect] = useState(false);
  const puntosPartida = JSON.parse(localStorage.getItem('puntos'));

  return (
    <div>
      <main className='memoMain'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAling: 'center',
          }}
        >
          <header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              textAling: 'center',
            }}
          >
            <img alt='' className='imgMemoM' src={casco} />
            <h1 className='mainTitulo'>MEMO WWII</h1>
            <img alt='' className='imgMemoM' src={casco} />
          </header>
          <h2 style={{ fontSize: '28px', margin: '10px', textAlign: 'center' }}>
            Lideres de la Segunda Guerra Mundial
          </h2>
          <button
            style={{ fontSize: '20px', margin: '10px' }}
            onClick={() => {
              setCorrect(true);
            }}
          >
            Continuar
          </button>
          {puntosPartida ? (
            <div>
              <h2>Ultima partida: {puntosPartida} Pts. </h2>
            </div>
          ) : (
            <div />
          )}
        </div>
        {correct === true && (
          <div className='modalContainer'>
            <div className='modalOscuro' />
            <div className='modal' style={{ height: 'min-content' }}>
              <div>
                <h2>¡Atención!</h2>
                <div className='modalInfo'>
                  <div>
                    <p>
                      Recuerda los rostros , nombres y apellidos de los lideres
                      mas importantes de la Segunda Guerra Mundial
                    </p>
                    <p>
                      Lee con atención la información de cada lider a lo largo
                      del juego, Te será muy util en los proximos niveles!
                    </p>
                    <Link to='/nivel1'>
                      <button
                        style={{
                          fontSize: '16px',
                          margin: '10px',
                          padding: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Entendido
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Main;
