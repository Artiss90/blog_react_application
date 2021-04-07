import { useDispatch, useSelector } from 'react-redux';
import postSelectors from 'redux/postRedux/postSelectors';
import style from './PostsLists.module.css';
import PostsItems from './PostItem/PostItem';
import { useEffect } from 'react';
import postOperations from 'redux/postRedux/postOperations';

const PostsLists = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.getPostsItems);

  useEffect(() => {
    const fetchPosts = () => dispatch(postOperations.fetchPosts());
    fetchPosts();
  }, [dispatch, posts]);
  return (
    <>
      <ul className={style.list}>
        {posts &&
          posts.map(post => (
            <li key={post.id} className={style.item}>
              <PostsItems id={post.id} title={post.title} body={post.body} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default PostsLists;
