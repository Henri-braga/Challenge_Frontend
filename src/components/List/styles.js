import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0009;
  width: 80%;
  height: auto;
  max-height: 800px;
  border-radius: 7px;
  padding: 20px 30px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  .header-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    button {
      max-width: 80px;
      border: none;
      border-radius: 2px;
      padding: 10px 20px;
      color: #fff;
      background: #8e0f0f;
      margin-right: 5px;
    }
  }

  li {
    border-bottom: 1px solid #585252;
  }

  @media (max-width: 450px) {
    width: 90%;
    max-height: 80vh;
  }
`;
