import React from 'react';
import githubIcon from '../images/github.png';

export default function Contact() {
  return (
    <article className="contact">
      <h2>Contact</h2>
      <div className="project">
        <p>Let&apos;s work together and make good times for all!</p>
        <p className="details">
          <a href="https://github.com/MongrelArchitect" title="Github">
            <img
              alt="GitHub"
              className="link-icon"
              src={githubIcon}
              title="GitHub"
            />
          </a>
        </p>
        <p className="details">
          <a href="tel:+18053161187" title="phone">
            805-316-1187
          </a>
        </p>
        <p className="details">
          <a href="mailto:set@seanericthomas.com" title="email">
            set@seanericthomas.com
          </a>
        </p>
        <div className="image-container">
          <div className="contact-photo" />
        </div>
      </div>
    </article>
  );
}
