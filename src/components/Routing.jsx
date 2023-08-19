import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Home from './Home';
import Login from './Login';
import None from './None';
import Portfolio from './Portfolio';

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
        path="/blog"
        element={<Blog changeBackground={changeBackground} />}
      />
      <Route
        path="/login"
        element={<Login changeBackground={changeBackground} />}
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
