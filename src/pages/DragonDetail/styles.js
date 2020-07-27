import styled from 'styled-components';

import bgDetial from '../../assets/bg_detail.jpg';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  background: url(${bgDetial});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: none;
`;
