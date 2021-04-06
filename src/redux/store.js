import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import postReducers from 'redux/postRedux/postReducers';
import commentReducers from 'redux/commentsRedux/commentReducers';
import {
  //   persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

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

// const persiststore = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persiststore };

export default store;
