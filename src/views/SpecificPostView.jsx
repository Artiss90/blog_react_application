import CommentsList from 'Components/CommentsList/CommentsList';
import Button from 'Components/Common/Button/Button';
import { useEffect } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';
import postSelectors from 'redux/postRedux/postSelectors';

const SpecificPostView = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentPost = () =>
      dispatch(postOperations.fetchCurrentPost(id));

    if (id === ':id') {
      console.log('invalid post id');
      return;
    }
    fetchCurrentPost(id);
  }, [dispatch, id]);

  const post = useSelector(postSelectors.getCurrentPostItems);
  const onClickAddComment = () => {
    console.log(`add comment${id}`);
  };
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Button onClick={onClickAddComment}>
        Add comment <AiFillMessage />
      </Button>
      {post.comments && <CommentsList comments={post.comments} />}
    </div>
  );
};

export default SpecificPostView;
