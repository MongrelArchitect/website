import React from 'react';

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div>{comment.text}</div>
      <div className="post-info">
        <div>{comment.author}</div>
        <div className="post-timestamp">
          {new Date(comment.timestamp).toLocaleString().split(',')[0]}
        </div>
      </div>
    </div>
  );
}
