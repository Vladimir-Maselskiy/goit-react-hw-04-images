import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export default function Button(props) {
  return (
    <ButtonStyled onClick={props.onLoadMoreButtonClick}>Load more</ButtonStyled>
  );
}

Button.propTypes = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};
