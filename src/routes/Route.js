import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { user } = useAuth();

  if (!!user === false && isPrivate) {
    return <Redirect to="/" />;
  }

  if (!!user && !isPrivate) {
    return <Redirect to="/list" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func.isRequired])
    .isRequired,
  isPrivate: PropTypes.bool,
};
