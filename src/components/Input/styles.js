import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 7px;

  display: flex;
  align-items: center;

  input {
    color: #fff;
    width: 100%;
    background: transparent;
    border: 1px solid transparent;

    &::placeholder {
      color: #d7d7d7;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
