import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({
  icon: Icon,
  type,
  placeholder,
  className,
  onChange,
  value,
}) => {
  const inputRef = useRef(null);
  return (
    <Container className={className}>
      {Icon && <Icon size={22} />}
      <input
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

Input.defaultProps = {
  icon: '',
  type: 'text',
  placeholder: '',
  className: '',
  onChange: () => {},
};

Input.propTypes = {
  icon: PropTypes.elementType,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Input;
