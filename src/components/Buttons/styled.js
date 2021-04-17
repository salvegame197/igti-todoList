import styled from 'styled-components';
import {
  primaryDarkColor,
  primaryTextColor,
  primaryColor,
} from '../../config/colors';

export const Button = styled.button`
  padding: 0.8em;
  margin: 0.2em;
  border-radius: 0.4em;
  color: ${primaryTextColor};
  &.active {
    background: ${primaryColor};
  }
  &.deactive {
    background: ${primaryDarkColor};
  }
`;

export const Label = styled.label`
  color: ${primaryTextColor};
`;

export const Container = styled.div``;
