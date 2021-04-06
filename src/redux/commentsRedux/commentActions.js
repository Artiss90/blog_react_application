import { createAction } from '@reduxjs/toolkit';

const fetchCommentsRequest = createAction('comments/fetchCommentsRequest');
const fetchCommentsSuccess = createAction('comments/fetchCommentsSuccess');
const fetchCommentsError = createAction('comments/fetchCommentsError');

const commentActions = {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsError,
};

export default commentActions;
