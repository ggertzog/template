import styled, { css } from "styled-components";

export const Container = styled.div<{ $column?: boolean; $center: boolean }>`
  margin: 0 auto;
  padding: 50px 0;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => css`
    ${props.$column &&
    css`
      flex-direction: column;
      gap: 50px;
    `}
    ${props.$center &&
    css`
      align-items: center;
    `}
  `}

  @media (max-width: 1320px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 1000px) {
    padding: 30px 0;
  }
`;