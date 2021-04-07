import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postActions from 'redux/postRedux/postActions';

const itemsRedux = createReducer([], {
  [postActions.fetchPostsSuccess]: (_, { payload }) => payload,
});

const currentItemRedux = createReducer([], {
  [postActions.fetchCurrentPostsSuccess]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [postActions.fetchPostsRequest]: () => true,
  [postActions.fetchPostsSuccess]: () => false,
  [postActions.fetchPostsError]: () => false,
  [postActions.fetchCurrentPostsRequest]: () => true,
  [postActions.fetchCurrentPostsSuccess]: () => false,
  [postActions.fetchCurrentPostsError]: () => false,
});

const errorRedux = createReducer(null, {
  [postActions.fetchPostsError]: (_, { payload }) => payload.message,
  [postActions.fetchCurrentPostsError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  items: itemsRedux,
  currentItem: currentItemRedux,
  loading: loadingRedux,
  error: errorRedux,
});
