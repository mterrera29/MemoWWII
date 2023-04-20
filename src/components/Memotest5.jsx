import React, { useState, useEffect, useContext } from 'react';
import '../components/Memotest5.css';
import { Link } from 'react-router-dom';

import { PuntosContext } from '../components/context/PuntosContext';
import src1 from '../images/png/1.png';
import src2 from '../images/png/2.png';
import src3 from '../images/png/3.png';
import src4 from '../images/png/4.png';
import src5 from '../images/png/5.png';
import src6 from '../images/png/6.png';
import src7 from '../images/banderas/urss.png';
import src8 from '../images/banderas/alemania.png';
import src9 from '../images/banderas/francia.png';
import src10 from '../images/banderas/italia.png';
import src11 from '../images/banderas/england.png';
import src12 from '../images/banderas/eeuu.png';

const lider = [
  {
    id: '1',
    img: src1,
    check: '1',
    name: 'stalin',
    name2: 'Iosif Stalin',
    cara: src1,
    bandera: src7,
    info: 'Líder y dictador de la Unión Soviética.',
    pista1: 'Lider y dictador que gobernó hasta su muerte en 1953',
    pista2: 'Su primer nombre es Iosif',
    pista3: 'Fue el lider de la URSS',
    pista4: 'Es uno de estos 3: -De Gaulle - Hitler - Stalin',
  },
  {
    id: '2',
    img: src2,
    check: '2',
    name: 'hitler',
    name2: 'Adolf Hitler',
    cara: src2,
    bandera: src8,
    info: 'Ascendió al poder como Canciller de Alemania en 1933 y luego como Führer en 1934.',
    pista1: 'Fue nombrado Canciller en 1933',
    pista2: 'Su primer nombre es Adolf',
    pista3: 'Fue el lider de Alemania',
    pista4: 'Es uno de estos 3: -Mussolini - Hitler - Roosevelt',
  },
  {
    id: '3',
    img: src3,
    check: '3',
    name: 'de gaulle',
    name2: 'Charles de Gaulle',
    cara: src3,
    bandera: src9,
    info: 'Encabezó la Resistencia contra el nazismo en su país.',
    pista1: 'Fue elegido presidente en 1959',
    pista2: 'Su primer nombre es Charles',
    pista3: 'Lideró la Resistencia en Francia',
    pista4: 'Es uno de estos 3: -De Gaulle - Stalin - Churchill',
  },
  {
    id: '4',
    img: src4,
    check: '4',
    name: 'mussolini',
    name2: 'Benito Mussolini',
    cara: src4,
    bandera: src10,
    info: 'Líder que fundó el partido fascista y dirigió a Italia de 1922 a 1943.',
    pista1: 'Líder que fundó el partido fascista.',
    pista2: 'Su primer nombre es Benito',
    pista3: 'Dirigió a Italia de 1922 a 1943.',
    pista4: 'Es uno de estos 3: -Hitler - Mussolini - Stalin',
  },
  {
    id: '5',
    img: src5,
    check: '5',
    name: 'churchill',
    name2: 'Wiston Churchill',
    cara: src5,
    bandera: src11,
    info: 'Primer Ministro de Gran Bretaña durante la Segunda Guerra Mundial.',
    pista1: 'Fue Primer ministro durante la SGM',
    pista2: 'Su primer nombre es Wiston',
    pista3: 'Fue el Primer ministro de Gran Bretaña',
    pista4: 'Es uno de estos 3: -De Gaulle - Roosevelt- Churchill',
  },
  {
    id: '6',
    img: src6,
    check: '6',
    name: 'roosevelt',
    name2: 'Franklin Roosevelt',
    cara: src6,
    bandera: src12,
    info: 'Ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945.',
    pista1: 'Fue presidente hasta su muerte en 1945.',
    pista2: 'Su primer nombre es Franklin.',
    pista3: 'Fue el 32.º presidente de Estados Unidos.',
    pista4: 'Es uno de estos 3: -Mussolini - Churchill - Roosevelt',
  },
].sort(() => Math.random() - 0.5);

const Memotest5 = () => {
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const [correct, setCorrect] = useState(false);
  const [name, setName] = useState('');
  const [index, setIndex] = useState(0);
  const [nombre, setNombre] = useState('');
  const [win, setWin] = useState(false);
  const [pistas, setPistas] = useState(0);
  const [puntos, setPuntos] = useState(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

  const saveLocal = () => {
    localStorage.setItem('puntos', JSON.stringify(puntosTotal));
  };

  console.log(index);
  console.log(puntosTotal);
  console.log(puntosCounter);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.toLowerCase() === lider[index].name ||
      name.toLowerCase() === lider[index].name2.toLowerCase()
    ) {
      setCorrect(true);
      setPistas(0);
      setPuntosCounter(puntosCounter + puntos);
      setPuntosTotal(puntosTotal + puntos);
      index === 5 && saveLocal();
    } else {
      puntos > 1 && setPuntos(puntos - 1);
      setNombre('Incorrecto');
    }
  };

  const handlePistas = () => {
    if (pistas < 4) {
      setPistas(pistas + 1);
      puntos > 1 && setPuntos(puntos - 1);
    }
  };

  useEffect(() => {
    setNombre(
      name.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase())
    );
  }, [name, setName]);

  return (
    <div>
      <main className='main3'>
        <h2>Nivel 3</h2>
        <div className='imagenContainer'>
          <h1
            className='titulo'
            style={{ color: correct ? 'rgb(72, 187, 72)' : 'black' }}
          >
            {correct ? '¡Correcto!' : '¿Quien es?'}
          </h1>
          <img
            alt=''
            className='imgLider'
            src={lider[index].img}
            style={{ filter: correct ? '' : 'brightness(0)' }}
          />
          <h1
            className='nombreLider'
            style={{
              fontSize: '45px',
              color:
                nombre === 'Incorrecto' ? 'red' : correct ? 'green' : 'white',
            }}
          >
            {nombre}
          </h1>
          {pistas > 0 && (
            <div className='pistaLider'>
              <h3>{pistas === 1 && lider[index].pista1}</h3>
              <h3>{pistas === 2 && lider[index].pista2}</h3>
              <h3>{pistas === 3 && lider[index].pista3}</h3>
              <h3>{pistas === 4 && lider[index].pista4}</h3>
            </div>
          )}
        </div>
        <div>
          {correct ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <button
                style={{ fontSize: '16px', margin: '10px', padding: '5px' }}
                onClick={() => {
                  index === 5 ? setWin(true) : setIndex(index + 1);
                  setCorrect(false);
                  setName('');
                  setNombre('');
                  setPistas(0);
                  setPuntos(6);
                }}
              >
                Continuar
              </button>
              <h2 className='modalPts3'>{correct && `+ ${puntos} pts`}</h2>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <button
                style={{ fontSize: '16px', margin: '10px', padding: '5px' }}
                onClick={() => handlePistas()}
              >
                Solicitar pista
              </button>
              <form onSubmit={handleSubmit}>
                <input
                  style={{ width: '150px' }}
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  style={{ fontSize: '16px', margin: '10px', padding: '5px' }}
                  type='submit'
                >
                  Siguiente
                </button>
              </form>
            </div>
          )}
        </div>
        <div className='puntosContainer3'>
          <h1>{`Puntos: ${puntosCounter} pts`}</h1>
        </div>
        {win === true && (
          <div className='modalContainer2'>
            <div className='modalOscuro2' />
            <div className='modalWin3'>
              <div>
                <h1 style={{ color: 'rgb(72, 187, 72)', fontSize: '60px' }}>
                  ¡Ganaste el Juego!
                </h1>
                <div className='modalInfo2'>
                  <h2>{`Nivel 3: ${puntosCounter} pts`}</h2>
                </div>
                <h1>{`Total: ${puntosTotal} pts`}</h1>
                <Link to='/'>
                  <button
                    style={{
                      fontSize: '20px',
                      margin: '10px',
                      padding: '5px',
                    }}
                    onClick={() => {
                      setWin(false);
                      setPuntosTotal(0);
                    }}
                  >
                    Finalizar
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

export default Memotest5;
