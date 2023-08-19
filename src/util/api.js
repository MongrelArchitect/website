const DOMAIN = 'http://localhost:3000';

const apiUrl = {
  allPosts: `${DOMAIN}/posts`,
  postComments: (id) => `${DOMAIN}/posts/${id}/comments`,
};

export default apiUrl;
