import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  const [correct, setCorrect] = useState(false);

  return (
    <div>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>MEMO WWII</h1>
          <h2>Lideres de la Segunda Guerra Mundial</h2>
          <button
            style={{ fontSize: '20px', margin: '10px' }}
            onClick={() => {
              setCorrect(true);
            }}
          >
            Continuar
          </button>
        </div>
        {correct === true && (
          <div className='modalContainer'>
            <div className='modalOscuro' />
            <div className='modal'>
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
