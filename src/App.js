import React, { useState, useEffect } from 'react';
import './App.css';

const sounds = [
  {
    key: 'Q',
    src: 'http://soundbible.com/grab.php?id=2205&type=mp3',
  },
  {
    key: 'W',
    src: 'http://soundbible.com/grab.php?id=2183&type=mp3',
  },
  {
    key: 'E',
    src: 'http://soundbible.com/grab.php?id=2181&type=mp3',
  },
  {
    key: 'A',
    src: 'http://soundbible.com/grab.php?id=2173&type=mp3',
  },
  {
    key: 'S',
    src: 'http://soundbible.com/grab.php?id=2152&type=mp3',
  },
  {
    key: 'D',
    src: 'http://soundbible.com/grab.php?id=2131&type=mp3',
  },
  {
    key: 'Z',
    src: 'http://soundbible.com/grab.php?id=2103&type=mp3',
  },
  {
    key: 'X',
    src: 'http://soundbible.com/grab.php?id=2045&type=mp3',
  },
  {
    key: 'C',
    src: 'http://soundbible.com/grab.php?id=1993&type=mp3',
  },
];

const App = () => {
  return (
    <div>
    <h2 id="text">PRESS BUTTON OR KEY</h2>
    <div id="display" className="display">
      {sounds.map((sound) => (
        <DrumPad text={sound.key} key={sound.key} src={sound.src} />
      ))}
    </div>
    </div>
  );
};

const DrumPad = ({ src, text }) => {
  const [audio] = useState(new Audio(src));
  const [active, setActive] = useState(false);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setActive(false);
    });
  }, []);

  const handleClick = () => {
    audio.play();
    audio.currentTime = 0;
    setActive(true);
  };

  return (
    <div
      className={'drum-pad ' + (active ? 'active' : '')}
      onClick={handleClick}
      id={`drum-${text}`}
    >
      {text}
    </div>
  );
};

export default App;

