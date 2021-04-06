import Button from 'Components/Common/Button/Button';
import PostsLists from 'Components/PostsList/PostsLists';
import { useCallback, useEffect } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';

const AllPostView = () => {
  const dispatch = useDispatch();

  const fetchPosts = useCallback(() => dispatch(postOperations.fetchPosts()), [
    dispatch,
  ]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  const onClickAddPost = () => {
    console.log('add post');
  };
  return (
    <div>
      <Button onClick={onClickAddPost}>
        Add post <AiFillFileAdd />
      </Button>
      <PostsLists />
    </div>
  );
};

export default AllPostView;
