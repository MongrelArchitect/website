import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import apiUrl from '../util/api';

export default function BlogPost({ post, triggerDbPosts }) {
  const token = localStorage.getItem('token');

  const [postComments, setPostComments] = useState([]);
  const [dbTrigger, setDbTrigger] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(post.title);
  const [editingText, setEditingText] = useState(post.text);

  const changeEditingText = (event) => {
    setEditingText(event.target.value);
  };

  const changeEditingTitle = (event) => {
    setEditingTitle(event.target.value);
  };

  const deletePost = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
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

  const toggleEdit = async (event) => {
    const { target } = event;
    if (editing) {
      target.textContent = 'Edit Post';
    } else {
      target.textContent = 'Cancel Edit';
    }
    setEditingTitle(post.title);
    setEditingText(post.text);
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
              Edit Post
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
          <h1 className="blog-title">{post.title}</h1>
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
        <div>{post.text}</div>
      )}
      {editing ? (
        <div className="post-control">
          <button className="submit-edit" type="button">Submit Edit</button>
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
          <Comment comment={comment} key={comment._id} />
        ))
        : null}
      <h3>New Comment</h3>
      <CommentForm post={post} triggerDb={triggerDb} />
    </article>
  );
}
