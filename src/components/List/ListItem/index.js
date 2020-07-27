import React from 'react';
import { Link } from 'react-router-dom';
import { GiVelociraptor, GiTrashCan } from 'react-icons/gi';
import { BsPencilSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ListItem = ({ item, url, handleDelete }) => {
  return (
    <Container>
      <div>
        <GiVelociraptor className="icon-name" color="#fff" />
        <p className="name">Nome: {item.name}</p>
      </div>
      <div className="icons-group">
        <Link to={url}>
          <BsPencilSquare className="icon-edit" color="#fff" />
        </Link>
        <button onClick={() => handleDelete(item.id)} className="removeDragon">
          <GiTrashCan className="icon-remove" color="#fff" />
        </button>
      </div>
    </Container>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListItem;
