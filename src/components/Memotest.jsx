import React, { useState, useEffect } from 'react';
const images = [
  'https://icongr.am/devicon/android-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/angularjs-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/apple-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/babel-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/bower-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/chrome-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/css3-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/firefox-original.svg?size=50&color=currentColor',
  'https://icongr.am/devicon/git-original.svg?size=50&color=currentColor',
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

const Memotest = () => {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
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

  return (
    <main>
      <ul className='container'>
        {images.map((image) => {
          const [, url] = image.split('|');

          return (
            <li
              key={image}
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
              {selected.includes(image) || guessed.includes(image) ? (
                <img alt='' src={url} />
              ) : (
                <img
                  key={url}
                  alt=''
                  src='https://icongr.am/entypo/help.svg?size=128&color=currentColor'
                />
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Memotest;
