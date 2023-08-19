import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import apiUrl from '../util/api';

export default function BlogPost({ post, triggerDbPosts }) {
  const token = localStorage.getItem('token');

  const [postComments, setPostComments] = useState([]);
  const [dbTrigger, setDbTrigger] = useState(false);

  const triggerDb = () => {
    setDbTrigger(!dbTrigger);
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

  useEffect(() => {
    getComments();
  }, [dbTrigger]);

  return (
    <article className="project blog-post">
      <div className="post-header">
        <h1 className="blog-title">{post.title}</h1>
        {token ? (
          <span className="post-control">
            <button className="edit" type="button">Edit</button>
            <button className="delete" onClick={deletePost} type="button">
              Delete
            </button>
          </span>
        ) : null}
      </div>
      <div>{post.text}</div>
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
