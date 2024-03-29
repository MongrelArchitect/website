import React from 'react';

export default function About() {
  return (
    <article className="about">
      <h1>Sean Eric Thomas</h1>
      <div className="project">
        <div className="image-container">
          <div className="headshot" />
        </div>

        <div className="about-large">
          <h2>About Me</h2>
          <p>
            I&apos;m a web developer from southern California. I enjoy playing
            guitar, roguelikes, science fiction and hiking with my kids.
          </p>
        </div>
      </div>

      <div className="about-small">
        <h2>About Me</h2>
        <div className="project">
          <p>
            I&apos;m a web developer from southern California. I enjoy playing
            guitar, roguelikes, science fiction and hiking with my kids.
          </p>
        </div>
      </div>
    </article>
  );
}
