import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';

import { Container } from './styles';

const Modal = ({ children, handleActive }) => {
  return (
    <Container>
      <div className="form-header">
        <p>Novo Dragão</p>
        <button onClick={handleActive}>
          <IoMdCloseCircle size={30} />
        </button>
      </div>
      {children}
    </Container>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleActive: PropTypes.func.isRequired,
};

export default Modal;
