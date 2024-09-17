import React from 'react';
import { useLocation } from 'react-router-dom';
import imageIcon from '../images/image.png';
import logoutIcon from '../images/logout.png';
import quoteIcon from '../images/quote.png';

export default function Control({ changeBackground, changeQuote }) {
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const token = localStorage.getItem('token');

  return (
    <div className="control">
      <button
        hidden={location.pathname !== '/'}
        onClick={changeQuote}
        title="change quote"
        type="button"
      >
        <img alt="change quote" className="control-icon" src={quoteIcon} />
      </button>
      <button onClick={changeBackground} type="button">
        <img
          alt="change background"
          className="control-icon"
          src={imageIcon}
          title="change background"
        />
      </button>
      {token ? (
        <button onClick={logOut} type="button">
          <img
            alt="log out"
            className="control-icon"
            src={logoutIcon}
            title="log out"
          />
        </button>
      ) : null}
    </div>
  );
}
