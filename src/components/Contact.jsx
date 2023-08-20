import React from 'react';
import githubIcon from '../images/github.png';
import linkedIn from '../images/linkedin.png';

export default function Contact() {
  return (
    <article className="contact">
      <h2>Contact</h2>
      <div className="project">
        <div className="contact-info">
          <p>Let&apos;s work together and make good times for all!</p>
          <div className="contact-details">
            <p className="details icons">
              <a href="https://github.com/MongrelArchitect" title="Github">
                <img
                  alt="GitHub"
                  className="link-icon"
                  src={githubIcon}
                  title="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sean-eric-thomas/"
                title="LinkedIn"
              >
                <img
                  alt="LinkedIn"
                  className="link-icon"
                  src={linkedIn}
                  title="LinkedIn"
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
          </div>
        </div>
        <div className="image-container">
          <div className="contact-photo" />
        </div>
        <a href="/login" className="latin" tabIndex="-1">
          Tu ne cede malis sed contra audentior ito.
        </a>
      </div>
    </article>
  );
}
