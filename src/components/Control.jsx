import React from 'react';
import { useLocation } from 'react-router-dom';
import quoteIcon from '../images/quote.svg';
import imageIcon from '../images/image.svg';

export default function Control({ changeBackground, changeQuote }) {
  const location = useLocation();

  return (
    <div className="control">
      {location.pathname === '/' ? (
        <button onClick={changeQuote} title="change quote" type="button">
          <img
            alt="change quote"
            className="control-icon quote-icon"
            src={quoteIcon}
          />
        </button>
      ) : null}
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
