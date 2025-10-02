import React from 'react';

export default function Contact() {
  return (
    <article className="contact">
      <h2>Contact</h2>
      <div className="project">
        <div className="contact-info">
          <p>Let&apos;s work together and make good times for all!</p>
          <div className="contact-details">
            <p className="details">
              <a href="tel:+18054190390" title="phone">
                805-419-0390
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
