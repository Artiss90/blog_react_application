import Button from 'Components/Common/Button/Button';
import { Link, withRouter } from 'react-router-dom';

const PostItem = ({ title, body, id }) => {
  return (
    <>
      <Button>Edit post</Button>
      <Link
        to={{
          pathname: `/posts/${id}`,
        }}
      >
        {title}
      </Link>
      <p>{body}</p>
      <Button>Delete post</Button>
    </>
  );
};

export default withRouter(PostItem);
