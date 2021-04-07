import CommentItem from './CommentItem/CommentItem';
import style from './CommentsList.module.css';

const CommentsList = ({ comments }) => {
  return (
    <ul className={style.list}>
      {comments.map(item => (
        <li key={item.id} className={style.item}>
          <CommentItem body={item.body} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
