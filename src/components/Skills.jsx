import React from 'react';
import skills from '../util/skills';

export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="project">
        <p>I&apos;m good at computer.</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill.tool}>
              <div
                alt={skill.tool}
                className="skill-icon"
                style={{ backgroundImage: `url("${skill.image}")` }}
                title={skill.tool}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
