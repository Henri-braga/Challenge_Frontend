import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;

  div {
    display: flex;
    align-items: center;

    > svg {
      font-size: 40px;
      margin-right: 10px;
    }

    p {
      font-size: 30px;
    }

    .name {
      margin-right: 10px;
    }

    button {
      background-color: transparent;
      border: none;
    }

    .removeDragon {
      position: relative;
      top: -6px;
      margin-left: 20px;
    }
  }

  @media (max-width: 450px) {
    .icons-group {
      width: 50px;
    }

    .icon-name {
      display: none;
    }

    .icon-edit {
      font-size: 20px;
    }

    .icon-remove {
      font-size: 30px;
    }

    div > .removeDragon {
      margin-left: 5px;
    }
  }
`;
