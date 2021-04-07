import { useState } from 'react';
import { useDispatch } from 'react-redux';
import commentOperations from 'redux/commentsRedux/commentOperations';
import style from './CommentsForm.module.css';

function CommentsForm({ id, toggleModal }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const onSubmitForm = value => dispatch(commentOperations.addComment(value));

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const dateComment = `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}  ${String(date.getDay()).padStart(2, '0')}:${String(
      date.getMonth(),
    ).padStart(2, '0')}:${String(date.getFullYear()).padStart(2, '0')}`;
    onSubmitForm({
      postId: id,
      body: `${comment} ${'\ndate post comment: '}${dateComment}`,
    });
    toggleModal();
  };

  const handleChange = e => {
    setComment(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <label className={style.item}>
        Enter your comments
        <textarea
          name="comment"
          id={id}
          cols="50"
          rows="10"
          onChange={handleChange}
          value={comment}
          className={style.input}
        ></textarea>
      </label>
      <button type="submit">Add comment</button>
    </form>
  );
}

export default CommentsForm;
