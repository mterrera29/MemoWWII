import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import '../components/Memotest4.css';
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

const lider = [
  [
    {
      id: '1',
      img: src1,
      check: '1',
      name: 'Stalin',
      name2: 'Iosif Stalin',
      cara: src1,
      bandera: src7,
      info: 'Líder y dictador de la Unión Soviética.',
    },
    {
      id: '2',
      img: src2,
      check: '2',
      name: 'Hitler',
      name2: 'Adolf Hitler',
      cara: src2,
      bandera: src8,
      info: 'Ascendió al poder como Canciller de Alemania en 1933 y luego como Führer en 1934.',
    },
    {
      id: '3',
      img: src3,
      check: '3',
      name: 'De Gaulle',
      name2: 'Charles de Gaulle',
      cara: src3,
      bandera: src9,
      info: 'Durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo.',
    },
    {
      id: '4',
      img: src4,
      check: '4',
      name: 'Mussolini',
      name2: 'Benito Mussolini',
      cara: src4,
      bandera: src10,
      info: 'Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943.',
    },
    {
      id: '5',
      img: src5,
      check: '5',
      name: 'Churchill',
      name2: 'Wiston Churchill',
      cara: src5,
      bandera: src11,
      info: 'Primer Ministro de Gran Bretaña durante la Segunda Guerra Mundial.',
    },
    {
      id: '6',
      img: src6,
      check: '6',
      name: 'Roosevelt',
      name2: 'Franklin Roosevelt',
      cara: src6,
      bandera: src12,
      info: 'Ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945.',
    },
  ].sort(() => Math.random() - 0.5),
  [
    {
      id: '7',
      img: src7,
      check: '1',
      name: 'URSS',
      name2: 'Iosif Stalin',
      cara: src1,
      bandera: src7,
      info: 'Líder y dictador de la Unión Soviética.',
    },
    {
      id: '8',
      img: src8,
      check: '2',
      name: 'Alemania',
      name2: 'Adolf Hitler',
      cara: src2,
      bandera: src8,
      info: 'Ascendió al poder como Canciller de Alemania en 1933 y luego como Führer en 1934.',
    },
    {
      id: '9',
      img: src9,
      check: '3',
      name: 'Francia',
      name2: 'Charles de Gaulle',
      cara: src3,
      bandera: src9,
      info: 'Durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo.',
    },
    {
      id: '10',
      img: src10,
      check: '4',
      name: 'Italia',
      name2: 'Benito Mussolini',
      cara: src4,
      bandera: src10,
      info: 'Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943.',
    },
    {
      id: '11',
      img: src11,
      check: '5',
      name: 'Gran Bretaña',
      name2: 'Wiston Churchill',
      cara: src5,
      bandera: src11,
      info: 'Primer Ministro de Gran Bretaña durante la Segunda Guerra Mundial.',
    },
    {
      id: '12',
      img: src12,
      check: '6',
      name: 'Estados Unidos',
      name2: 'Franklin Roosevelt',
      cara: src6,
      bandera: src12,
      info: 'Ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945.',
    },
  ].sort(() => Math.random() - 0.5),
];

const Memotest4 = () => {
  const [puntosTotal, setPuntosTotal] = useContext(PuntosContext);
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [lastGuessed, setLastGuessed] = useState([]);

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
    <div>
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
                  <div>
                    <img
                      alt=''
                      className='bandera'
                      src={lastGuessed[0].bandera}
                    />
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
                    style={{ fontSize: '20px', margin: '10px' }}
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
