import React from 'react';
import Project from './Project';
import myProjects from '../util/projects';

export default function Projects() {
  return (
    <article className="projects">
      <h2>My Work</h2>
      {myProjects.map((project) => (
        <Project
          description={project.description}
          github={project.github}
          image={project.image}
          key={project.name}
          liveDemo={project.liveDemo}
          name={project.name}
        />
      ))}
    </article>
  );
}
