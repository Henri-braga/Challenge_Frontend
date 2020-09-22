import React, { useState } from 'react';
import { GiDragonHead, GiOpenBook } from 'react-icons/gi';

import { useDragons } from '../../contexts/dragons';

import api from '../../services/api';

import { Container } from './styles';

import Header from '../../components/Header';
import List from '../../components/List';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

const DragonsList = () => {
  const { dragons } = useDragons();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const newDragon = await api.post('/', {
      name,
      type,
    });
  };

  return (
    <Container>
      <Header title="South Dragons" buttonName="Sair" />
      <div className="content">
        {showModal ? (
          <Modal handleActive={() => setShowModal(!showModal)}>
            <form onSubmit={handleSubmit} className="form-modal">
              <Input
                name="text"
                type="name"
                className="input"
                icon={GiDragonHead}
                placeholder="Nome"
                onChange={e => setName(e.target.value)}
                value={name}
              />
              <Input
                name="type"
                type="text"
                className="input"
                icon={GiOpenBook}
                placeholder="Tipo"
                onChange={e => setType(e.target.value)}
                value={type}
              />
              <Button
                className="btnCreate"
                type="submit"
                children="Criar seu Dragão"
              />
            </form>
          </Modal>
        ) : (
          <List
            data={dragons}
            buttonTextCreate="Novo"
            handleClick={() => setShowModal(!showModal)}
          />
        )}
      </div>
    </Container>
  );
};

export default DragonsList;
