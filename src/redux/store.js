import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import postReducers from 'redux/postRedux/postReducers';
import commentReducers from 'redux/commentsRedux/commentReducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    posts: postReducers,
    comments: commentReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: true,
});

export default store;
