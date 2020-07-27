import React, { useState, useEffect, useCallback } from 'react';
import Proptypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

import ListItem from './ListItem';

const List = ({ data, buttonTextCreate, handleClick }) => {
  const [dragons, setDragons] = useState([]);

  const handleDelete = useCallback(
    async id => {
      await api.delete(`/${id}`);
      setDragons(dragons.filter(dragon => dragon.id !== id));
    },
    [dragons],
  );

  useEffect(() => {
    setDragons(data);
  }, [data]);

  return (
    <Container>
      <div className="header-list">
        <h2>Lista de Dragões</h2>
        <button type="button" onClick={handleClick}>
          {buttonTextCreate}
        </button>
      </div>
      <ul>
        {dragons.map(dragon => (
          <ListItem
            key={dragon.id}
            item={dragon}
            handleDelete={handleDelete}
            url={`/detail/${dragon.id}`}
          />
        ))}
      </ul>
    </Container>
  );
};

List.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object),
  buttonTextCreate: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
};

export default List;
