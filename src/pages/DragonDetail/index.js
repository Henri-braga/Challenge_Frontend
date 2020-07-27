import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import Card from '../../components/Card';
import Header from '../../components/Header';

const DragonDetail = () => {
  let { id } = useParams();
  const [dragon, setDragon] = useState([]);

  useEffect(() => {
    async function getDragon() {
      const result = await api.get(`/${id}`);
      setDragon(result.data);
    }

    getDragon();
  }, [id]);

  return (
    <>
      <Header buttonName="Sair" buttonRollback />
      <Container>
        {dragon.createdAt && <Card dragon={dragon} updateCard={() => {}} />}
      </Container>
    </>
  );
};

export default DragonDetail;
