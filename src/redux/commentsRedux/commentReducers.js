import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import commentActions from 'redux/commentsRedux/commentActions';

const itemRedux = createReducer([], {
  [commentActions.fetchCommentsSuccess]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [commentActions.fetchCommentsRequest]: () => true,
  [commentActions.fetchCommentsSuccess]: () => false,
  [commentActions.fetchCommentsError]: () => false,
});

const errorRedux = createReducer(null, {
  [commentActions.fetchCommentsError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  items: itemRedux,
  loading: loadingRedux,
  error: errorRedux,
});
