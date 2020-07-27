import styled from 'styled-components';

import icButton from '../../assets/ic_button.png';

export const Container = styled.header`
  height: 80px;
  background-color: #02310e;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-header {
    display: flex;
    align-items: center;

    .rollback {
      width: 120px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .signOut {
    background: url(${icButton}) no-repeat;
    background-size: contain;
    width: 200px;
    height: 70px;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 450px) {
    font-size: 22px;

    .signOut {
      width: 126px;
      height: 46px;
      background-position-x: -5px;
    }

    .logo-header .rollback {
      width: 84px;
    }
  }
`;
