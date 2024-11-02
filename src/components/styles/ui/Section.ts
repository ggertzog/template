import styled, { css } from 'styled-components';
import { colors } from '../vendor/colors';

export const Section = styled.div<{ $secondary?: boolean }>`
position: relative;
  width: 100%;
  background-color: ${colors.secondary};
  padding: 50px 20px;
  flex: 1;

  ${(props) =>
    props.$secondary &&
    css`
      background-color: #f5f5f5;
    `}

  @media (max-width: 760px) {
    padding: 30px 20px;
  }
`;
