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

const addPost = value => dispatch => {
  const post = {
    title: value.title,
    body: value.body,
    id: value.id,
  };

  dispatch(postActions.addPostRequest());
  axios
    .post(pathPosts, post)
    .then(({ data }) => dispatch(postActions.addPostSuccess(data)))
    .catch(error => dispatch(postActions.addPostError(error)));
};

const deletePost = id => dispatch => {
  dispatch(postActions.deletePostRequest());
  axios
    .delete(`${pathPosts}/${id}`)
    .then(() => dispatch(postActions.deletePostSuccess(id)))
    .catch(error => dispatch(postActions.deletePostError(error)));
};

const changePost = (value, id) => dispatch => {
  const post = {
    title: value.title,
    body: value.body,
  };
  dispatch(postActions.changePostRequest());
  axios
    .put(`${pathPosts}/${id}`, post)
    .then(() => dispatch(postActions.changePostSuccess(id)))
    .catch(error => dispatch(postActions.changePostError(error)));
};

const postOperations = {
  fetchPosts,
  fetchCurrentPost,
  addPost,
  deletePost,
  changePost,
};

export default postOperations;
