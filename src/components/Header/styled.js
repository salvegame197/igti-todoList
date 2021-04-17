import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.div`
  background: ${primaryColor};
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  div::div {
    background: ${primaryColor};
  }

  flex-flow: column nowrap;
  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
