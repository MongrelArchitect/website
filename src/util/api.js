const DOMAIN = 'https://blog-api-7d3w19orx7.fly.dev';

const apiUrl = {
  allPosts: `${DOMAIN}/posts`,
  login: `${DOMAIN}/login`,
  postComments: (id) => `${DOMAIN}/posts/${id}/comments`,
  singleComment:
    (postId, commentId) => `${DOMAIN}/posts/${postId}/comments/${commentId}`,
  singlePost: (id) => `${DOMAIN}/posts/${id}`,
};

export default apiUrl;
