import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import None from './None';

export default function Routing({ changeBackground, changeQuote, quote }) {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Home
            changeBackground={changeBackground}
            changeQuote={changeQuote}
            quote={quote}
          />
        )}
      />
      <Route
        path="/portfolio"
        element={<Portfolio changeBackground={changeBackground} />}
      />
      <Route
        path="/*"
        element={<None changeBackground={changeBackground} />}
      />
    </Routes>
  );
}
