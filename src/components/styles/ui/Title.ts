import styled from 'styled-components';
import { sharedStyle } from './SharedStyle';

export const Title = styled.h1`
  font-size: 46px;
  ${sharedStyle};

  @media (max-width: 760px) {
    text-align: center;
  }
`;
