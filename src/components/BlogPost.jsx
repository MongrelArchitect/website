import React from 'react';

export default function BlogPost({ post }) {
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
    </article>
  );
}
