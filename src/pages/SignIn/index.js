import React, { useState, useCallback } from 'react';
import { FaDragon } from 'react-icons/fa';
import { GiBrutalHelm, GiBossKey } from 'react-icons/gi';

import { Container } from './styles';

import { useAuth } from '../../contexts/auth';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Sign = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      signIn(email, password);
    },
    [email, password, signIn],
  );

  return (
    <Container>
      <div className="boxOpacity-signIn">
        <div className="title-signIn">
          <h1>Welcome</h1>
          <h2>the South Dragons</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-signIn">
          <Input
            name="email"
            type="email"
            className="input"
            icon={GiBrutalHelm}
            placeholder="Digite seu email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <Input
            name="password"
            type="password"
            className="input"
            icon={GiBossKey}
            placeholder="Digite sua senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Button className="buttonLogin" type="submit" children="Entrar" />
        </form>
        <span className="footer-signIn">
          <FaDragon className="icon-signIn" color="#fff" />
          by Henrique Leão
        </span>
      </div>
    </Container>
  );
};

export default Sign;
