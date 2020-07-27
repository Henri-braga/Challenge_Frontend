import styled from 'styled-components';

import bgList from '../../assets/bg_list.jpg';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${bgList}) no-repeat;
  background-size: cover;
  color: #fff;

  .content {
    margin-top: 30px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .input {
    height: 60px;
    margin-bottom: 10px;
  }

  .btnCreate {
    height: 60px;
    background: #8e0f0f;
    margin-top: 40px;
  }
`;
