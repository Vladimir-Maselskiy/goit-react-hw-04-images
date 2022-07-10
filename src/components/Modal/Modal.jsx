import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';
import { useEffect } from 'react';

export default function Modal({ isModalOpen, children }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      isModalOpen(false);
    }
  }

  function onClick(event) {
    if (event.target === event.currentTarget) {
      isModalOpen(false);
    }
  }

  return (
    <Overlay onClick={onClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
