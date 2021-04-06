import Button from 'Components/Common/Button/Button';
import { AiFillMessage } from 'react-icons/ai';

const SpecificPostView = () => {
  const onClickAddComment = () => {
    console.log('add comment');
  };
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
        recusandae!
      </p>
      <Button onClick={onClickAddComment}>
        Add comment <AiFillMessage />
      </Button>
    </div>
  );
};

export default SpecificPostView;
