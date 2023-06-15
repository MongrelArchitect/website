import React from 'react';

export default function Quote({ quote }) {
  return (
    <article className="quote">
      <p>{quote.text}</p>
      <p className="author">{quote.author}</p>
    </article>
  );
}
