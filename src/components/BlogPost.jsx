import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import apiUrl from '../util/api';

const he = require('he');

export default function BlogPost({ post, triggerDbPosts }) {
  const token = localStorage.getItem('token');

  const [postComments, setPostComments] = useState([]);
  const [dbTrigger, setDbTrigger] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingPublished, setEditingPublished] = useState(post.published);
  const [editingTitle, setEditingTitle] = useState(he.decode(post.title));
  const [editingText, setEditingText] = useState(he.decode(post.text));

  const changeEditingText = (event) => {
    setEditingText(event.target.value);
  };

  const changeEditingTitle = (event) => {
    setEditingTitle(event.target.value);
  };

  const changePublished = () => {
    setEditingPublished(!editingPublished);
  };

  const deletePost = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${post._id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
        method: 'DELETE',
      });
      const result = await response.json();
      triggerDbPosts();
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

  const getComments = async () => {
    try {
      const response = await fetch(apiUrl.postComments(post._id));
      const result = await response.json();
      const { comments } = result;
      if (comments) {
        setPostComments(comments);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const submitPostEdit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${post._id}`, {
        body: new URLSearchParams({
          published: editingPublished ? 'true' : '',
          text: editingText,
          title: editingTitle,
        }),
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'PATCH',
      });
      const result = await response.json();
      triggerDbPosts();
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

  const toggleEdit = async () => {
    setEditingPublished(post.published);
    setEditingTitle(he.decode(post.title));
    setEditingText(he.decode(post.text));
    setEditing(!editing);
  };

  const triggerDb = () => {
    setDbTrigger(!dbTrigger);
  };

  useEffect(() => {
    getComments();
  }, [dbTrigger]);

  return (
    <article className="project blog-post">
      <div className="post-header">
        {token ? (
          <span className="post-control">
            <button className="edit" onClick={toggleEdit} type="button">
              {editing ? 'Cancel Edit' : 'Edit Post'}
            </button>
            <button className="delete" onClick={deletePost} type="button">
              Delete Post
            </button>
          </span>
        ) : null}
        {editing ? (
          <div>
            <label htmlFor={`editingTitle${post._id}`}>
              Title
              <input
                id={`editingTitle${post._id}`}
                onChange={changeEditingTitle}
                type="text"
                value={editingTitle || ''}
              />
            </label>
          </div>
        ) : (
          <h1 className="blog-title">{he.decode(post.title)}</h1>
        )}
      </div>
      {editing ? (
        <div>
          <label htmlFor={`editingText${post._id}`}>
            Text
            <textarea
              id={`editingText${post._id}`}
              onChange={changeEditingText}
              rows="5"
              value={editingText || ''}
            />
          </label>
        </div>
      ) : (
        <div>{he.decode(post.text)}</div>
      )}
      {token ? (
        <span
          className={
            editingPublished ? 'published-info yes' : 'published-info no'
          }
        >
          {editingPublished ? 'Published' : 'Not Published'}
        </span>
      ) : null}
      {editing ? (
        <div className="post-control bottom">
          <label className="switch" htmlFor={`published${post._id}`}>
            <input
              checked={editingPublished || false}
              id={`published${post._id}`}
              onChange={changePublished}
              type="checkbox"
            />
            <span className="slider" />
          </label>
          <button
            className="submit-edit"
            onClick={submitPostEdit}
            type="button"
          >
            Submit Edit
          </button>
        </div>
      ) : null}
      <div className="post-info">
        <span>{post.author}</span>
        <div className="post-timestamp">
          <span>{new Date(post.timestamp).toLocaleString().split(',')[0]}</span>
          {post.lastEdited ? (
            <span>
              {`(edited ${
                new Date(post.lastEdited).toLocaleString().split(',')[0]
              })`}
            </span>
          ) : null}
        </div>
      </div>
      {postComments.length ? <h3>Comments</h3> : null}
      {postComments.length
        ? postComments.map((comment) => (
          <Comment
            comment={comment}
            key={comment._id}
            triggerDb={triggerDb}
          />
        ))
        : null}
      <h3>New Comment</h3>
      <CommentForm post={post} triggerDb={triggerDb} />
    </article>
  );
}
