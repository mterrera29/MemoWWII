import React, { useState, useEffect, useContext } from 'react';
import '../components/Memotest3.css';
import { Link } from 'react-router-dom';

import { PuntosContext } from '../components/context/PuntosContext';
import src1 from '../images/historia/stalin.jpg';
import src2 from '../images/historia/hitler.jpg';
import src3 from '../images/historia/gaulle.jpg';
import src4 from '../images/historia/mussolini.jpg';
import src5 from '../images/historia/churchill.jpg';
import src6 from '../images/historia/roosevelt.jpg';
import src7 from '../images/banderas/urss.png';
import src8 from '../images/banderas/alemania.png';
import src9 from '../images/banderas/francia.png';
import src10 from '../images/banderas/italia.png';
import src11 from '../images/banderas/england.png';
import src12 from '../images/banderas/eeuu.png';

const images = [
  {
    id: '1',
    img: src1,
    check: '1',
    name: 'Stalin',
    name2: 'Iosif Stalin',
    bandera: src7,
    info: 'Líder y dictador de la Unión Soviética desde mediados de la década de 1920 hasta su muerte en 1953. Bajo Stalin, la Unión Soviética pasó de ser una sociedad campesina a una superpotencia industrial.',
  },
  {
    id: '2',
    img: src2,
    check: '2',
    name: 'Hitler',
    name2: 'Adolf Hitler',
    bandera: src8,
    info: 'Político alemán y líder del Partido Nazi. Ascendió al poder como Canciller de Alemania en 1933. Durante su dictadura de 1933 a 1945, inició la Segunda Guerra Mundial en Europa al invadir Polonia en septiembre de 1939.',
  },
  {
    id: '3',
    img: src3,
    check: '3',
    name: 'De Gaulle',
    name2: 'Charles de Gaulle',
    bandera: src9,
    info: 'Fue presidente de Francia 1959 a 1969 y durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo.',
  },
  {
    id: '4',
    img: src4,
    check: '4',
    name: 'Mussolini',
    name2: 'Benito Mussolini',
    bandera: src10,
    info: 'Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943. Figura carismática y controvertida, desempeñó un papel destacado en el estallido de la Segunda Guerra Mundial..',
  },
  {
    id: '5',
    img: src5,
    check: '5',
    name: 'Churchill',
    name2: 'Wiston Churchill',
    bandera: src11,
    info: 'Primer Ministro de Gran Bretaña considerado como una de las figuras más importantes del siglo XX y uno de los líderes más destacados durante la Segunda Guerra Mundial.',
  },
  {
    id: '6',
    img: src6,
    check: '6',
    name: 'Roosevelt',
    name2: 'Franklin Roosevelt',
    bandera: src12,
    info: 'Fue un político y abogado estadounidense que ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945.',
  },
  {
    id: '7',
    img: src1,
    check: '1',
    name: 'Stalin',
    name2: 'Iosif Stalin',
    bandera: src7,
    info: 'Líder y dictador de la Unión Soviética desde mediados de la década de 1920 hasta su muerte en 1953. Bajo Stalin, la Unión Soviética pasó de ser una sociedad campesina a una superpotencia industrial.',
  },
  {
    id: '8',
    img: src2,
    check: '2',
    name: 'Hitler',
    name2: 'Adolf Hitler',
    bandera: src8,
    info: 'Político alemán y líder del Partido Nazi. Ascendió al poder como Canciller de Alemania en 1933. Durante su dictadura de 1933 a 1945, inició la Segunda Guerra Mundial en Europa al invadir Polonia en septiembre de 1939.',
  },
  {
    id: '9',
    img: src3,
    check: '3',
    name: 'De Gaulle',
    name2: 'Charles de Gaulle',
    bandera: src9,
    info: 'Fue presidente de Francia 1959 a 1969 y durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo.',
  },
  {
    id: '10',
    img: src4,
    check: '4',
    name: 'Mussolinni',
    name2: 'Benito Mussolinni',
    bandera: src10,
    info: 'Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943. Figura carismática y controvertida, desempeñó un papel destacado en el estallido de la Segunda Guerra Mundial..',
  },
  {
    id: '11',
    img: src5,
    check: '5',
    name: 'Churchill',
    name2: 'Wiston Churchill',
    bandera: src11,
    info: 'Primer Ministro de Gran Bretaña considerado como una de las figuras más importantes del siglo XX y uno de los líderes más destacados durante la Segunda Guerra Mundial.',
  },
  {
    id: '12',
    img: src6,
    check: '6',
    name: 'Roosevelt',
    name2: 'Franklin Roosevelt',
    bandera: src12,
    info: 'Fue un político y abogado estadounidense que ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945.',
  },
].sort(() => Math.random() - 0.5);

const Memotest3 = () => {
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const [guessed, setGuessed] = useState([]);
  const [lastGuessed, setLastGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [win, setWin] = useState(false);
  const [puntos, setPuntos] = useState(6);
  const [puntosCounter, setPuntosCounter] = useState(0);

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
    }
  }, [guessed]);
  console.log(puntosTotal);

  return (
    <div className='contain'>
      <main>
        <div className='center'>
          <div className='puntosContainer'>
            <h2>{`${puntosCounter} Pts`}</h2>
          </div>
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
                  <img
                    key={index}
                    alt=''
                    className='imgMemo'
                    src='https://icongr.am/entypo/help.svg?size=128&color=currentColor'
                  />
                </div>
              </li>
            ))}
          </ul>
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
