import { createAction } from '@reduxjs/toolkit';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
const fetchPostsError = createAction('posts/fetchPostsError');

const fetchCurrentPostsRequest = createAction('posts/fetchCurrentPostsRequest');
const fetchCurrentPostsSuccess = createAction('posts/fetchCurrentPostsSuccess');
const fetchCurrentPostsError = createAction('posts/fetchCurrentPostsError');

const postActions = {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  fetchCurrentPostsRequest,
  fetchCurrentPostsSuccess,
  fetchCurrentPostsError,
};

export default postActions;
