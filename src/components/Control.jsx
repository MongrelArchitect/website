import React from 'react';
import { useLocation } from 'react-router-dom';
import quoteIcon from '../images/quote.png';
import imageIcon from '../images/image.png';

export default function Control({ changeBackground, changeQuote }) {
  const location = useLocation();

  return (
    <div className="control">
      <button
        hidden={location.pathname !== '/'}
        onClick={changeQuote}
        title="change quote"
        type="button"
      >
        <img
          alt="change quote"
          className="control-icon"
          src={quoteIcon}
        />
      </button>
      <button onClick={changeBackground} type="button">
        <img
          alt="change background"
          className="control-icon"
          src={imageIcon}
          title="change background"
        />
      </button>
    </div>
  );
}