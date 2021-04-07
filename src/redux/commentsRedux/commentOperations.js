import axios from 'axios';
import commentActions from 'redux/commentsRedux/commentActions';

// axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';
const pathComments = '/comments';

const addComment = value => dispatch => {
  const comment = {
    postId: value.postId,
    body: value.body,
  };

  dispatch(commentActions.addCommentRequest());
  axios
    .post(pathComments, comment)
    .then(({ data }) => dispatch(commentActions.addCommentSuccess(data)))
    .catch(error => dispatch(commentActions.addCommentError(error)));
};

const commentOperations = {
  addComment,
};

export default commentOperations;
