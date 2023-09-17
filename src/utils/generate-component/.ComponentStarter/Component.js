import PropTypes from 'prop-types';
import { Container } from './Component.styled';

const Component = ({ propName }) => {
  return <Container></Container>;
};

Component.propTypes = {
  /**
   * Comment
   */
  propName: PropTypes.string,
};

export default Component;
