import { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';

class Question extends Component {
  render() {
    return (
      <>
        <h3>
          {' '}
          Lets go for a <FaBeer />?{' '}
        </h3>
        <h3>
          {' '}
          Lets go for a <FcAbout />?{' '}
        </h3>
        <button>
          <FcAbout />
        </button>
      </>
    );
  }
}
export default Question;
