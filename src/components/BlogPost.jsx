import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import apiUrl from '../util/api';

export default function BlogPost({ post }) {
  const [postComments, setPostComments] = useState([]);
  const [dbTrigger, setDbTrigger] = useState(false);

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

  const triggerDb = () => {
    setDbTrigger(!dbTrigger);
  };

  useEffect(() => {
    getComments();
  }, [dbTrigger]);

  return (
    <article className="project blog-post">
      <h1 className="blog-title">{post.title}</h1>
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
