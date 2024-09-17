import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function None({ changeBackground }) {
  return (
    <main className="home">
      <Nav changeBackground={changeBackground} />
      <article className="quote invalid">
        <h1>Whoopsie Doodle</h1>
        <p>
          Nothing to see here. Perhaps you clicked a bad link or entered an
          invalid route? Try going back
          {' '}
          <Link to="/">home</Link>
          .
        </p>
      </article>
    </main>
  );
}
