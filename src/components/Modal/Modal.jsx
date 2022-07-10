import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    console.log('onKeyDown');
    if (event.key === 'Escape') {
      this.isModalOpen(false);
    }
  };

  onClick = event => {
    if (event.target === event.currentTarget) {
      this.props.isModalOpen(false);
    }
  };

  render() {
    // const { src, alt } = this.props;
    return (
      <Overlay onClick={this.onClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  isModalOpen: PropTypes.func.isRequired,
};
