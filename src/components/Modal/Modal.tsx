import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, Content, Wrapper } from './Modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }: any) => {
  const navigate = useNavigate();
  const handleClose = (event: any) => {
    event.stopPropagation();
    navigate('../');
  };

  return createPortal(
    <Wrapper onClick={handleClose}>
      <Content onClick={(event) => event.stopPropagation()}>
        <CloseIcon onClick={handleClose}>&times;</CloseIcon>
        {children}
      </Content>
    </Wrapper>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
