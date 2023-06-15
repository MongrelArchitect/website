import React from 'react';
import { NavLink } from 'react-router-dom';
import Control from './Control';

export default function Nav({ changeBackground, changeQuote }) {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        |
        <NavLink to="/portfolio">Sean</NavLink>
      </div>
      <Control changeBackground={changeBackground} changeQuote={changeQuote} />
    </nav>
  );
}
