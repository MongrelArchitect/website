import React from 'react';

export default function BlogPost({ post }) {
  return (
    <article className="project">
      <div className="post-info">
        <h1>{post.title}</h1>
        <span>
          By
          {' '}
          {post.author}
        </span>
      </div>
      <div className="post-info time">
        <div>{new Date(post.timestamp).toLocaleString().split(',')[0]}</div>
        {post.lastEdited ? (
          <div>
            Edited:
            {' '}
            {new Date(post.lastEdited).toLocaleString().split(',')[0]}
          </div>
        ) : null}
      </div>
      <br />
      <div>{post.text}</div>
    </article>
  );
}
