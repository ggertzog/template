import styled from "styled-components";
import { sharedStyle } from "./SharedStyle";

export const SecondTitle = styled.h2`
  margin: 0 auto;
  font-size: 46px;
  text-align: center;
  ${sharedStyle};

  @media (max-width: 760px) {
    text-align: center;
  }
`;