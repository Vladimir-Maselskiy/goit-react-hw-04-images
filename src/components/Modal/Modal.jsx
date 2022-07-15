import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';
import { useEffect } from 'react';

export default function Modal({ setIsModalOpen, children }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const onClick = event => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <Overlay onClick={onClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>
  );
}

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
