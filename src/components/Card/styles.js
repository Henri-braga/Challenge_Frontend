import styled from 'styled-components';

import Layout from '../../assets/layout.png';

export const Container = styled.form`
  width: 350px;
  height: 450px;
  background: url(${Layout}) no-repeat;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: scale(1.5);
  box-shadow: 10px 10px 15px #000;

  input {
    font-family: 'Charm', cursive !important;
  }

  .nameDragon {
    position: relative;
    top: -20px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-align: center;
    background: transparent;
    border: none;
  }

  .typeDragon {
    position: relative;
    top: 15px;
    color: #8e0f0f;
    font-size: 20px;
    font-weight: 600;
    left: 40px;
    background: transparent;
    border: none;
  }

  .dateDragon {
    position: relative;
    top: 15px;
    color: #8e0f0f;
    font-size: 20px;
    font-weight: 600;
    left: 40px;
  }

  .button-group {
    position: relative;
    top: 70px;
    width: 200px;
    margin: 0px auto;

    display: flex;
    justify-content: center;

    button {
      max-width: 130px;
      border: none;
      border-radius: 2px;
      padding: 10px 20px;

      display: flex;
      justify-content: space-between;
    }

    .edit {
      color: #fff;
      background: #8e0f0f;
      margin-right: 5px;
    }
  }

  @media (max-width: 450px) {
    transform: scale(1);
  }
`;
