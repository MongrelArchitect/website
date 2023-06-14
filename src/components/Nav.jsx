import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      |
      <NavLink to="/portfolio">Sean</NavLink>
    </nav>
  );
}
