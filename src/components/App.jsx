import React, { useState } from 'react';
import Routing from './Routing';
import backgrounds from '../util/backgrounds';
import quotes from '../util/quotes';

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
