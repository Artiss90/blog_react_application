import { useState } from 'react';
import { useDispatch } from 'react-redux';
import postOperations from 'redux/postRedux/postOperations';
import { v4 as uuidv4 } from 'uuid';
import style from './CreatePostForm.module.css';

const CreatePostForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onSubmitForm = value => dispatch(postOperations.addPost(value));

  const postId = uuidv4();

  const handleSubmit = e => {
    e.preventDefault();

    onSubmitForm({
      id: postId,
      title: title,
      body: body,
    });
    toggleModal();
  };

  const handleChangeTitle = e => {
    setTitle(e.currentTarget.value);
  };
  const handleChangeBody = e => {
    setBody(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <label className={style.item}>
        Title
        <input
          className={style.input}
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <label className={style.item}>
        Description
        <textarea
          className={style.input}
          type="text"
          name="body"
          cols="50"
          rows="10"
          value={body}
          onChange={handleChangeBody}
        />
      </label>
      <button type="submit">Create post</button>
    </form>
  );
};

export default CreatePostForm;
