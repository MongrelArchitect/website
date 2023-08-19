import React, { useState } from 'react';

export default function CommentForm({ post, triggerDb }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const editAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const editText = (event) => {
    setText(event.target.value);
  };

  const submitForm = async () => {
    try {
      await fetch(`http://localhost:3000/posts/${post._id}/comments/`, {
        body: new URLSearchParams({
          author,
          text,
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });
      triggerDb();
      setAuthor('');
      setText('');
    } catch (err) {
      console.error(err);
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
        <button onClick={submitForm} type="button">
          Submit
        </button>
      </form>
    </div>
  );
}
