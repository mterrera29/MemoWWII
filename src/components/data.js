
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
    {id:"1",img:src1,check:"1",name:"Stalin", name2:"Iosif Stalin", bandera:src7, info:"Líder y dictador de la Unión Soviética desde mediados de la década de 1920 hasta su muerte en 1953. Bajo Stalin, la Unión Soviética pasó de ser una sociedad campesina a una superpotencia industrial."},
    {id:"2",img:src2,check:"2",name:"Hitler", name2:"Adolf Hitler", bandera:src8, info:"Político alemán y líder del Partido Nazi. Ascendió al poder como Canciller de Alemania en 1933 y luego como Führer en 1934. Durante su dictadura de 1933 a 1945, inició la Segunda Guerra Mundial en Europa al invadir Polonia en septiembre de 1939."},
    {id:"3",img:src3,check:"3",name:"De Gaulle", name2:"Charles de Gaulle", bandera:src9, info:"Fue presidente de Francia 1959 a 1969 y durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo."},
    {id:"4",img:src4,check:"4",name:"Mussolini", name2:"Benito Mussolini", bandera:src10, info:"Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943. Figura carismática y controvertida, desempeñó un papel destacado en el estallido de la Segunda Guerra Mundial.."},
    {id:"5",img:src5,check:"5",name:"Churchill", name2:"Wiston Churchill", bandera:src11, info:"Primer Ministro de Gran Bretaña considerado como una de las figuras más importantes del siglo XX y uno de los líderes más destacados durante la Segunda Guerra Mundial."},
    {id:"6",img:src6,check:"6",name:"Roosevelt", name2:"Franklin Roosevelt", bandera:src12, info:"Fue un político y abogado estadounidense que ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945."},
    {id:"7",img:src1,check:"1",name:"Stalin", name2:"Iosif Stalin", bandera:src7, info:"Líder y dictador de la Unión Soviética desde mediados de la década de 1920 hasta su muerte en 1953. Bajo Stalin, la Unión Soviética pasó de ser una sociedad campesina a una superpotencia industrial."},
    {id:"8",img:src2,check:"2",name:"Hitler", name2:"Adolf Hitler", bandera:src8, info:"Político alemán y líder del Partido Nazi. Ascendió al poder como Canciller de Alemania en 1933 y luego como Führer en 1934. Durante su dictadura de 1933 a 1945, inició la Segunda Guerra Mundial en Europa al invadir Polonia en septiembre de 1939."},
    {id:"9",img:src3,check:"3",name:"De Gaulle", name2:"Charles de Gaulle", bandera:src9, info:"Fue presidente de Francia 1959 a 1969 y durante la Segunda Guerra Mundial encabezó la Resistencia francesa contra el nazismo."},
    {id:"10",img:src4,check:"4",name:"Mussolinni",name2:"Benito Mussolinni", bandera:src10, info:"Líder político italiano que fundó el partido fascista y dirigió a Italia de 1922 a 1943. Figura carismática y controvertida, desempeñó un papel destacado en el estallido de la Segunda Guerra Mundial.."},
    {id:"11",img:src5,check:"5",name:"Churchill",name2:"Wiston Churchill", bandera:src11, info:"Primer Ministro de Gran Bretaña considerado como una de las figuras más importantes del siglo XX y uno de los líderes más destacados durante la Segunda Guerra Mundial."},
    {id:"12",img:src6,check:"6",name:"Roosevelt",name2:"Franklin Roosevelt", bandera:src12, info:"Fue un político y abogado estadounidense que ejerció como 32.º presidente de Estados Unidos desde 1933 hasta su muerte en 1945."}
    ].sort(()=>Math.random() - 0.5)