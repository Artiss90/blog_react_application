import Button from 'Components/Common/Button/Button';
import Modal from 'Components/Common/Modal/Modal';
import CreatePostForm from 'Components/CreatePostForm/CreatePostForm';
import PostsLists from 'Components/PostsList/PostsLists';
import { useEffect, useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';

const AllPostView = () => {
  const dispatch = useDispatch();
  const [openModalCreatePost, setOpenModalCreatePost] = useState(false);
  const toggleModalCreatePost = () => {
    setOpenModalCreatePost(!openModalCreatePost);
  };

  useEffect(() => {
    const fetchPosts = () => dispatch(postOperations.fetchPosts());

    fetchPosts();
  }, [dispatch]);

  return (
    <div>
      <Button onClick={toggleModalCreatePost}>
        Add post <AiFillFileAdd />
      </Button>
      <PostsLists />

      {openModalCreatePost && (
        <Modal toggleModal={toggleModalCreatePost}>
          <CreatePostForm toggleModal={toggleModalCreatePost} />
        </Modal>
      )}
    </div>
  );
};

export default AllPostView;
