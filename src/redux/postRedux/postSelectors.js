// import { createSelector } from 'reselect';

const getPostsItems = state => state.posts.items;
const getCurrentPostItems = state => state.posts.currentItem;

const postSelectors = {
  getPostsItems,
  getCurrentPostItems,
};

export default postSelectors;
