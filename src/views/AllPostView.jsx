import Button from 'Components/Common/Button/Button';
import Modal from 'Components/Common/Modal/Modal';
import CreatePostForm from 'Components/CreatePostForm/CreatePostForm';
import PostsLists from 'Components/PostsList/PostsLists';
import { useEffect, useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';
import postSelectors from 'redux/postRedux/postSelectors';
import styleLoader from 'Components/Common/Loader/Loader.module.css';
import style from './AllPostView.module.css';

const AllPostView = () => {
  const dispatch = useDispatch();
  const [openModalCreatePost, setOpenModalCreatePost] = useState(false);
  const isLoadingPosts = useSelector(postSelectors.getContactsLoading);
  const toggleModalCreatePost = () => {
    setOpenModalCreatePost(!openModalCreatePost);
  };

  useEffect(() => {
    const fetchPosts = () => dispatch(postOperations.fetchPosts());
    fetchPosts();
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Button onClick={toggleModalCreatePost}>
        Add post <AiFillFileAdd />
      </Button>
      {isLoadingPosts ? (
        <Loader
          className={styleLoader.loader}
          type="Oval"
          color="#1976d2"
          height={300}
          width={300}
          timeout={0} //3 secs
        />
      ) : (
        <PostsLists />
      )}

      {openModalCreatePost && (
        <Modal toggleModal={toggleModalCreatePost}>
          <CreatePostForm toggleModal={toggleModalCreatePost} />
        </Modal>
      )}
    </div>
  );
};

export default AllPostView;
