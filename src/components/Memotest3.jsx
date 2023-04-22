import React, { useState, useEffect, useContext } from 'react';
import '../components/Memotest3.css';
import { Link } from 'react-router-dom';

import { PuntosContext } from '../components/context/PuntosContext';
import casco from '../images/sombrero-militar2.png';

import { images } from './data1';

const Memotest3 = () => {
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const [guessed, setGuessed] = useState([]);
  const [lastGuessed, setLastGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [win, setWin] = useState(false);
  const [puntos, setPuntos] = useState(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

  const saveLocal = () => {
    localStorage.setItem('puntos', JSON.stringify(puntosTotal + puntosCounter));
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (
        selected[0].check === selected[1].check &&
        selected[0].id !== selected[1].id
      ) {
        setGuessed((guessed) => guessed.concat(selected));
        setLastGuessed([selected[1]]);
        setTimeout(() => {
          setCorrect(true);
        }, 800);
      }
      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].check !== selected[1].check) {
        puntos > 1 ? setPuntos(puntos - 1) : setPuntos(1);
      } else if (
        selected[0].check === selected[1].check &&
        selected[0].id !== selected[1].id
      ) {
        setPuntosCounter(puntosCounter + puntos);
      }
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === 12) {
      setPuntosTotal(puntosTotal + puntosCounter);
      saveLocal();
    }
  }, [guessed]);

  return (
    <div className='contain'>
      <main className='memoMain'>
        <div className='center'>
          <h2>Nivel 1</h2>
          <ul className='container3'>
            {images.map((image, index) => (
              <li
                key={image.id}
                className={`card ${
                  (selected.includes(image) && `card2`) ||
                  (guessed.includes(image) && `card2`)
                }`}
                onClick={() =>
                  !guessed.includes(image) &&
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
              >
                <div
                  className='face front'
                  style={
                    guessed.includes(image)
                      ? { border: 'solid 1px green', borderRadius: '12px' }
                      : { border: 'solid 1px #666', borderRadius: '12px' }
                  }
                >
                  <img alt='' className='imgMemo' src={image.img} />
                  <h3>{image.name}</h3>
                </div>
                <div
                  className='face back'
                  style={
                    guessed.includes(image)
                      ? { border: 'solid 1px green', borderRadius: '12px' }
                      : { border: 'solid 1px #666', borderRadius: '12px' }
                  }
                >
                  <img key={index} alt='' className='imgMemo' src={casco} />
                </div>
              </li>
            ))}
          </ul>
          <div className='puntosContainer'>
            <h2>{`Puntos: ${puntosCounter} Pts`}</h2>
          </div>
          <div className='puntosContainer'>
            <h3>{selected.length >= 1 ? selected[0].name : ' '}</h3>
            <h3>{selected.length >= 2 ? selected[1].name : ' '}</h3>
          </div>
        </div>
        {correct === true && (
          <div className='modalContainer'>
            <div className='modalOscuro' />
            <div className='modal'>
              <h1 className='modalPts'>{`+ ${puntos} pts`}</h1>
              <img
                alt=''
                className='modalBandera'
                src={lastGuessed[0].bandera}
              />
              <div>
                <h2>¡Correcto!</h2>
                <h1 className='modalNombre'>{lastGuessed[0].name2}</h1>
                <div className='modalInfo'>
                  <img alt='' src={lastGuessed[0].img} />
                  <div>
                    <p>{lastGuessed[0].info}</p>
                    <button
                      className='modalBtn'
                      onClick={() => {
                        setCorrect(false);
                        setPuntos(6);
                        guessed.length === images.length && setWin(true);
                      }}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {win === true && (
          <div className='modalContainer'>
            <div className='modalOscuro' />
            <div className='modalWin'>
              <div>
                <h1 className='modalWinH1'>¡Ganaste!</h1>
                <div className='modalInfo'>
                  <h2>{`Nivel 1: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/nivel2'>
                  <button
                    style={{ fontSize: '20px', margin: '10px' }}
                    onClick={() => {
                      setWin(false);
                    }}
                  >
                    Continuar al Nivel 2
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Memotest3;
