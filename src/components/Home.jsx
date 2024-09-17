import React from 'react';
import Nav from './Nav';
import Quote from './Quote';

export default function Home({ changeBackground, changeQuote, quote }) {
  return (
    <main className="home">
      <Nav changeBackground={changeBackground} changeQuote={changeQuote} />
      <Quote quote={quote} />
    </main>
  );
}
