import styled from "styled-components";
import { fonts } from "../vendor/fonts";


const NotFoundStyles = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-family: ${fonts.family};
    font-size: 36px;
    font-weight: ${fonts.weightBold};
`;

export default NotFoundStyles;