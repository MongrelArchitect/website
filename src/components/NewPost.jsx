import React, { useState } from 'react';
import apiUrl from '../util/api';

export default function NewPost({ triggerDbPosts }) {
  const token = localStorage.getItem('token');

  const [error, setError] = useState('');
  const [published, setPublished] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const changePublished = () => {
    setPublished(!published);
  };

  const editText = (event) => {
    setText(event.target.value);
    setError('');
  };

  const editTitle = (event) => {
    setTitle(event.target.value);
    setError('');
  };

  const submitForm = async () => {
    try {
      const newPost = {
        text,
        title,
      };
      if (published) {
        newPost.published = 'true';
      }
      const response = await fetch(apiUrl.allPosts, {
        body: new URLSearchParams(newPost),
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      });
      const result = await response.json();
      if (result.status === 400) {
        setError('Title and text both required');
      } else if (result.status !== 200) {
        console.error(result);
        setError('Error submitting post');
      } else {
        setPublished(false);
        setText('');
        setTitle('');
        triggerDbPosts();
      }
    } catch (err) {
      console.error(err);
      setError('Error submitting post');
    }
  };

  return (
    <div className="project blog-post">
      <h3>New Post</h3>
      <div className="comment-form">
        <form action="" method="POST">
          <label htmlFor="new-title">
            Title
            <input
              id="new-title"
              name="title"
              onChange={editTitle}
              type="text"
              value={title}
            />
          </label>
          <label htmlFor="new-text">
            Text
            <textarea
              rows="5"
              id="new-text"
              name="text"
              onChange={editText}
              value={text}
            />
          </label>
          <span
            className={published ? 'published-info yes' : 'published-info no'}
          >
            {published ? 'Published' : 'Not Published'}
          </span>
          <label className="switch" htmlFor="published">
            <input
              checked={published || false}
              id="published"
              onChange={changePublished}
              type="checkbox"
            />
            <span className="slider" />
          </label>
          {error ? <span className="error">{error}</span> : null}
          <button onClick={submitForm} type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
