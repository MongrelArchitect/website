import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import apiUrl from '../util/api';

export default function BlogPost({ post }) {
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
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
    getComments();
  }, []);

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
      {postComments.length
        ? postComments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))
        : null}
    </article>
  );
}
