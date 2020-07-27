import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ type, className, onClick, children }) => {
  return (
    <Container type={type} className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
