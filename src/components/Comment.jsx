import React, { useState } from 'react';
import apiUrl from '../util/api';

const he = require('he');

export default function Comment({ comment, triggerDb }) {
  const token = localStorage.getItem('token');

  const [editing, setEditing] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(he.decode(comment.author));
  const [editingText, setEditingText] = useState(he.decode(comment.text));
  const [error, setError] = useState('');

  const changeEditingAuthor = (event) => {
    setEditingAuthor(event.target.value);
  };

  const changeEditingText = (event) => {
    setError('');
    setEditingText(event.target.value);
  };

  const deleteComment = async () => {
    try {
      const response = await fetch(
        apiUrl.singleComment(comment.post, comment._id),
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
          method: 'DELETE',
        },
      );
      const result = await response.json();
      if (result.status !== 200) {
        console.error(result);
        setError('Error deleting comment');
      } else {
        triggerDb();
      }
    } catch (err) {
      console.error(err);
      setError('Error deleting comment');
    }
  };

  const submitCommentEdit = async () => {
    try {
      const response = await fetch(
        apiUrl.singleComment(comment.post, comment._id),
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
      if (!editingText) {
        setError('Comment required');
      } else if (result.status !== 200) {
        console.error(result);
        setError('Error submitting edit');
      } else {
        triggerDb();
        setEditing(!editing);
      }
    } catch (err) {
      console.error(err);
      setError('Error submitting edit');
    }
  };

  const toggleEdit = () => {
    setError('');
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
      {editing && error ? <span className="error">{error}</span> : null}
      {editing ? (
        <div>
          <div className="post-control">
            <button
              className="submit-edit"
              onClick={submitCommentEdit}
              type="button"
            >
              Submit Edit
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
