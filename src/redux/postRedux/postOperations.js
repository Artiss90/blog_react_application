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

const addPost = text => dispatch => {
  const post = {
    title: text.title,
    body: text.body,
  };

  dispatch(postActions.addPostRequest());
  axios
    .post(pathPosts, post)
    .then(({ data }) => dispatch(postActions.addPostSuccess(data)))
    .catch(error => dispatch(postActions.addPostError(error)));
};

const postOperations = {
  fetchPosts,
  fetchCurrentPost,
  addPost,
};

export default postOperations;
