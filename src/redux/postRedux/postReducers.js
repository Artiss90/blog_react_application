import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postActions from 'redux/postRedux/postActions';

const itemRedux = createReducer([], {
  [postActions.fetchPostsSuccess]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [postActions.fetchPostsRequest]: () => true,
  [postActions.fetchPostsSuccess]: () => false,
  [postActions.fetchPostsError]: () => false,
});

const errorRedux = createReducer(null, {
  [postActions.fetchPostsError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  items: itemRedux,
  loading: loadingRedux,
  error: errorRedux,
});
