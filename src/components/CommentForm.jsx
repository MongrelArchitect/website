import React, { useState } from 'react';
import apiUrl from '../util/api';

export default function CommentForm({ post, triggerDb }) {
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [text, setText] = useState('');

  const editAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const editText = (event) => {
    setText(event.target.value);
    setError('');
  };

  const submitForm = async () => {
    try {
      const response = await fetch(apiUrl.postComments(post._id), {
        body: new URLSearchParams({
          author,
          text,
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });
      const result = await response.json();
      if (result.status === 400) {
        setError('Comment required');
      } else if (result.status !== 201) {
        console.error(result);
        setError('Error submitting comment');
      } else {
        triggerDb();
        setAuthor('');
        setText('');
      }
    } catch (err) {
      console.error(err);
      setError('Error submitting comment');
    }
  };

  return (
    <div className="comment-form">
      <form action="" method="POST">
        <label htmlFor={`author${post._id}`}>
          Name
          <input
            id={`author${post._id}`}
            name="author"
            onChange={editAuthor}
            type="text"
            value={author}
          />
        </label>
        <label htmlFor={`text${post._id}`}>
          Comment
          <textarea
            rows="5"
            id={`text${post._id}`}
            name="text"
            onChange={editText}
            value={text}
          />
        </label>
        {error ? <span className="error">{error}</span> : null}
        <button onClick={submitForm} type="button">
          Submit
        </button>
      </form>
    </div>
  );
}
