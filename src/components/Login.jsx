import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import apiUrl from '../util/api';

export default function None({ changeBackground }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async () => {
    try {
      const response = await fetch(apiUrl.login, {
        body: new URLSearchParams({
          email,
          password,
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });
      const result = await response.json();
      setEmail('');
      setPassword('');
      if (result.token) {
        localStorage.setItem('token', result.token);
        navigate('/blog');
      } else {
        // XXX
        // handle invalid login credentials
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <article className="quote invalid">
        <h1>Gateway</h1>
        <div className="project blog-post">
          <h3>Login</h3>
          <div className="comment-form">
            <form action="" method="POST">
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  onChange={changeEmail}
                  type="text"
                  value={email || ''}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  name="password"
                  onChange={changePassword}
                  type="password"
                  value={password || ''}
                />
              </label>
              <button onClick={submitForm} type="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}
