import Button from 'Components/Common/Button/Button';
import Modal from 'Components/Common/Modal/Modal';
import ChangePostForm from 'Components/ChangePostForm/ChangePostForm';
import postOperations from 'redux/postRedux/postOperations';
import { GoGear, GoTrashcan } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';

const PostItem = ({ title, body, id }) => {
  const dispatch = useDispatch();
  const onDelete = valueId => dispatch(postOperations.deletePost(valueId));

  const [openModalChangePost, setOpenModalChangePost] = useState(false);
  const toggleModalChangePost = () => {
    setOpenModalChangePost(!openModalChangePost);
  };

  return (
    <>
      <Button onClick={() => toggleModalChangePost()}>
        Edit post <GoGear />
      </Button>
      <Link
        to={{
          pathname: `/posts/${id}`,
        }}
      >
        {title}
      </Link>
      <p>{body}</p>
      <Button onClick={() => onDelete(id)}>
        Delete post <GoTrashcan />
      </Button>

      {openModalChangePost && (
        <Modal toggleModal={toggleModalChangePost}>
          <ChangePostForm toggleModal={toggleModalChangePost} id={id} />
        </Modal>
      )}
    </>
  );
};

export default withRouter(PostItem);
