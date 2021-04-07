import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import commentActions from 'redux/commentsRedux/commentActions';

const itemRedux = createReducer([], {
  [commentActions.addCommentSuccess]: (_, { payload }) => payload,
});

const loadingRedux = createReducer(false, {
  [commentActions.addCommentRequest]: () => true,
  [commentActions.addCommentSuccess]: () => false,
  [commentActions.addCommentError]: () => false,
});

const errorRedux = createReducer(null, {
  [commentActions.addCommentError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  items: itemRedux,
  loading: loadingRedux,
  error: errorRedux,
});
