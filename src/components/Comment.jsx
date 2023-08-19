import React, { useState } from 'react';

const he = require('he');

export default function Comment({ comment, triggerDb }) {
  const token = localStorage.getItem('token');

  const [editing, setEditing] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(he.decode(comment.author));
  const [editingText, setEditingText] = useState(he.decode(comment.text));

  const changeEditingAuthor = (event) => {
    setEditingAuthor(event.target.value);
  };

  const changeEditingText = (event) => {
    setEditingText(event.target.value);
  };

  const deleteComment = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/posts/${comment.post}/comments/${comment._id}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
          method: 'DELETE',
        },
      );
      const result = await response.json();
      triggerDb();
      if (result.status !== 200) {
        // XXX
        // handle invalid token / delete errors
      }
    } catch (err) {
      // XXX
      // handle errors better
      console.error(err);
    }
  };

  const submitCommentEdit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/posts/${comment.post}/comments/${comment._id}`,
        {
          body: new URLSearchParams({
            author: editingAuthor,
            text: editingText,
          }),
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'PATCH',
        },
      );
      const result = await response.json();
      triggerDb();
      setEditing(!editing);
      if (result.status !== 200) {
        // XXX
        // handle invalid token / delete errors
      }
    } catch (err) {
      // XXX
      // handle errors better
      console.error(err);
    }
  };

  const toggleEdit = () => {
    setEditing(!editing);
    setEditingAuthor(he.decode(comment.author));
    setEditingText(he.decode(comment.text));
  };

  return (
    <div className="comment">
      <div className="post-header">
        {token ? (
          <span className="post-control">
            <button className="edit" onClick={toggleEdit} type="button">
              {editing ? 'Cancel Edit' : 'Edit Comment'}
            </button>
            <button className="delete" onClick={deleteComment} type="button">
              Delete Comment
            </button>
          </span>
        ) : null}
      </div>

      {editing ? (
        <div>
          <label htmlFor={`editingText${comment._id}`}>
            Text
            <textarea
              id={`editingText${comment._id}`}
              onChange={changeEditingText}
              rows="5"
              value={editingText || ''}
            />
          </label>
        </div>
      ) : (
        <div>{he.decode(comment.text)}</div>
      )}

      <div className="post-info">
        {editing ? (
          <div>
            <label htmlFor={`editingAuthor${comment._id}`}>
              Author
              <input
                id={`editingAuthor${comment._id}`}
                onChange={changeEditingAuthor}
                type="text"
                value={editingAuthor || ''}
              />
            </label>
          </div>
        ) : (
          <div>{he.decode(comment.author)}</div>
        )}

        <div className="post-timestamp">
          {new Date(comment.timestamp).toLocaleString().split(',')[0]}
          {comment.lastEdited ? (
            <span>
              {`(edited ${
                new Date(comment.lastEdited).toLocaleString().split(',')[0]
              })`}
            </span>
          ) : null}
        </div>
      </div>
      {editing ? (
        <div className="post-control">
          <button
            className="submit-edit"
            onClick={submitCommentEdit}
            type="button"
          >
            Submit Edit
          </button>
        </div>
      ) : null}
    </div>
  );
}
