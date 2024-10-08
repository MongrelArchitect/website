import chedditImage from '../images/cheddit.jpg';
import fineartImage from '../images/fineart.jpg';
import membersOnlyImage from '../images/membersonly.jpg';
import ourFamilyHubImage from '../images/our-family-hub.jpg';
import parerntingoBackendImage from '../images/parentingo-backend.jpg';
import parerntingoImage from '../images/parentingo.jpg';
import blogApiImage from '../images/blog-api.jpg';
import zovantImage from '../images/zovant.jpg';

const myProjects = [
  {
    description: 'Create private families to plan events, share todo lists and more! Made with Next.js and PostgreSQL, containerized with Docker.',
    github: 'https://github.com/MongrelArchitect/our-family-hub',
    image: ourFamilyHubImage,
    liveDemo: 'https://ourfamilyhub.net',
    name: 'Our Family Hub',
  },
  {
    description:
      'A place for parents to make their own discussion groups. Decoupled frontend made with React and TypeScript.',
    github: 'https://github.com/MongrelArchitect/parentingo-frontend',
    image: parerntingoImage,
    liveDemo: 'https://parentingo.com',
    name: 'Parentingo',
  },
  {
    description:
      'The backend for Parentingo. A RESTful API using Node.JS and MongoDB, made with TypeScript and tested with Jest + SuperTest.',
    github: 'https://github.com/MongrelArchitect/parentingo-backend',
    image: parerntingoBackendImage,
    liveDemo: 'https://parentingo.com',
    name: 'Parentingo API',
  },
  {
    description:
      'A gallery site for a local artist to upload and display her work.',
    github: 'https://github.com/MongrelArchitect/lauren-new',
    image: fineartImage,
    liveDemo: 'https://lauren-art.web.app/',
    name: 'Art Gallery',
  },
  {
    description:
      'An imageboard site where users can create and moderate their own boards.',
    github: 'https://github.com/MongrelArchitect/cheddit',
    image: chedditImage,
    liveDemo: 'https://cheddit.net',
    name: 'Cheddit',
  },
  {
    description:
      'An inventory management site for a CCTV wholesaler, with custom CMS features.',
    github: 'https://github.com/MongrelArchitect/zovant',
    image: zovantImage,
    liveDemo: 'https://zovantcctv.com/',
    name: 'Zovant',
  },
  {
    description: 'An API for blog management. Runs the blog on this site!',
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
];

export default myProjects;
