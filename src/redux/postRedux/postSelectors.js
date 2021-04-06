// import { createSelector } from 'reselect';

const getPostsItems = state => state.posts.items;

const postSelectors = {
  getPostsItems,
};

export default postSelectors;
