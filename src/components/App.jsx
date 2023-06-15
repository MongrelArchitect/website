import React, { useState } from 'react';
import Routing from './Routing';
import beach00 from '../images/beach00.png';
import beach01 from '../images/beach01.png';
import city00 from '../images/city00.png';

const backgrounds = [beach00, beach01, city00];

const quotes = [
  {
    text:
      'Those who are capable of tyranny are capable of perjury to'
      + ' sustain it.',
    author: 'Lysander Spooner',
  },
  {
    text: 'How can anyone read history and still trust politicians?',
    author: 'Thomas Sowell',
  },
  {
    text:
      'The only thing that makes life possible is permanent,'
      + ' intolerable uncertainty.',
    author: 'Ursula Le Guin',
  },
];

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const changeBackground = (event) => {
    if (backgroundImage === backgrounds.length - 1) {
      setBackgroundImage(0);
    } else {
      setBackgroundImage(backgroundImage + 1);
    }
    event.target.parentElement.blur();
  };

  const changeQuote = (event) => {
    if (currentQuote === quotes.length - 1) {
      setCurrentQuote(0);
    } else {
      setCurrentQuote(currentQuote + 1);
    }
    event.target.parentElement.blur();
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgrounds[backgroundImage]})`,
      }}
    >
      <Routing
        changeBackground={changeBackground}
        changeQuote={changeQuote}
        quote={quotes[currentQuote]}
      />
    </div>
  );
}
