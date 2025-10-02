import React from 'react';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

export default function Portfolio({ changeBackground }) {
  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <div className="info">
        <About />
        <Contact />
      </div>
    </main>
  );
}
