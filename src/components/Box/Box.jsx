import PropTypes from 'prop-types';
import { StyledBox } from './Box.styled';

export default function Box({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
