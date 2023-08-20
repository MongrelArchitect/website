const DOMAIN = 'http://localhost:3000';

const apiUrl = {
  allPosts: `${DOMAIN}/posts`,
  login: `${DOMAIN}/login`,
  postComments: (id) => `${DOMAIN}/posts/${id}/comments`,
  singleComment:
    (postId, commentId) => `${DOMAIN}/posts/${postId}/comments/${commentId}`,
  singlePost: (id) => `${DOMAIN}/posts/${id}`,
};

export default apiUrl;
