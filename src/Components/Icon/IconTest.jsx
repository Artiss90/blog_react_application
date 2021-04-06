import { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
class Question extends Component {
  render() {
    return (
      <h3>
        {' '}
        Lets go for a <FaBeer />?{' '}
      </h3>
    );
  }
}
export default Question;
