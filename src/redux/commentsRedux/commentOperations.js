import axios from 'axios';
import commentActions from 'redux/commentsRedux/commentActions';

// axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';
const pathComments = '/comments';

const fetchComments = () => dispatch => {
  dispatch(commentActions.fetchCommentsRequest());
  axios
    .get(pathComments)
    .then(({ data }) => dispatch(commentActions.fetchCommentsSuccess(data)))
    .catch(error => dispatch(commentActions.fetchCommentsError(error)));
};

const commentOperations = {
  fetchComments,
};

export default commentOperations;
