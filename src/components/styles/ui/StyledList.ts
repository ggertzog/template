import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;
  grid-row-gap: 80px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;