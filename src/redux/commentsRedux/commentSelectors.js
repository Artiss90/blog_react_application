// import { createSelector } from 'reselect';

const getCommentsItems = state => state.comments.items;

const commentSelectors = {
  getCommentsItems,
};

export default commentSelectors;
