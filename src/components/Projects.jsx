import React from 'react';
import Project from './Project';
import chedditImage from '../images/cheddit.png';
import findemImage from '../images/findem.png';
import gememoryImage from '../images/gememory.png';
import fineartImage from '../images/fineart.png';
import battleshipImage from '../images/battleship.png';
import todoImage from '../images/todoit.png';

export default function Projects() {
  const myProjects = [
    {
      description:
        'An imageboard site where users can create and moderate their own'
        + ' discussion boards.',
      github: 'https://github.com/MongrelArchitect/cheddit',
      image: chedditImage,
      liveDemo: 'https://cheddit.net',
      name: 'Cheddit',
    },
    {
      description: 'A Where\'s Waldo style "find the character" game.',
      github: 'https://github.com/MongrelArchitect/waldo',
      image: findemImage,
      liveDemo: 'https://waldo-c3546.web.app/',
      name: "Find 'Em",
    },
    {
      description:
        'A memory game where players try to keep track of a shifting grid'
        + ' of gemstones.',
      github: 'https://github.com/MongrelArchitect/memory-card',
      image: gememoryImage,
      liveDemo: 'https://mongrelarchitect.github.io/memory-card/',
      name: 'GEMemory',
    },
    {
      description:
        'A custom gallery site for a local artist to display her work.',
      github: 'https://github.com/MongrelArchitect/lauren',
      image: fineartImage,
      liveDemo: 'http://mendelsohnbassfineart.com/',
      name: 'Art Gallery',
    },
    {
      description:
        'The classic board game, now in your browser! Play against a semi'
        + ' intelligent computer opponent.',
      github: 'https://github.com/MongrelArchitect/battleship',
      image: battleshipImage,
      liveDemo: 'https://mongrelarchitect.github.io/battleship/',
      name: 'Battleship',
    },
    {
      description:
        'A todo list application, using local storage or remote authentication'
        + ' to save tasks.',
      github: 'https://github.com/MongrelArchitect/todo-list',
      image: todoImage,
      liveDemo: 'https://todo-list-89ba6.firebaseapp.com/',
      name: 'ToDoIt',
    },
  ];

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
