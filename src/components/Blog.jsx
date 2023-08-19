import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Nav from './Nav';
import apiUrl from '../util/api';

export default function Blog({ changeBackground }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [dbTriggerPosts, setDbTriggerPosts] = useState(false);

  const triggerDbPosts = () => {
    setDbTriggerPosts(!dbTriggerPosts);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(apiUrl.allPosts);
        const result = await response.json();
        const { posts } = result;
        if (posts) {
          setBlogPosts(posts);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, [dbTriggerPosts]);

  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <div className="info">
        <h1>Abstractions</h1>
        {blogPosts.length ? (
          blogPosts.map((post) => (
            <BlogPost
              key={post._id}
              post={post}
              triggerDbPosts={triggerDbPosts}
            />
          ))
        ) : (
          <article>No posts published. Sorry!</article>
        )}
      </div>
    </main>
  );
}
