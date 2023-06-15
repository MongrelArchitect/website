import React from 'react';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Portfolio({ changeBackground }) {
  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <div className="info">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
