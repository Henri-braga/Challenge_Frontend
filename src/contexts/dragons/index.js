import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { alphabeticalOrder } from '../../helpers/alphabeticalOrder';

const DragonsContext = createContext({});

export const DragonsProvider = ({ children }) => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    async function getAllDragons() {
      const response = await api.get('/');

      const allDragons = alphabeticalOrder(response.data);

      setDragons(allDragons);
    }

    getAllDragons();
  }, []);

  return (
    <DragonsContext.Provider
      value={{
        dragons,
        setDragons,
      }}
    >
      {children}
    </DragonsContext.Provider>
  );
};

export const useDragons = () => {
  const context = useContext(DragonsContext);

  if (!context)
    throw new Error('useDragons must be used within a DragonsContext.');

  const { dragons, setDragons } = context;

  return {
    dragons,
    setDragons,
  };
};

DragonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
