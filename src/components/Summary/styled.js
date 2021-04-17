import styled from 'styled-components';
import { primaryDarkColor, primaryTextColor } from '../../config/colors';

export const Div = styled.div`
  background: ${primaryDarkColor};
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${primaryTextColor};
    margin: 0 10px 0;
    font-weight: bold;
  }
`;
