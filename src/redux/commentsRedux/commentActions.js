import { createAction } from '@reduxjs/toolkit';

const addCommentRequest = createAction('comments/addCommentRequest');
const addCommentSuccess = createAction('comments/addCommentSuccess');
const addCommentError = createAction('comments/addCommentError');

const commentActions = {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
};

export default commentActions;
