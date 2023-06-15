import React, { useState } from 'react';
import Routing from './Routing';
import backgrounds from '../util/backgrounds';
import quotes from '../util/quotes';

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    +localStorage.getItem('background') || 0,
  );
  const [currentQuote, setCurrentQuote] = useState(
    +localStorage.getItem('quote') || 0,
  );

  const changeBackground = (event) => {
    if (backgroundImage === backgrounds.length - 1) {
      setBackgroundImage(0);
      localStorage.setItem('background', 0);
    } else {
      setBackgroundImage(backgroundImage + 1);
      localStorage.setItem('background', backgroundImage + 1);
    }
    event.target.parentElement.blur();
  };

  const changeQuote = (event) => {
    if (currentQuote === quotes.length - 1) {
      setCurrentQuote(0);
      localStorage.setItem('quote', 0);
    } else {
      setCurrentQuote(currentQuote + 1);
      localStorage.setItem('quote', currentQuote + 1);
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
