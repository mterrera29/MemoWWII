import React, { useState, useEffect } from 'react';
const images = [
  {
    id: '1',
    img: 'https://icongr.am/devicon/android-original.svg?size=50&color=currentColor',
    check: '1',
  },
  {
    id: '2',
    img: 'https://icongr.am/devicon/angularjs-original.svg?size=50&color=currentColor',
    check: '2',
  },
  {
    id: '3',
    img: 'https://icongr.am/devicon/apple-original.svg?size=50&color=currentColor',
    check: '3',
  },
  {
    id: '4',
    img: 'https://icongr.am/devicon/babel-original.svg?size=50&color=currentColor',
    check: '4',
  },
  {
    id: '5',
    img: 'https://icongr.am/devicon/bower-original.svg?size=50&color=currentColor',
    check: '5',
  },
  {
    id: '6',
    img: 'https://icongr.am/devicon/c-original.svg?size=50&color=currentColor',
    check: '6',
  },
  {
    id: '7',
    img: 'https://icongr.am/devicon/chrome-original.svg?size=50&color=currentColor',
    check: '7',
  },
  {
    id: '8',
    img: 'https://icongr.am/devicon/css3-original.svg?size=50&color=currentColor',
    check: '8',
  },
  {
    id: '9',
    img: 'https://icongr.am/devicon/firefox-original.svg?size=50&color=currentColor',
    check: '9',
  },
  {
    id: '10',
    img: 'https://icongr.am/devicon/git-original.svg?size=50&color=currentColor',
    check: '10',
  },
  {
    id: '11',
    img: 'https://icongr.am/devicon/android-original.svg?size=50&color=currentColor',
    check: '1',
  },
  {
    id: '12',
    img: 'https://icongr.am/devicon/angularjs-original.svg?size=50&color=currentColor',
    check: '2',
  },
  {
    id: '13',
    img: 'https://icongr.am/devicon/apple-original.svg?size=50&color=currentColor',
    check: '3',
  },
  {
    id: '14',
    img: 'https://icongr.am/devicon/babel-original.svg?size=50&color=currentColor',
    check: '4',
  },
  {
    id: '15',
    img: 'https://icongr.am/devicon/bower-original.svg?size=50&color=currentColor',
    check: '5',
  },
  {
    id: '16',
    img: 'https://icongr.am/devicon/c-original.svg?size=50&color=currentColor',
    check: '6',
  },
  {
    id: '17',
    img: 'https://icongr.am/devicon/chrome-original.svg?size=50&color=currentColor',
    check: '7',
  },
  {
    id: '18',
    img: 'https://icongr.am/devicon/css3-original.svg?size=50&color=currentColor',
    check: '8',
  },
  {
    id: '19',
    img: 'https://icongr.am/devicon/firefox-original.svg?size=50&color=currentColor',
    check: '9',
  },
  {
    id: '20',
    img: 'https://icongr.am/devicon/git-original.svg?size=50&color=currentColor',
    check: '10',
  },
].sort(() => Math.random() - 0.5);

const Memotest2 = () => {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (
        selected[0].check === selected[1].check &&
        selected[0].id !== selected[1].id
      ) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === images.length) {
      alert('you WIN!!!');
      location.reload();
    }
  }, [guessed]);

  console.log(guessed);

  return (
    <main>
      <ul className='container'>
        {images.map((image, index) =>
          selected.includes(image) ? (
            <li
              key={image.id}
              style={{
                cursor: 'pointer',
                padding: '5px',
                border: 'solid 1px #666',
                borderRadius: '12px',
              }}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              <img alt='' src={image.img} />
            </li>
          ) : guessed.includes(image) ? (
            <li
              key={image.id}
              style={{
                cursor: 'not-allowed',
                padding: '5px',
                border: 'solid 1px #666',
                borderRadius: '12px',
              }}
            >
              <img alt='' src={image.img} />
            </li>
          ) : (
            <li
              key={image.id}
              style={{
                cursor: 'pointer',
                padding: '5px',
                border: 'solid 1px #666',
                borderRadius: '12px',
              }}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              <img
                key={index}
                alt=''
                src='https://icongr.am/entypo/help.svg?size=128&color=currentColor'
              />
            </li>
          )
        )}
      </ul>
    </main>
  );
};

export default Memotest2;
