import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background: #0009;
  padding: 30px;
  border-radius: 7px;

  .form-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    p {
      font-size: 30px;
    }

    button {
      color: red;
      background: transparent;
      border: none;
    }
  }

  @media (max-width: 450px) {
    width: 350px;
  }
`;
