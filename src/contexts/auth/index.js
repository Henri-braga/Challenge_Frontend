import React, { createContext, useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { authSingIn } from '../../mocks/http/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@SouthDragons:token');
    const user = localStorage.getItem('@SouthDragons:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = async (email, password) => {
    const response = await authSingIn(email, password);

    const { token, user } = response.data;

    if (!response.data.error) {
      localStorage.setItem('@SouthDragons:token', token);
      localStorage.setItem('@SouthDragons:user', JSON.stringify(user));

      setData({ token, user });
    }

    return response.data;
  };

  const signOut = useCallback(() => {
    localStorage.removeItem('@SouthDragons:token');
    localStorage.removeItem('@SouthDragons:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within an AuthProvider.');
  }

  const { user, token, signIn, signOut } = context;

  return {
    user,
    token,
    signIn,
    signOut,
  };
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
