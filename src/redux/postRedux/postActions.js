import { createAction } from '@reduxjs/toolkit';

const fetchPostsRequest = createAction('posts/fetchPostsRequest');
const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
const fetchPostsError = createAction('posts/fetchPostsError');

const fetchCurrentPostsRequest = createAction('posts/fetchCurrentPostsRequest');
const fetchCurrentPostsSuccess = createAction('posts/fetchCurrentPostsSuccess');
const fetchCurrentPostsError = createAction('posts/fetchCurrentPostsError');

const addPostRequest = createAction('posts/addPostRequest');
const addPostSuccess = createAction('posts/addPostSuccess');
const addPostError = createAction('posts/addPostError');

const deletePostRequest = createAction('posts/deletePostRequest');
const deletePostSuccess = createAction('posts/deletePostSuccess');
const deletePostError = createAction('posts/deletePostError');

const postActions = {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  fetchCurrentPostsRequest,
  fetchCurrentPostsSuccess,
  fetchCurrentPostsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
};

export default postActions;
