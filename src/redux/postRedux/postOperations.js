import axios from 'axios';
import postActions from 'redux/postRedux/postActions';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';
const pathPosts = '/posts';

const fetchPosts = () => dispatch => {
  dispatch(postActions.fetchPostsRequest());
  axios
    .get(pathPosts)
    .then(({ data }) => dispatch(postActions.fetchPostsSuccess(data)))
    .catch(error => dispatch(postActions.fetchPostsError(error)));
};

const postOperations = {
  fetchPosts,
};

export default postOperations;
