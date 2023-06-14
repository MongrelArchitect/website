import React from 'react';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';

export default function Portfolio() {
  return (
    <main className="portfolio">
      <Nav />
      <div className="info">
        <About />
        <Projects />
      </div>
    </main>
  );
}
