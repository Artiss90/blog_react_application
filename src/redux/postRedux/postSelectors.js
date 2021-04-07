// import { createSelector } from 'reselect';

const getPostsItems = state => state.posts.items;
const getCurrentPostItems = state => state.posts.currentItem;
const getContactsLoading = state => state.posts.loading;

const postSelectors = {
  getPostsItems,
  getCurrentPostItems,
  getContactsLoading,
};

export default postSelectors;
