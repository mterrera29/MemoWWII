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

export const lider = [
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
