import { useState } from 'react';
import style from './CommentsForm.module.css';

function CommentsForm({ onSubmitForm, id, toggleModal }) {
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const dateComment = `${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes(),
    ).padStart(2, '0')}  ${String(date.getDay()).padStart(2, '0')}:${String(
      date.getMonth(),
    ).padStart(2, '0')}:${String(date.getFullYear()).padStart(2, '0')}`;
    onSubmitForm({
      comments: [
        {
          id: id,
          description: comment,
          date: dateComment,
        },
      ],
    });
    resetTextarea();
    toggleModal();
  };

  const handleChange = e => {
    setComment(e.currentTarget.value);
  };

  const resetTextarea = () => {
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id={id}
        cols="50"
        rows="10"
        onChange={handleChange}
        value={comment}
        className={style.container}
      ></textarea>
      <button type="submit">Add comment</button>
    </form>
  );
}

export default CommentsForm;
