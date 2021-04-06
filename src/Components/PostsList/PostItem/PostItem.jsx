import { Link, withRouter } from 'react-router-dom';

const PostItem = ({ title, body, id }) => {
  <>
    <Link
      to={{
        pathname: `/posts/${id}`,
      }}
    >
      {title}
    </Link>
    <p>{body}</p>
  </>;
};

export default withRouter(PostItem);
