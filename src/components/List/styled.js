import styled from 'styled-components';

import {
  primaryColor,
  primaryDarkColor,
  primaryTextColor,
  primaryCardColor,
  backgroundColor,
} from '../../config/colors';

export const Body = styled.div`
  background-color: ${backgroundColor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Todo = styled.div`
  padding: 10px;
  order: 6;
  flex-grow: 4;
  width: 180px;
  height: 250px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;

  &.done {
    background: ${primaryCardColor};
    color: ${primaryTextColor};
    font-weight: bold;
  }
  &.undone {
    background: ${primaryDarkColor};
    color: ${primaryTextColor};
    font-weight: bold;
  }
`;

export const TodoList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4em;
`;

export const Total = styled.div`
  color: ${primaryColor};
  span {
    color: ${primaryTextColor};
  }
`;

export const Done = styled.div`
  color: ${primaryColor};
  span {
    color: ${primaryTextColor};
    text-align: center;
  }
`;

export const Undone = styled.div`
  color: ${primaryColor};
  span {
    color: ${primaryTextColor};
  }
`;
