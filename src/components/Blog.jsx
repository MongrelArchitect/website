import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Nav from './Nav';
import NewPost from './NewPost';
import apiUrl from '../util/api';

export default function Blog({ changeBackground }) {
  const token = localStorage.getItem('token');

  const [blogPosts, setBlogPosts] = useState([]);
  const [dbTriggerPosts, setDbTriggerPosts] = useState(false);
  const [loading, setLoading] = useState('');

  const triggerDbPosts = () => {
    setDbTriggerPosts(!dbTriggerPosts);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading('Loading..');
        const fetchOptions = {};
        // send valid token to include unpublished posts
        if (token) {
          fetchOptions.headers = { Authorization: `Bearer ${token}` };
        }
        const response = await fetch(apiUrl.allPosts, fetchOptions);
        const result = await response.json();
        const { posts } = result;
        if (posts) {
          setLoading('');
          setBlogPosts(posts);
        } else {
          setLoading('No posts found.');
        }
      } catch (err) {
        console.error(err);
        setLoading('Error loading posts');
      }
    };
    getPosts();
  }, [dbTriggerPosts]);

  return (
    <main className="portfolio">
      <Nav changeBackground={changeBackground} />
      <div className="info">
        <h1>Abstractions</h1>
        {token ? <NewPost triggerDbPosts={triggerDbPosts} /> : null}
        {blogPosts.length ? (
          blogPosts.map((post) => (
            <BlogPost
              key={post._id}
              post={post}
              triggerDbPosts={triggerDbPosts}
            />
          ))
        ) : (
          <article>
            {loading ? (
              <span>
                {loading}
                {loading === 'Loading..' ? (
                  <span className="blink">.</span>
                ) : null}
              </span>
            ) : null}
          </article>
        )}
      </div>
    </main>
  );
}
