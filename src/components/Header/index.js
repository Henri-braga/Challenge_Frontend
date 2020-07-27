import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GiSpikedDragonHead } from 'react-icons/gi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

import { Container } from './styles';

import { useAuth } from '../../contexts/auth';

const Header = ({ title, buttonName, buttonRollback }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <div className="logo-header">
        <p>
          {buttonRollback ? (
            <Link to="/list" className="rollback">
              <IoIosArrowDropleftCircle /> Voltar
            </Link>
          ) : (
            <>
              <GiSpikedDragonHead size={40} /> {title}
            </>
          )}
        </p>
      </div>
      <button className="signOut" onClick={() => signOut()}>
        {buttonName}
      </button>
    </Container>
  );
};

Header.defaultProps = {
  title: '',
  buttonRollback: false,
};

Header.propTypes = {
  title: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  buttonRollback: PropTypes.bool,
};

export default Header;
