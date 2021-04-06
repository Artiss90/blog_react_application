import { createAction } from '@reduxjs/toolkit';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
const fetchPostsError = createAction('posts/fetchPostsError');

const postActions = {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
};

export default postActions;
