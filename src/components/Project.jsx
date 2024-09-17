import React from 'react';
import githubIcon from '../images/github.png';
import linkIcon from '../images/open-in-new.png';

export default function Project({
  description,
  github,
  image,
  liveDemo,
  name,
}) {
  const screenshotStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="project">
      <div className="image-container">
        <div className="screenshot" style={screenshotStyle} />
      </div>
      <div className="project-title">
        <h3>{name}</h3>
        <div className="project-links">
          <a href={github}>
            <img
              alt="View project on GitHub"
              className="link-icon"
              src={githubIcon}
              title="View project on GitHub"
            />
          </a>
          <a target="_blank" href={liveDemo} rel="noreferrer">
            <img
              alt="Live demo (new tab)"
              className="link-icon"
              src={linkIcon}
              title="Live demo (new tab)"
            />
          </a>
        </div>
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
}
