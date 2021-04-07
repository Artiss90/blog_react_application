import CommentsForm from 'Components/CommentsForm/CommentsForm';
import CommentsList from 'Components/CommentsList/CommentsList';
import Button from 'Components/Common/Button/Button';
import Modal from 'Components/Common/Modal/Modal';
import { useEffect, useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';
import postSelectors from 'redux/postRedux/postSelectors';
import styleLoader from 'Components/Common/Loader/Loader.module.css';

const SpecificPostView = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const [openModalCreateComment, setOpenModalCreateComment] = useState(false);
  const isLoadingPosts = useSelector(postSelectors.getContactsLoading);
  const post = useSelector(postSelectors.getCurrentPostItems);

  const toggleModalCreateComment = () => {
    setOpenModalCreateComment(!openModalCreateComment);
  };

  useEffect(() => {
    const fetchCurrentPost = id =>
      dispatch(postOperations.fetchCurrentPost(id));

    if (id === ':id') {
      console.log('invalid post id');
      return;
    }
    fetchCurrentPost(id);
  }, [dispatch, id]);

  return (
    <div>
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
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Button onClick={toggleModalCreateComment}>
            Add comment <AiFillMessage />
          </Button>
          {post.comments && <CommentsList comments={post.comments} />}
        </>
      )}

      {openModalCreateComment && (
        <Modal toggleModal={toggleModalCreateComment}>
          <CommentsForm toggleModal={toggleModalCreateComment} id={id} />
        </Modal>
      )}
    </div>
  );
};

export default SpecificPostView;
