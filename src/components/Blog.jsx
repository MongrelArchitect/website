import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Nav from './Nav';
import apiUrl from '../util/api';

export default function Blog({ changeBackground }) {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(apiUrl.allPosts);
        const result = await response.json();
        const { posts } = result;
        if (posts) {
          console.log(posts);
          setBlogPosts(posts);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <div className="info">
        {blogPosts.length ? (
          blogPosts.map((post) => (
            <BlogPost key={post._id} post={post} />
          ))
        ) : (
          <article>No posts published. Sorry!</article>
        )}
      </div>
    </main>
  );
}
