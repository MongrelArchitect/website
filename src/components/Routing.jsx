import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
