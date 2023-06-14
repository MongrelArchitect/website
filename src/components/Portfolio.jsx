import React from 'react';
import Nav from './Nav';
import About from './About';

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Nav />
      <div className="info">
        <About />
      </div>
    </main>
  );
}
