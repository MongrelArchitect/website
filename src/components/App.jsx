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
  {
    text: 'There can be no truly moral choice unless that choice '
          + ' is made in freedom.',
    author: 'Murray Rothbard',
  },
  {
    text: 'He who is unfit to serve his fellow citizens wants to rule them.',
    author: 'Ludwig von Mises',
  },
  {
    text: 'There is no magic. There is only knowledge, more or less hidden.',
    author: 'Gene Wolfe',
  },
  {
    text: 'Poverty can be brought about by law; it cannot be forbidden by law.',
    author: 'Isabel Paterson',
  },
  {
    text: 'Part of freedom is the right of each of us to go to hell'
          + ' in his own fashion.',
    author: 'David D. Friedman',
  },
  {
    text: 'Government is the great fiction through which everybody '
          + ' endeavors to live at the expense of everybody else.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'Living is fighting for life, and when anyone does not know'
          + ' this fact, someone else is doing his fighting for him.',
    author: 'Rose Wilder Lane',
  },
  {
    text: 'Just as war is the natural consequence of monopoly, peace'
          + ' is the natural consequence of liberty.',
    author: 'Gustave de Molinari',
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
