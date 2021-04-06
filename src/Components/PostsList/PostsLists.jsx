import { useSelector } from 'react-redux';
import postSelectors from 'redux/postRedux/postSelectors';
import style from './PostsLists.module.css';

const PostsLists = () => {
  const posts = useSelector(postSelectors.getPostsItems);

  return (
    <ul className={style.list}>
      {posts.map(post => (
        <li key={post.id} className={style.item}>
          <PostsLists id={post.id} title={post.title} body={post.body} />
        </li>
      ))}
    </ul>
  );
};

export default PostsLists;
