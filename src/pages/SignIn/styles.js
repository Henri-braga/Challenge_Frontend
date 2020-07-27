import styled from 'styled-components';

import bgSignIn from '../../assets/bg_signIn.jpg';
import icButton from '../../assets/ic_button.png';

export const Container = styled.section`
  height: 100vh;
  background: url(${bgSignIn});

  display: flex;
  justify-content: center;
  align-items: center;

  .boxOpacity-signIn {
    max-width: 80%;
    height: 90%;
    background: #0009;
    padding: 25px 60px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .title-signIn {
    color: #fff;
    margin-top: 30px;
    margin-bottom: 120px;

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 90px;
    }

    h2 {
      font-size: 60px;
    }
  }

  .form-signIn {
    width: 100%;

    .input {
      height: 80px;
      margin-bottom: 15px;
    }

    .buttonLogin {
      height: 140px;
      background: url(${icButton}) no-repeat;
      background-size: contain;
    }
  }

  .footer-signIn {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;

    .icon-signIn {
      position: absolute;
      bottom: 15px;
      left: 15px;
      font-size: 50px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 450px) {
    .boxOpacity-signIn {
      max-width: 80%;
      height: 70%;
      padding: 25px 35px;
    }

    .title-signIn {
      margin-bottom: 50px;
      margin-top: 0px;
      h1 {
        font-size: 50px;
      }

      h2 {
        font-size: 30px;
      }
    }

    .form-signIn {
      .input {
        height: 70px;
      }

      .buttonLogin {
        height: 74px;
        background-position-x: 22px;
      }
    }
  }
`;
