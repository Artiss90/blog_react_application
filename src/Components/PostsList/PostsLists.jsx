import { useSelector } from 'react-redux';
import postSelectors from 'redux/postRedux/postSelectors';
import style from './PostsLists.module.css';
import PostsItems from './PostItem/PostItem';

const PostsLists = () => {
  const posts = useSelector(postSelectors.getPostsItems);

  return (
    <ul className={style.list}>
      {posts &&
        posts.map(post => (
          <li key={post.id} className={style.item}>
            <PostsItems id={post.id} title={post.title} body={post.body} />
            {/* <p>{post.title}</p>
          <p>{post.body}</p> */}
          </li>
        ))}
    </ul>
  );
};

export default PostsLists;
