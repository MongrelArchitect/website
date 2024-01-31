import chedditImage from '../images/cheddit.jpg';
import findemImage from '../images/findem.jpg';
import fineartImage from '../images/fineart.jpg';
import membersOnlyImage from '../images/membersonly.jpg';
import blogApiImage from '../images/blog-api.jpg';
import zovantImage from '../images/zovant.jpg';

const myProjects = [
  {
    description:
      'A gallery site for a local artist to upload and display her work.',
    github: 'https://github.com/MongrelArchitect/lauren-new',
    image: fineartImage,
    liveDemo: 'http://lauren-art.web.app/',
    name: 'Art Gallery',
  },
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
      'An inventory management site for a CCTV wholesaler, with custom CMS features.',
    github: 'https://github.com/MongrelArchitect/zovant',
    image: zovantImage,
    liveDemo: 'https://zovantcctv.com/',
    name: 'Zovant',
  },
  {
    description:
      'An API for blog management. Runs the blog on this site!',
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
];

export default myProjects;
