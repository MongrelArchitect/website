import React from 'react';
import githubIcon from '../images/github.svg';
import linkIcon from '../images/open-in-new.svg';

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
      <div className="screenshot" style={screenshotStyle} />
      <div className="project-title">
        <h3>{name}</h3>
        <div className="project-links">
          <a href={github}>
            <img
              alt="View this project on Github"
              className="link-icon"
              src={githubIcon}
              title="View this project on Github"
            />
          </a>
          <a target="_blank" href={liveDemo} rel="noreferrer">
            <img
              alt="Link to live demo (new tab)"
              className="link-icon"
              src={linkIcon}
              title="Link to live demo (new tab)"
            />
          </a>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
