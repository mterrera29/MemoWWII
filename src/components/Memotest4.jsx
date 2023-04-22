import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../components/Memotest4.css';
import { PuntosContext } from '../components/context/PuntosContext';
import casco from '../images/sombrero-militar2.png';

import { lider } from './data2';

const Memotest4 = () => {
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [lastGuessed, setLastGuessed] = useState([]);

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

  console.log(puntosTotal);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Nivel 2</h2>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h1>Lider</h1>
          <h1>País</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {lider.map((images) => (
            <ul key={images} className='container2'>
              {images.map((image, index) => (
                <li
                  key={image.id}
                  className={`card ${
                    (selected.includes(image) && `card2`) ||
                    (guessed.includes(image) && `card2`)
                  }`}
                  onClick={() =>
                    selected.length < 2 &&
                    !guessed.includes(image) &&
                    setSelected((selected) => selected.concat(image))
                  }
                >
                  <div
                    className='face front'
                    style={
                      guessed.includes(image)
                        ? { border: 'solid 2px green', borderRadius: '12px' }
                        : { border: 'solid 2px #666', borderRadius: '12px' }
                    }
                  >
                    <img alt='' className='imgMemo' src={image.img} />
                    <h3>{image.name}</h3>
                  </div>
                  <div
                    className='face back'
                    style={
                      guessed.includes(image)
                        ? { border: 'solid 2px green', borderRadius: '12px' }
                        : { border: 'solid 2px #666', borderRadius: '12px' }
                    }
                  >
                    <img key={index} alt='' className='imgMemo' src={casco} />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {correct === true && (
          <div className='modalContainer2'>
            <div className='modalOscuro2' />
            <div className='modal2'>
              <h1 className='modalPts2'>{`+ ${puntos} pts`}</h1>
              <div>
                <h2>¡Correcto!</h2>
                <h1 className='modalNombre2'>{lastGuessed[0].name2}</h1>
                <div className='modalInfo2'>
                  <div>
                    <img alt='' className='cara' src={lastGuessed[0].cara} />
                  </div>
                  <div>
                    <img
                      alt=''
                      className='modalBandera2'
                      src={lastGuessed[0].bandera}
                    />
                  </div>
                  <div>
                    <p>{lastGuessed[0].info}</p>
                    <button
                      style={{ fontSize: '20px', margin: '10px' }}
                      onClick={() => {
                        setCorrect(false);
                        setPuntos(6);
                        guessed.length === 12 &&
                          setWin(true) &&
                          setPuntosTotal(puntosTotal + puntosCounter);
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
          <div className='modalContainer2'>
            <div className='modalOscuro2' />
            <div className='modalWin2'>
              <div>
                <h1 style={{ color: 'rgb(72, 187, 72)', fontSize: '60px' }}>
                  ¡Ganaste!
                </h1>
                <div className='modalInfo2'>
                  <h2>{`Total: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/nivel3'>
                  <button
                    style={{ fontSize: '20px', padding: '5px', margin: '10px' }}
                    onClick={() => {
                      setWin(false);
                    }}
                  >
                    Continuar al Nivel 3
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div>
          <h1>{`Puntos: ${puntosCounter} pts`}</h1>
        </div>
      </main>
    </div>
  );
};

export default Memotest4;
