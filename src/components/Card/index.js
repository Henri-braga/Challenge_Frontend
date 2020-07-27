import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import api from '../../services/api';

import { Container } from './styles';

const Card = ({ dragon, updateCard }) => {
  const numberDate = Date.parse(dragon.createdAt);
  const formatedDate = format(numberDate, 'dd-MM-yyyy');

  const [dragonName, setName] = useState(dragon.name);
  const [dragonType, setType] = useState(dragon.type);

  const handleSubmit = async e => {
    e.preventDefault();

    const updateDragon = await api.put(`/${dragon.id}`, {
      name: dragonName,
      type: dragonType,
    });

    if (updateDragon.request.status === 200) {
      window.location.reload();
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        name="name"
        value={dragonName}
        className="nameDragon"
        onChange={e => setName(e.target.value)}
      />

      <input
        name="type"
        value={dragonType}
        className="typeDragon"
        onChange={e => setType(e.target.value)}
      />

      <p className="dateDragon">Criado em: {formatedDate}</p>
      <div className="button-group">
        <button type="submit" className="edit" onClick={updateCard}>
          Atualizar
        </button>
      </div>
    </Container>
  );
};

Card.propTypes = {
  dragon: PropTypes.objectOf(PropTypes.string),
  updateCard: PropTypes.func.isRequired,
};

export default Card;
