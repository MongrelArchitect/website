import chedditImage from '../images/cheddit.jpg';
import findemImage from '../images/findem.jpg';
import gememoryImage from '../images/gememory.jpg';
import fineartImage from '../images/fineart.jpg';
import membersOnlyImage from '../images/membersonly.jpg';
import blogApiImage from '../images/blog-api.jpg';

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
    description:
      'An API for blog management, jamstack style. Runs the blog on this site!',
    github: 'https://github.com/MongrelArchitect/blog-api',
    image: blogApiImage,
    liveDemo: 'https://seanericthomas.com/blog',
    name: 'Blog API',
  },
  {
    description:
      'A messageboard where users must enter a "secret code" to view'
      + ' authors and timestamps.',
    github: 'https://github.com/MongrelArchitect/members-only',
    image: membersOnlyImage,
    liveDemo: 'https://shy-night-2038.fly.dev/',
    name: 'Members Only',
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
];

export default myProjects;
