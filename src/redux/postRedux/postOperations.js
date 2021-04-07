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

const fetchCurrentPost = id => dispatch => {
  dispatch(postActions.fetchCurrentPostsRequest());
  axios
    .get(`${pathPosts}/${id}?_embed=comments`)
    .then(({ data }) => dispatch(postActions.fetchCurrentPostsSuccess(data)))
    .catch(error => dispatch(postActions.fetchCurrentPostsError(error)));
};

const postOperations = {
  fetchPosts,
  fetchCurrentPost,
};

export default postOperations;
