import styled from "styled-components";

export const Video = styled.iframe`
  width: 600px;
  height: 350px;

  @media (max-width: 1320px) {
    width: 400px;
    height: 220px;
  }

  @media (max-width: 500px) {
    width: 350px;
    height: 220px;
  }
`;