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

export const lider = [
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
