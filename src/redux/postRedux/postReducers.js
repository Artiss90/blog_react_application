import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postActions from 'redux/postRedux/postActions';

const itemsRedux = createReducer([], {
  [postActions.fetchPostsSuccess]: (_, { payload }) => payload,
  [postActions.addPostSuccess]: (_, { payload }) => [..._, payload],
  [postActions.deletePostSuccess]: (_, { payload }) =>
    _.filter(post => post.id !== payload),
  [postActions.changePostSuccess]: (_, { payload }) => _,
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
  [postActions.addPostRequest]: () => true,
  [postActions.addPostSuccess]: () => false,
  [postActions.addPostError]: () => false,
  [postActions.deletePostRequest]: () => true,
  [postActions.deletePostSuccess]: () => false,
  [postActions.deletePostError]: () => false,
  [postActions.changePostRequest]: () => true,
  [postActions.changePostSuccess]: () => false,
  [postActions.changePostError]: () => false,
});

const errorRedux = createReducer(null, {
  [postActions.fetchPostsError]: (_, { payload }) => payload.message,
  [postActions.fetchCurrentPostsError]: (_, { payload }) => payload.message,
  [postActions.addPostError]: (_, { payload }) => payload.message,
  [postActions.deletePostError]: (_, { payload }) => payload.message,
  [postActions.changePostError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  items: itemsRedux,
  currentItem: currentItemRedux,
  loading: loadingRedux,
  error: errorRedux,
});
